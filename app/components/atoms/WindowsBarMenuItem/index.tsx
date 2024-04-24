type WindowsBarMenuItemProps = {
  text: string;
  onClick?: () => void;
};

export default function WindowsBarMenuItem(props: WindowsBarMenuItemProps) {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
}