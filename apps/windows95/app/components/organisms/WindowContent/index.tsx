type WindowContentProps = {
  children: React.ReactNode;
};

export default function WindowContent(props: WindowContentProps) {
  return <div className="select-none">{props.children}</div>;
}
