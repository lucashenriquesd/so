"use client";

import { useState, ReactNode } from "react";
import WindowsScreen from "@/app/components/organisms/WindowsScreen";
import WindowsBar from "@/app/components/organisms/WindowsBar";
import WindowsBarApp from "@/app/components/atoms/WindowsBarApp";

export default function Home() {
  const [openedApps, setOpenedApps] = useState<ReactNode[]>([
    <WindowsBarApp key={0} />,
    <WindowsBarApp key={1} />,
    <WindowsBarApp key={2} />,
  ]);
  return (
    <WindowsScreen>
      <WindowsBar>
        {openedApps}
      </WindowsBar>
    </WindowsScreen>
  );
}
