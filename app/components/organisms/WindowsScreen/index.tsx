import React, { useState, ComponentType } from "react";
import WindowsBar from "@/app/components/organisms/WindowsBar";
import WindowsBarApp from "@/app/components/atoms/WindowsBarApp";
import Desktop from "@/app/components/organisms/Desktop";
import DesktopItem from "@/app/components/molecules/DesktopItem";

type AppType = ComponentType<{
  name: string;
  selected: boolean;
  handleAppClick: () => void;
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
    console.log("Desktop WindowsScreen clicked");
    setisStartSelected(false);
    setSelectedApp(null);
  }

  function handleStartClick() {
    console.log(`Start WindowsScreen clicked`);
    setisStartSelected(!isStartSelected);
  }

  function handleAppClick(index: number) {
    console.log(`${openedApps[index].props.name} WindowsScreen clicked`);
    setisStartSelected(false);
    setSelectedApp((prevSelectedApp) =>
      prevSelectedApp === index ? null : index
    );
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
          />
        ))}
      </Desktop>
      <WindowsBar
        isStartSelected={isStartSelected}
        handleStartClick={handleStartClick}
      >
        {openedApps.map(({ Component: App, props }, i) => (
          <App
            key={i}
            {...props}
            selected={selectedApp === i}
            handleAppClick={() => handleAppClick(i)}
          />
        ))}
      </WindowsBar>
    </div>
  );
}
