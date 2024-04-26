import WindowsBarButton from "@/app/components/molecules/WindowsBarButton";

type WindowsBarAppProps = {
  name: string;
  selected: boolean;
  handleOpenedAppClick: (e: React.MouseEvent) => void;
};

export default function WindowsBarApp(props: WindowsBarAppProps) {
  return (
    <WindowsBarButton
      width="180px"
      name={props.name}
      selected={props.selected}
      handleClick={(e: React.MouseEvent) => props.handleOpenedAppClick(e)}
    />
  );
}
