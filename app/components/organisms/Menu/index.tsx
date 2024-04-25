type WindowsBarMenuItemProps = {
  children?: React.ReactNode;
};

export default function Menu(props: WindowsBarMenuItemProps) {
  const containerClassNames = [
    "absolute",
    "bottom-full",
    "z-10",
    "bg-[#c0c0c0]",
    "w-52",
    "min-w-[180px]",
    "border-t",
    "border-l",
    "border-gray-200",
  ];
  const pseudoClassNames = [
    "flex",
    "justify-start",
    "border-b",
    "border-r",
    "border-gray-500",
  ];

  return (
    <div className={containerClassNames.join(" ")}>
      <div className={pseudoClassNames.join(" ")}>
        {props.children}
      </div>
    </div>
  );
}
