type WindowContentProps = {
  children: React.ReactNode;
};

export default function WindowContent(props: WindowContentProps) {
  return <div>{props.children}</div>;
}
