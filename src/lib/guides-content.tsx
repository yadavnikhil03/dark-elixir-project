import React from 'react';
import Link from 'next/link';

export type GuideContent = {
  title: string;
  description: string;
  prerequisites: React.ReactNode[];
  steps: React.ReactNode[];
  warning?: string;
};

export const guidesData: Record<string, GuideContent> = {
  "unlock-bootloader": {
    title: "Unlock Bootloader",
    description: "The essential first step to flashing any custom ROM or recovery on your Redmi Note 5 Pro.",
    warning: "Unlocking the bootloader will WIPE ALL DATA on your phone. Please backup your photos, contacts, and files before proceeding.",
    prerequisites: [
      "A Xiaomi Account (Mi Account) bound to your device.",
      "A Windows PC with internet access.",
      "Original or high-quality USB Cable.",
      "At least 50% battery on your phone.",
      <>Proper USB Drivers installed (<a href="https://forum.xda-developers.com/t/official-tool-windows-adb-fastboot-and-drivers-15-seconds-adb-installer-v1-4-3.2588979/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">15 Seconds ADB Installer</a>).</>
    ],
    steps: [
      <><strong>Enable Developer Options:</strong> Go to Settings {'>'} About Phone and tap on 'MIUI Version' 7 times until you see "You are now a developer!".</>,
      <><strong>Bind Account:</strong> Go to Settings {'>'} Additional Settings {'>'} Developer Options {'>'} Mi Unlock Status. Turn off Wi-Fi, enable Mobile Data, and tap "Add account and device".</>,
      <><strong>Wait for the Timer:</strong> Xiaomi usually enforces a waiting period (often 168 hours / 7 days). You must wait this time out. Do not log out of your Mi Account on the phone during this period.</>,
      <><strong>Download Mi Unlock Tool:</strong> Download the official <a href="https://en.miui.com/unlock/download_en.html" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">Mi Unlock Tool</a> on your PC and extract it.</>,
      <><strong>Enter Fastboot Mode:</strong> Turn off your phone. Hold <strong>Volume Down + Power</strong> until the Fastboot bunny logo appears.</>,
      <><strong>Unlock:</strong> Open Mi Unlock Tool on your PC, sign in with the same Mi Account, connect your phone via USB, and click "Unlock". Once it hits 100%, your phone will reboot and wipe its data.</>
    ]
  },
  "install-twrp": {
    title: "Install Custom Recovery (TWRP/OrangeFox)",
    description: "Learn how to flash a custom recovery using fastboot to install ZIP files and make backups.",
    warning: "Ensure your bootloader is unlocked before attempting to flash a custom recovery. Flashing the wrong recovery image can cause a soft brick.",
    prerequisites: [
      "An unlocked bootloader.",
      <>Proper USB Drivers installed (<a href="https://forum.xda-developers.com/t/official-tool-windows-adb-fastboot-and-drivers-15-seconds-adb-installer-v1-4-3.2588979/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">15 Seconds ADB Installer</a>) so your PC recognizes fastboot.</>,
      <>A PC with <a href="https://forum.xda-developers.com/t/tool-minimal-adb-and-fastboot-2-9-18.2317790/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">Minimal ADB & Fastboot</a> installed.</>,
      <>A custom recovery image file for Whyred (<a href="https://dl.twrp.me/whyred/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">TWRP</a> or <a href="https://orangefox.download/device/whyred" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">OrangeFox</a>).</>
    ],
    steps: [
      <><strong>Download Recovery:</strong> Download the recovery `.img` file and place it inside your ADB/Fastboot folder on your PC. Rename it to <code>recovery.img</code> for convenience.</>,
      <><strong>Enter Fastboot Mode:</strong> Power off your phone, then hold <strong>Volume Down + Power</strong> to enter Fastboot mode. Connect to your PC.</>,
      <><strong>Open Terminal:</strong> Open a command prompt or PowerShell window inside the ADB/Fastboot folder.</>,
      <><strong>Check Connection:</strong> Run <code>fastboot devices</code>. You should see your device serial number.</>,
      <><strong>Flash Recovery:</strong> Run the command: <code className="bg-white/10 px-2 py-1 rounded text-sm font-mono text-blue-300">fastboot flash recovery recovery.img</code></>,
      <><strong>Boot into Recovery:</strong> Before restarting normally, you MUST boot directly into the recovery to prevent MIUI from overwriting it. Hold <strong>Volume Up + Power</strong> until the Redmi logo appears, then release.</>
    ]
  },
  "flash-rom": {
    title: "How to Flash a Custom ROM",
    description: "Step-by-step guide on wiping partitions, flashing firmware, and installing your new Android ROM.",
    warning: "Flashing a ROM will replace your current OS. Make sure you backup everything. The Project DarkElixir team is not responsible for any data loss.",
    prerequisites: [
      "Unlocked Bootloader and Custom Recovery (TWRP or OrangeFox) installed.",
      <>The Custom ROM .zip file (<Link href="/downloads?category=rom" className="text-blue-400 hover:underline">Download here</Link>).</>,
      <>GApps .zip file (<a href="https://nikgapps.com/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">NikGApps</a> or <a href="https://opengapps.org/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">OpenGApps</a>) if your ROM is Vanilla.</>,
      <>Latest Whyred Firmware .zip (<Link href="/downloads?category=firmware" className="text-blue-400 hover:underline">Download Firmware</Link>).</>
    ],
    steps: [
      <><strong>Boot to Recovery:</strong> Turn off your phone and hold <strong>Volume Up + Power</strong> to enter your custom recovery.</>,
      <><strong>Format Data (Crucial):</strong> Go to Wipe {'>'} Format Data {'>'} type <code>yes</code>. This removes encryption and wipes the internal storage. <em>(You will need to transfer the ROM zip to your phone from your PC after this step if you didn't use an SD card/OTG)</em>.</>,
      <><strong>Advanced Wipe:</strong> Go to Wipe {'>'} Advanced Wipe. Select <strong>Dalvik/ART Cache, Cache, System, Data, and Vendor</strong>. Swipe to wipe.</>,
      <><strong>Flash Firmware:</strong> Go to Install, select the Firmware .zip file, and flash it.</>,
      <><strong>Flash ROM:</strong> Go to Install, select the Custom ROM .zip file, and swipe to flash. Wait for it to complete.</>,
      <><strong>Flash GApps (Optional):</strong> If your ROM is Vanilla, flash your downloaded GApps .zip immediately after the ROM.</>,
      <><strong>Reboot:</strong> Once everything is flashed, go back to the main menu and select Reboot {'>'} System. The first boot can take up to 5-10 minutes. Be patient!</>
    ]
  },
  "fix-bootloop": {
    title: "Fix Bootloop & Soft Brick",
    description: "Phone stuck on the Mi logo? Don't panic. Learn how to recover your device safely using Mi Flash Tool.",
    warning: "Using Mi Flash Tool will completely wipe your phone. Do NOT select 'Clean all and lock' unless you specifically want to re-lock your bootloader (which is dangerous on modified firmware).",
    prerequisites: [
      "A Windows PC.",
      <>Proper USB Drivers installed (<a href="https://forum.xda-developers.com/t/official-tool-windows-adb-fastboot-and-drivers-15-seconds-adb-installer-v1-4-3.2588979/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">15 Seconds ADB Installer</a>) so your PC recognizes fastboot.</>,
      <>Xiaomi <a href="https://xiaomiflashtool.com/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">Mi Flash Tool</a> installed.</>,
      <>Qualcomm USB Drivers installed (usually included in Mi Flash Tool, or install manually).</>,
      <>An official Fastboot ROM (.tgz file) for Redmi Note 5 Pro (Whyred) (<a href="https://mifirm.net/model/whyred.ttt" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">Download here</a>).</>
    ],
    steps: [
      <><strong>Download Fastboot ROM:</strong> Download the official Global or region-specific Fastboot ROM (must be a <code>.tgz</code> file, not <code>.zip</code>). Extract the <code>.tgz</code> file using WinRAR or 7-Zip until you get a folder containing a <code>images</code> subfolder and several <code>.bat</code> scripts.</>,
      <><strong>Enter Fastboot:</strong> Force power off your phone by holding the Power button for 15 seconds. Then hold <strong>Volume Down + Power</strong> to enter Fastboot mode. Connect to your PC.</>,
      <><strong>Open Mi Flash Tool:</strong> Launch Mi Flash Tool. Click "Refresh" to ensure your device shows up in the list.</>,
      <><strong>Select ROM Folder:</strong> Click "Select" and choose the extracted Fastboot ROM folder.</>,
      <><strong>Select Flash Mode (CRITICAL):</strong> At the bottom of the tool, ensure you select <strong>"Clean all"</strong>. Do NOT select "Clean all and lock" as locking the bootloader on non-stock firmware will hard brick your device!</>,
      <><strong>Flash:</strong> Click "Flash" and wait. The process usually takes 300-600 seconds. Once it says "Success", the phone will automatically reboot into the official MIUI setup screen.</>
    ]
  }
};
