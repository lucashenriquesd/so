import WindowsBarButton from "@/app/components/molecules/WindowsBarButton";

type WindowsBarAppProps = {
  name: string;
  selected: boolean;
  handleAppClick: (e: React.MouseEvent) => void;
};

export default function WindowsBarApp(props: WindowsBarAppProps) {
  return (
    <WindowsBarButton
      width="180px"
      name={props.name}
      selected={props.selected}
      handleStartClick={(e: React.MouseEvent) => props.handleAppClick(e)}
    />
  );
}
