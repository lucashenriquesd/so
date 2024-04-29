type WindowTopBarProps = {
  icon?: React.ReactNode;
  name: string;
  selected?: boolean;
};

export default function WindowTopBar(props: WindowTopBarProps) {
  const containerClassNames = ["bg-[#d3d3d3]", "p-[3px]", "h-[30px]"];
  const textClassNames = ["select-none"];

  if (props.selected) {
    containerClassNames.push("bg-[#000ab2]");
    textClassNames.push("text-white");
  }

  return (
    <div className={containerClassNames.join(" ")}>
      {props.icon}
      <span className={textClassNames.join(" ")}>{props.name}</span>
    </div>
  );
}
