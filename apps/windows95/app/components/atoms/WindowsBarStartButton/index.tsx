import WindowsBarButton from "@/app/components/molecules/WindowsBarButton";
import StartIconSvg from "./StartIconSvg";

type WindowsBarStartButtonProps = {
  isStartSelected: boolean;
  // eslint-disable-next-line no-unused-vars
  handleStartClick: (e: React.MouseEvent) => void;
};

export default function WindowsBarStartButton(
  props: WindowsBarStartButtonProps
) {
  return (
    <WindowsBarButton
      icon={<StartIconSvg style={{ width: 25, height: 25 }} />}
      name="Start"
      selected={props.isStartSelected}
      handleClick={(e: React.MouseEvent) => props.handleStartClick(e)}
    />
  );
}
