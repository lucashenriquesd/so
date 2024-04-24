type WindowsBarMenuItemProps = {
  text: string;
  onClick?: () => void;
};

export default function WindowsBarMenuItem(props: WindowsBarMenuItemProps) {
  return (
    <div className="flex hover:bg-[#000ab2] hover:text-white">
      <button onClick={props.onClick} className="p-[2px] flex-1 text-start">{props.text}</button>
    </div>
  );
}