import WindowsBarButton from "@/app/components/molecules/WindowsBarButton";

type WindowsBarAppProps = {
  name: string;
  selected: boolean;
  handleAppClick: () => void;
};

export default function WindowsBarApp(props: WindowsBarAppProps) {
  return (
    <WindowsBarButton
      width="180px"
      name={props.name}
      selected={props.selected}
      handleStartClick={props.handleAppClick}
    />
  );
}
