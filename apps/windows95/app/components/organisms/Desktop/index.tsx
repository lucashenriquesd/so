import React from "react";

type DesktopProps = {
  children?: React.ReactNode;
  handleDesktopClick?: () => void;
  moveDesktopItem: (
    name: string,
    position: { row: number; col: number }
  ) => void;
};

export default function Desktop(props: DesktopProps) {
  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  function drop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const droppedName = e.dataTransfer.getData("text/plain");
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const col = Math.ceil(x / (rect.width / 12));
    const row = Math.ceil(y / (rect.height / 6));
    props.moveDesktopItem(droppedName, { row, col });
  }

  return (
    <div
      onDragOver={dragOver}
      onDrop={drop}
      className="flex-1 grid grid-cols-12 grid-rows-6 grid-flow-col gap-4 p-4"
      onClick={props.handleDesktopClick}
    >
      {props.children}
    </div>
  );
}
