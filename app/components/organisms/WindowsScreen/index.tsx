type WindowsScreenProps = {
  children?: React.ReactNode;
};

export default function WindowsScreen(props: WindowsScreenProps) {
  return (
    <div className="min-h-screen relative bg-[#008080]">{props.children}</div>
  );
}