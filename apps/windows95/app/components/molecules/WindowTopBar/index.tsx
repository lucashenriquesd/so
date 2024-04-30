type WindowTopBarProps = {
  icon?: React.ReactNode;
  name: string;
  selected?: boolean;
  // eslint-disable-next-line no-unused-vars
  onMouseDown: (e: React.MouseEvent) => void;
  // eslint-disable-next-line no-unused-vars
  onMouseMove: (e: React.MouseEvent) => void;
};

export default function WindowTopBar(props: WindowTopBarProps) {
  const containerClassNames = ["bg-[#d3d3d3]", "p-[3px]", "h-[30px]"];
  const textClassNames = ["select-none"];

  if (props.selected) {
    containerClassNames.push("bg-[#000ab2]");
    textClassNames.push("text-white");
  }

  return (
    <div
      onMouseDown={props.onMouseDown}
      onMouseMove={props.onMouseMove}
      className={containerClassNames.join(" ")}
    >
      {props.icon}
      <span className={textClassNames.join(" ")}>{props.name}</span>
    </div>
  );
}
