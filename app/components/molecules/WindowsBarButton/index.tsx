type WindowsBarButtonProps = {
  icon?: React.ReactNode;
  name: string;
  selected: boolean;
  setSelected: () => void;
};

export default function WindowsBarButton(props: WindowsBarButtonProps) {
  function handleClick() {
    console.log(`${props.name} WindowsBarButton clicked`);
    props.setSelected();
  }

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
          className="flex items-center p-[2px] flex-1 text-start cursor-default"
          onClick={handleClick}
        >
          {props.icon}
          <span>{props.name}</span>
        </button>
      </div>
    </div>
  );
}
