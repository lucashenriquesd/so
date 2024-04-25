import WindowsBarButton from "@/app/components/molecules/WindowsBarButton";

type WindowsBarAppProps = {
  name: string;
  selected: boolean;
  setSelected: () => void;
};

export default function WindowsBarApp(props: WindowsBarAppProps) {
  function handleClick() {
    console.log(`${props.name} WindowsBarApp clicked`);
    props.setSelected();
  }

  return (
    <WindowsBarButton
      width="180px"
      name={props.name}
      selected={props.selected}
      setSelected={handleClick}
    />
  );
}
