import StartIconSvg from "./StartIconSvg";

type WindowsBarStartButtonProps = {
  onClickStart: () => void;
};

export default function WindowsBarStartButton(props: WindowsBarStartButtonProps) {
  return (
    <button
      onClick={props.onClickStart}
      className="flex items-center border border-gray-800"
    >
      <StartIconSvg style={{ width: 25, height: 25}} />
      Start
    </button>
  );
}
