import React, { useState, ComponentType } from "react";
import WindowsBar from "@/app/components/organisms/WindowsBar";
import WindowsBarApp from "@/app/components/atoms/WindowsBarApp";
import Desktop from "@/app/components/organisms/Desktop";
import DesktopItem from "@/app/components/molecules/DesktopItem";

type AppType = ComponentType<{
  name: string;
  selected: boolean;
  // eslint-disable-next-line no-unused-vars
  handleOpenedAppClick: (e: React.MouseEvent) => void;
}>;

type AppInstance = {
  Component: AppType;
  props: {
    name: string;
  };
};

export default function WindowsScreen() {
  const tempDefaultOpenedApps: AppInstance[] = [];
  const [openedApps, setOpenedApps] = useState(tempDefaultOpenedApps);
  const [selectedOpenedApp, setSelectedOpenedApp] = useState<number | null>(null);
  const [isStartSelected, setisStartSelected] = useState(false);
  const [desktopItems, setDesktopItems] = useState([
    {
      name: "My Computer",
      image: "/windows95-mycomputer.png",
      position: { row: 1, col: 1 },
    },
  ]);

  function moveDesktopItem(
    name: string,
    newPosition: { row: number; col: number }
  ) {
    const positionOccupied = desktopItems.some(
      (item) =>
        item.name !== name &&
        item.position.row === newPosition.row &&
        item.position.col === newPosition.col
    );

    if (!positionOccupied) {
      setDesktopItems((items) =>
        items.map((item) =>
          item.name === name ? { ...item, position: newPosition } : item
        )
      );
    }
  }

  function handleDesktopClick() {
    console.log("Desktop clicked");
    setisStartSelected(false);
    setSelectedOpenedApp(null);
  }

  function handleStartClick(e: React.MouseEvent) {
    e.stopPropagation();
    console.log(`StartButton clicked`);
    setisStartSelected(!isStartSelected);
  }

  function handleWindowsBarClick() {
    console.log(`WindowsBar clicked`);
  }

  function handleOpenedAppClick(e: React.MouseEvent, index: number) {
    e.stopPropagation();
    console.log(`${openedApps[index].props.name} opened app clicked`);
    setisStartSelected(false);
    setSelectedOpenedApp((prevSelectedOpenedApp) =>
      prevSelectedOpenedApp === index ? null : index
    );
  }

  function handleDesktopItemClick(e: React.MouseEvent, name: string) {
    e.stopPropagation();
    console.log(`${name} clicked`);
  }

  function handleDesktopItemDoubleClick(name: string) {
    console.log(`${name} double clicked`);
    setOpenedApps((prevApps) => [
      ...prevApps,
      { Component: WindowsBarApp, props: { name } },
    ]);
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#008080]">
      <Desktop
        handleDesktopClick={handleDesktopClick}
        moveDesktopItem={moveDesktopItem}
      >
        {desktopItems.map((item, i) => (
          <DesktopItem
            key={i}
            image={item.image}
            name={item.name}
            position={item.position}
            onClick={(e: React.MouseEvent) =>
              handleDesktopItemClick(e, item.name)
            }
            onDoubleClick={() => handleDesktopItemDoubleClick(item.name)}
          />
        ))}
      </Desktop>
      <WindowsBar
        isStartSelected={isStartSelected}
        handleStartClick={(e: React.MouseEvent) => handleStartClick(e)}
        handleWindowsBarClick={handleWindowsBarClick}
      >
        {openedApps.map(({ Component: App, props }, i) => (
          <App
            key={i}
            {...props}
            selected={selectedOpenedApp === i}
            handleOpenedAppClick={(e: React.MouseEvent) => handleOpenedAppClick(e, i)}
          />
        ))}
      </WindowsBar>
    </div>
  );
}
