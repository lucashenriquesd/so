type DesktopProps = {
  children?: React.ReactNode;
  onDesktopClick?: () => void;
};

export default function Desktop(props: DesktopProps) {
  function handleOnClick() {
    console.log('Desktop clicked');
    props.onDesktopClick && props.onDesktopClick();
  }

  return (
    <div className="flex-1" onClick={handleOnClick}>{props.children}</div>
  );
}