import { useState, useEffect } from "react";
import WindowTopBar from "@/app/components/molecules/WindowTopBar";
import WindowContent from "@/app/components/organisms/WindowContent";

type WindowProps = {
  id: number;
  name: string;
  children?: React.ReactNode;
  xAxis: number;
  yAxis: number;
  zIndex: number;
  selected?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick: (e: React.MouseEvent) => void;
  // eslint-disable-next-line no-unused-vars
  onMouseDown: (e: React.MouseEvent) => void;
};

export default function Window(props: WindowProps) {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: props.xAxis, y: props.yAxis });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseUpDocument = () => {
      setDragging(false);
    };

    if (dragging) {
      document.addEventListener("mouseup", handleMouseUpDocument);
    }

    return () => {
      document.removeEventListener("mouseup", handleMouseUpDocument);
    };
  }, [dragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    props.onMouseDown(e);
    setDragging(true);
    setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging) {
      setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
  };

  const containerClassNames = [
    "absolute",
    "w-[200px]",
    "h-[200px]",
    "bg-white",
    "border-1",
    "border-black",
  ];

  return (
    <div
      className={containerClassNames.join(" ")}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        zIndex: props.zIndex,
      }}
      onClick={props.onClick}
    >
      <WindowTopBar
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        name={props.name}
        selected={props.selected}
      />
      <WindowContent>{props.children}</WindowContent>
    </div>
  );
}
