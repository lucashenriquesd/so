type WindowsBarButtonProps = {
  width?: string;
  icon?: React.ReactNode;
  name: string;
  selected: boolean;
  // eslint-disable-next-line no-unused-vars
  handleClick: (e: React.MouseEvent) => void;
};

export default function WindowsBarButton(props: WindowsBarButtonProps) {
  const containerClassNames = ["m-2", "border-t", "border-l"];
  const pseudoClassNames = ["flex", "justify-start", "border-b", "border-r"];
  const textClassNames = ["select-none"];

  if (props.width) {
    containerClassNames.push(`w-[${props.width}]`);
  }

  if (props.selected) {
    containerClassNames.push("border-gray-500");
    pseudoClassNames.push("border-gray-200");
    textClassNames.push("font-semibold");
  } else {
    containerClassNames.push("border-gray-200");
    pseudoClassNames.push("border-gray-500");
    textClassNames.push("font-normal");
  }

  return (
    <div className={containerClassNames.join(" ")}>
      <div className={pseudoClassNames.join(" ")}>
        <button
          className="flex items-center p-[2px] flex-1 text-start cursor-default"
          onClick={(e: React.MouseEvent) => props.handleClick(e)}
        >
          {props.icon}
          <span className={textClassNames.join(" ")}>
            {props.name}
          </span>
        </button>
      </div>
    </div>
  );
}
