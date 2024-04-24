type WindowsBarAppProps = {
  name: string;
  selected?: boolean;
  setSelected?: () => void;
};

export default function WindowsBarApp(props: WindowsBarAppProps) {
  const containerClassNames = ["m-2", "min-w-[180px]", "border-t", "border-l"];

  const pseudoClassNames = ["flex", "justify-start", "border-b", "border-r"];

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
          className="p-[2px] flex-1 text-start"
          onClick={props.setSelected}
        >
          {props.name}
        </button>
      </div>
    </div>
  );
}
