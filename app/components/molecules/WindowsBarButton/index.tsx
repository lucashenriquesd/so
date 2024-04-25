type WindowsBarButtonProps = {
  width?: string;
  icon?: React.ReactNode;
  name: string;
  selected: boolean;
  handleStartClick: () => void;
};

export default function WindowsBarButton(props: WindowsBarButtonProps) {
  const containerClassNames = ["m-2", "border-t", "border-l"];
  const pseudoClassNames = ["flex", "justify-start", "border-b", "border-r"];

  if (props.width) {
    containerClassNames.push(`w-[${props.width}]`);
  }

  if (props.selected) {
    containerClassNames.push("border-gray-500");
    pseudoClassNames.push("border-gray-200");
  } else {
    containerClassNames.push("border-gray-200");
    pseudoClassNames.push("border-gray-500");
  }

  return (
    <div className={containerClassNames.join(" ")}>
      <div className={pseudoClassNames.join(" ")}>
        <button
          className="flex items-center p-[2px] flex-1 text-start cursor-default"
          onClick={props.handleStartClick}
        >
          {props.icon}
          <span className={props.selected ? "font-semibold" : "font-normal"}>
            {props.name}
          </span>
        </button>
      </div>
    </div>
  );
}
