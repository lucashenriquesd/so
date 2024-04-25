import WindowsBarButton from "@/app/components/molecules/WindowsBarButton";
import StartIconSvg from "./StartIconSvg";

type WindowsBarStartButtonProps = {
  isStartSelected: boolean;
  onClickStart: () => void;
};

export default function WindowsBarStartButton(
  props: WindowsBarStartButtonProps
) {
  return (
    <WindowsBarButton
      icon={<StartIconSvg style={{ width: 25, height: 25 }} />}
      name="Start"
      selected={props.isStartSelected}
      setSelected={props.onClickStart}
    />
  );
}
