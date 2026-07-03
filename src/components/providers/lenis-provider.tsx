"use client";

import { ReactLenis } from "lenis/react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.12, smoothWheel: true, wheelMultiplier: 1.2 }}>
      {children}
    </ReactLenis>
  );
}
