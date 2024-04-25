type DesktopProps = {
  children?: React.ReactNode;
  handleDesktopClick?: () => void;
};

export default function Desktop(props: DesktopProps) {
  return (
    <div className="flex-1" onClick={props.handleDesktopClick}>{props.children}</div>
  );
}