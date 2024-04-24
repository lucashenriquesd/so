"use client";

import React, { useState, ComponentType } from "react";
import WindowsScreen from "@/app/components/organisms/WindowsScreen";
import WindowsBar from "@/app/components/organisms/WindowsBar";
import WindowsBarApp from "@/app/components/atoms/WindowsBarApp";

type AppType = ComponentType<{
  name: string;
  selected: boolean;
  setSelected: () => void;
}>;

type AppInstance = {
  Component: AppType;
  props: {
    name: string;
  };
};

export default function Home() {
  const tempDefaultOpenedApps: AppInstance[] = [
    { Component: WindowsBarApp, props: { name: "My Computer" } },
    { Component: WindowsBarApp, props: { name: "My Documents" } },
  ];
  const [openedApps, setOpenedApps] = useState(tempDefaultOpenedApps);
  const [selectedApp, setSelectedApp] = useState<number | null>(null);

  const handleAppClick = (index: number) => {
    setSelectedApp((prevSelectedApp) =>
      prevSelectedApp === index ? null : index
    );
  };

  return (
    <WindowsScreen>
      <WindowsBar>
        {openedApps.map(({ Component: App, props }, i) => (
          <App
            key={i}
            {...props}
            selected={selectedApp === i}
            setSelected={() => handleAppClick(i)}
          />
        ))}
      </WindowsBar>
    </WindowsScreen>
  );
}
