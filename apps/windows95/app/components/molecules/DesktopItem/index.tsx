import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

type DesktopItemProps = {
  image: StaticImageData | string;
  name: string;
  position: { row: number; col: number };
  // eslint-disable-next-line no-unused-vars
  onClick: (e: React.MouseEvent) => void;
  onDoubleClick: () => void;
  selected: boolean;
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

  function handleClick(e: React.MouseEvent) {
    props.onClick(e);
  }

  const classNames = ["flex", "flex-col", "items-center", "whitespace-nowrap"];
  const classNamesText = ["text-[#c2f0f9]", "cursor-default", "select-none"];

  if (dragging) {
    classNames.push("opacity-50");
  }

  if (props.selected) {
    classNamesText.push("bg-[#0005a0]");
    classNamesText.push("border");
    classNamesText.push("border-dotted");
  }

  return (
    <div
      draggable
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      onClick={(e: React.MouseEvent) => handleClick(e)}
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
      <span className={classNamesText.join(" ")}>
        {props.name}
      </span>
    </div>
  );
}
