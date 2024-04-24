type DesktopProps = {
  children?: React.ReactNode;
};

export default function Desktop(props: DesktopProps) {
  return (
    <div className="flex-1">{props.children}</div>
  );
}