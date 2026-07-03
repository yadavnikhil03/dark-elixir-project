'use client'
import React, { useEffect, useRef, useState, useId } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import imagesLoaded from 'imagesloaded'
import { cn } from '@/lib/utils'
import { FaGithub, FaSlack, FaTwitter } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

export interface BentoItem {
    id: number | string
    title: string
    subtitle: string
    description: string
    icon: React.ReactNode
    content?: React.ReactNode
    image?: string
}

export interface StaggeredGridProps {
    images: string[]
    bentoItems: BentoItem[]
    centerText?: string
    credits?: {
        madeBy: { text: string; href: string }
        moreDemos: { text: string; href: string }
    }
    className?: string
    showFooter?: boolean
    scroller?: string | Element | Window | null
}

export function StaggeredGrid({
    images,
    bentoItems,
    centerText = "Halcyon",
    credits = {
        madeBy: { text: "@codrops", href: "https://x.com/codrops" },
        moreDemos: { text: "More demos", href: "https://tympanus.net/codrops/demos" }
    },
    className,
    showFooter = true,
    scroller
}: StaggeredGridProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    const gridFullRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const [activeBento, setActiveBento] = useState<number>(0);

    const splitText = (text: string) => {
        return text.split('').map((char, i) => (
            <span key={i} className="char inline-block" style={{ willChange: 'transform' }}>{char === ' ' ? '\u00A0' : char}</span>
        ))
    }

    useEffect(() => {
        const handleLoad = () => {
            document.body.classList.remove('loading')
            setIsLoaded(true)
        }
        const imgLoad = imagesLoaded(document.querySelectorAll('.grid__item-img'), { background: true }, handleLoad)

        return () => {
        }
    }, [])

    useEffect(() => {
        if (!isLoaded) return
        if (textRef.current) {
            const chars = textRef.current.querySelectorAll('.char')
            gsap.timeline({
                scrollTrigger: {
                    trigger: textRef.current,
                    scroller: scroller || undefined,
                    start: 'top bottom',
                    end: 'center center-=25%',
                    scrub: 1,
                }
            })
                .from(chars, {
                    ease: 'sine.out',
                    yPercent: 300,
                    autoAlpha: 0,
                    stagger: {
                        each: 0.05,
                        from: 'center'
                    }
                })
        }
        if (gridFullRef.current) {
            const gridFullItems = gridFullRef.current.querySelectorAll('.grid__item')
            const numColumns = getComputedStyle(gridFullRef.current).getPropertyValue('grid-template-columns').split(' ').length
            const middleColumnIndex = Math.floor(numColumns / 2)

            const columns: Element[][] = Array.from({ length: numColumns }, () => [])
            gridFullItems.forEach((item: any) => {
                const colAttr = item.getAttribute('data-col');
                const columnIndex = colAttr !== null ? parseInt(colAttr, 10) : 0;
                if (columns[columnIndex]) {
                    columns[columnIndex].push(item)
                }
            })

            columns.forEach((columnItems, columnIndex) => {
                const delayFactor = Math.abs(columnIndex - middleColumnIndex) * 0.2

                gsap.timeline({
                    scrollTrigger: {
                        trigger: gridFullRef.current,
                        scroller: scroller || undefined,
                        start: 'top bottom',
                        end: 'center center',
                        scrub: 1.5,
                    }
                })
                    .from(columnItems, {
                        yPercent: 450,
                        autoAlpha: 0,
                        delay: delayFactor,
                        ease: 'sine.out',
                    })
                    .from(columnItems.map(item => item.querySelector('.grid__item-img')), {
                        transformOrigin: '50% 0%',
                        ease: 'sine.out',
                    }, 0)
            })
            const bentoContainer = gridFullRef.current.querySelector('.bento-container')

            if (bentoContainer) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: gridFullRef.current,
                        scroller: scroller || undefined,
                        start: 'top top+=15%',
                        end: 'bottom center',
                        scrub: 1,
                        invalidateOnRefresh: true,
                    }
                })
                tl.to(bentoContainer, {
                    y: window.innerHeight * 0.1,
                    scale: 1.5,
                    zIndex: 1000,
                    ease: 'power2.out',
                    duration: 1,
                    force3D: true
                }, 0)
            }
        }
    }, [isLoaded])
    const mixedGridItems: (string | 'BENTO_GROUP')[] = Array.from({ length: 21 }, (_, i) => images[i % images.length]);
    mixedGridItems[16] = 'BENTO_GROUP';

    return (
        <div
            className={cn("shadow relative overflow-hidden w-full", className)}
            style={{
                '--grid-item-translate': '0px',
            } as React.CSSProperties}
        >
            <section className="grid place-items-center w-full relative mt-[10vh]">
                <div ref={textRef} className="text font-display uppercase font-black tracking-tighter flex content-center text-[clamp(3rem,14vw,10rem)] leading-[0.7] text-white">
                    {splitText(centerText)}
                </div>
            </section>

            <section className="grid place-items-center w-full relative">
                <div ref={gridFullRef} className="grid--full relative w-full my-[10vh] h-auto aspect-[1.1] max-w-none p-4 grid gap-4 grid-cols-7 grid-rows-5">
                    <div className="grid-overlay absolute inset-0 z-[15] pointer-events-none opacity-0 bg-black/80 rounded-lg transition-opacity duration-500" />
                    {mixedGridItems.map((item, i) => {
                        if (item === 'BENTO_GROUP') {
                            if (!bentoItems || bentoItems.length === 0) return null;

                            return (
                                <div key="bento-group" data-col={2} className="grid__item bento-container col-span-3 row-span-1 relative z-20 flex items-center justify-center gap-2 h-full w-full will-change-transform">
                                    {bentoItems.map((bentoItem, index) => {
                                        const isActive = activeBento === index;
                                        return (
                                            <div
                                                key={bentoItem.id}
                                                className={cn(
                                                    "relative cursor-pointer overflow-hidden rounded-2xl h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-white/5",
                                                    isActive
                                                        ? "bg-white/[0.04] shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                                                        : "bg-white/[0.01]"
                                                )}
                                                style={{ width: isActive ? "60%" : "20%" }}
                                                onMouseEnter={() => setActiveBento(index)}
                                                onClick={() => setActiveBento(index)}
                                            >
                                                <div className="relative z-10 w-full h-full flex flex-col p-0">
                                                    <div className={cn(
                                                        "absolute inset-0 flex flex-col transition-all duration-500 ease-in-out",
                                                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                                                    )}>
                                                        <div className="absolute inset-0 overflow-hidden z-0 group/img">
                                                            {bentoItem.image ? (
                                                                <>
                                                                    <img
                                                                        src={bentoItem.image}
                                                                        alt={bentoItem.title}
                                                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 opacity-90 group-hover/img:opacity-100 group-hover/img:scale-110"
                                                                    />
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />
                                                                </>
                                                            ) : (
                                                              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                                                            )}
                                                        </div>
                                                        <div className="absolute bottom-0 left-0 w-full h-24 flex items-end justify-between p-5 z-20 bg-gradient-to-t from-black/80 to-transparent">
                                                            <div className="flex flex-col relative z-10">
                                                                <h3 className="text-xl font-display tracking-tight font-bold text-white mb-1">{bentoItem.title}</h3>
                                                                <p className="text-xs text-white/50 max-w-[200px] leading-relaxed">{bentoItem.description}</p>
                                                            </div>
                                                            <div className="text-white transition-colors drop-shadow-md relative z-10 mb-2">
                                                                {bentoItem.icon}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cn(
                                                    "absolute inset-0 flex flex-col items-center justify-center gap-3 transition-all duration-500",
                                                    isActive ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
                                                )}>
                                                    <div className="text-white/40 group-hover:text-white transition-colors">
                                                        {bentoItem.icon}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        }
                        if (i === 17 || i === 18) return null;

                        if (typeof item === 'string') {
                            return (
                                <figure key={`img-${i}`} data-col={i % 7} className="grid__item m-0 relative z-10 [perspective:800px] will-change-[transform,opacity] group cursor-pointer h-full">
                                    <div className="grid__item-img w-full h-full [backface-visibility:hidden] will-change-transform rounded-xl overflow-hidden border border-white/5 bg-white/[0.02] flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:border-white/20">
                                        
                                        <div 
                                          className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-110" 
                                          style={{ backgroundImage: `url(${item})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/80 to-[#050505] z-0" />
                                        
                                    </div>
                                </figure>
                            )
                        }
                        return null;
                    })}
                </div>
            </section>
        </div>
    )
}

export default StaggeredGrid
