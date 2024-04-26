type WindowsBarMenuProps = {
  children: React.ReactNode;
  isSubMenu?: boolean;
};

export default function Menu(props: WindowsBarMenuProps) {
  const containerClassNames = ["absolute", "z-10", "bg-[#c0c0c0]"];

  if (props.isSubMenu) {
    containerClassNames.push("left-full");
    containerClassNames.push("top-0");
  } else {
    containerClassNames.push("bottom-full");
  }

  return <div className={containerClassNames.join(" ")}>{props.children}</div>;
}
