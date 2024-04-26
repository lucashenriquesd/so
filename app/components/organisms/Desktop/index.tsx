type DesktopProps = {
  children?: React.ReactNode;
  handleDesktopClick?: () => void;
};

export default function Desktop(props: DesktopProps) {
  return (
    <div className="flex-1 grid grid-cols-12 grid-rows-6 grid-flow-col gap-4 p-4" onClick={props.handleDesktopClick}>{props.children}</div>
  );
}