import WindowsBarStartButton from "@/app/components/atoms/WindowsBarStartButton";
import WindowsBarMenu from "@/app/components/organisms/WindowsBarMenu";

type WindowsBarProps = {
  children?: React.ReactNode;
  isStartSelected: boolean;
  setIsStartSelected: (value: boolean) => void;
};

export default function WindowsBar(props: WindowsBarProps) {
  function handleClickStart() {
    console.log("Start button clicked");
    props.setIsStartSelected(!props.isStartSelected);
  }

  return (
    <div className="relative bottom-0 h-9 p-[2px] bg-[#c0c0c0] flex items-center">
      {props.isStartSelected && <WindowsBarMenu />}
      <WindowsBarStartButton
        isStartSelected={props.isStartSelected}
        onClickStart={handleClickStart}
      />
      {props.children}
    </div>
  );
}
