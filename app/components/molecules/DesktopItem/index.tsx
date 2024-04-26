import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

type DesktopItemProps = {
  image: StaticImageData | string;
  name: string;
  position: { row: number; col: number };
  onDoubleClick: () => void;
};

export default function DesktopItem(props: DesktopItemProps) {
  const [dragging, setDragging] = useState(false);

  function dragStart(e: React.DragEvent<HTMLDivElement>) {
    setDragging(true);
    e.dataTransfer.setData("text/plain", props.name);
  }

  function dragEnd() {
    setDragging(false);
  }

  const classNames = ["flex flex-col items-center whitespace-nowrap"];

  if (dragging) {
    classNames.push("opacity-50");
  }

  return (
    <div
      draggable
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      onDoubleClick={props.onDoubleClick}
      className={classNames.join(" ")}
      style={{ gridRow: props.position.row, gridColumn: props.position.col }}
    >
      {props.image && (
        <Image
          draggable="false"
          src={props.image}
          alt={props.name}
          width={45}
          height={1}
        />
      )}
      <span className="text-[#c2f0f9] cursor-default select-none">
        {props.name}
      </span>
    </div>
  );
}
