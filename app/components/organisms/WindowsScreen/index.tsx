import React, { useState, ComponentType } from "react";
import WindowsBar from "@/app/components/organisms/WindowsBar";
import WindowsBarApp from "@/app/components/atoms/WindowsBarApp";
import Desktop from "@/app/components/organisms/Desktop";
import DesktopItem from "@/app/components/molecules/DesktopItem";

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

export default function WindowsScreen() {
  const tempDefaultOpenedApps: AppInstance[] = [
    { Component: WindowsBarApp, props: { name: "My Computer" } },
    { Component: WindowsBarApp, props: { name: "My Documents" } },
  ];
  const [openedApps, setOpenedApps] = useState(tempDefaultOpenedApps);
  const [selectedApp, setSelectedApp] = useState<number | null>(null);
  const [isStartSelected, setisStartSelected] = useState(false);

  const handleDesktopClick = () => {
    setisStartSelected(false);
    setSelectedApp(null);
  };

  const handleStartClick = () => {
    setisStartSelected(!isStartSelected);
  };

  const handleAppClick = (index: number) => {
    setisStartSelected(false);
    setSelectedApp((prevSelectedApp) =>
      prevSelectedApp === index ? null : index
    );
  };

  return (
    <div className="min-h-screen relative flex flex-col bg-[#008080]">
      <Desktop onDesktopClick={handleDesktopClick}>
        <DesktopItem />
      </Desktop>
      <WindowsBar
        isStartSelected={isStartSelected}
        setIsStartSelected={handleStartClick}
      >
        {openedApps.map(({ Component: App, props }, i) => (
          <App
            key={i}
            {...props}
            selected={selectedApp === i}
            setSelected={() => handleAppClick(i)}
          />
        ))}
      </WindowsBar>
    </div>
  );
}
