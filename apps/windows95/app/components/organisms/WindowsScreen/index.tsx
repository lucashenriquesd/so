import React, { useState, ComponentType } from "react";
import WindowsBar from "@/app/components/organisms/WindowsBar";
import WindowsBarApp from "@/app/components/atoms/WindowsBarApp";
import Desktop from "@/app/components/organisms/Desktop";
import DesktopItem from "@/app/components/molecules/DesktopItem";
import Window from "@/app/components/organisms/Window";

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

type WindowType = {
  id: number;
  name: string;
  xAxis: number;
  yAxis: number;
  zIndex: number;
  selected?: boolean;
};

export default function WindowsScreen() {
  const tempDefaultOpenedApps: AppInstance[] = [];
  const [openedApps, setOpenedApps] = useState(tempDefaultOpenedApps);
  const [selectedOpenedApp, setSelectedOpenedApp] = useState<number | null>(
    null
  );
  const [isStartSelected, setisStartSelected] = useState(false);
  const [desktopItems, setDesktopItems] = useState([
    {
      name: "My Computer",
      image: "/windows95-mycomputer.png",
      position: { row: 1, col: 1 },
    },
    {
      name: "My Documents",
      image: "/windows95-mycomputer.png",
      position: { row: 2, col: 1 },
    },
  ]);
  const [selectedDesktopItem, setSelectedDesktopItem] = useState<string | null>(
    null
  );
  const [openWindows, setOpenWindows] = useState<WindowType[]>([]);

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
    setSelectedDesktopItem(null);
  }

  function handleStartClick(e: React.MouseEvent) {
    e.stopPropagation();
    console.log(`StartButton clicked`);
    setSelectedDesktopItem(null);
    setSelectedOpenedApp(null);
    setisStartSelected(!isStartSelected);
  }

  function handleWindowsBarClick() {
    console.log(`WindowsBar clicked`);
    setSelectedDesktopItem(null);
  }

  function handleOpenedAppClick(e: React.MouseEvent, index: number) {
    e.stopPropagation();
    console.log(`${openedApps[index].props.name} opened app clicked`);
    setisStartSelected(false);
    setSelectedDesktopItem(null);
    setSelectedOpenedApp((prevSelectedOpenedApp) =>
      prevSelectedOpenedApp === index ? null : index
    );
  }

  function handleDesktopItemClick(e: React.MouseEvent, name: string) {
    e.stopPropagation();
    console.log(`${name} clicked`);
    setisStartSelected(false);
    setSelectedOpenedApp(null);
    if (selectedDesktopItem === name) {
      setSelectedDesktopItem(null);
    } else {
      setSelectedDesktopItem(name);
    }
  }

  function handleDesktopItemDoubleClick(name: string) {
    console.log(`${name} double clicked`);
    const xAxis = Math.floor(Math.random() * 1200);
    const yAxis = Math.floor(Math.random() * 350);
    const id = openWindows.length;
    const zIndex = openWindows.length;
    setOpenedApps((prevApps) => [
      ...prevApps,
      { Component: WindowsBarApp, props: { name } },
    ]);
    setOpenWindows((prevWindows) => [
      ...prevWindows,
      { id, name, xAxis, yAxis, zIndex },
    ]);
  }

  function focusWindow(id: number) {
    setOpenWindows((prevWindows) => {
      const maxZIndex = Math.max(...prevWindows.map((window) => window.zIndex));
      return prevWindows.map((window) => {
        if (window.id === id) {
          return { ...window, zIndex: maxZIndex + 1, selected: true };
        } else {
          return { ...window, selected: false };
        }
      });
    });
  }

  function handleWindowClick(
    e: React.MouseEvent,
    id: number,
    clickedWindowName: string
  ) {
    e.stopPropagation();
    console.log(`${clickedWindowName} Window clicked`);
  }

  function handleWindowMouseDown(
    e: React.MouseEvent,
    id: number,
    clickedWindowName: string
  ) {
    e.stopPropagation();
    console.log(`${clickedWindowName} Window mouse down`);
    focusWindow(id);
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
            selected={selectedDesktopItem === item.name}
          />
        ))}
        {openWindows.map((window, i) => (
          <Window
            key={i}
            id={window.id}
            name={window.name}
            xAxis={window.xAxis}
            yAxis={window.yAxis}
            zIndex={window.zIndex}
            selected={window.selected}
            onMouseDown={(e: React.MouseEvent) =>
              handleWindowMouseDown(e, window.id, window.name)
            }
            onClick={(e: React.MouseEvent) =>
              handleWindowClick(e, window.id, window.name)
            }
          >
            Content
          </Window>
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
            handleOpenedAppClick={(e: React.MouseEvent) =>
              handleOpenedAppClick(e, i)
            }
          />
        ))}
      </WindowsBar>
    </div>
  );
}
