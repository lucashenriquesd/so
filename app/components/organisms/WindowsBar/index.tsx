import WindowsBarStartButton from "@/app/components/atoms/WindowsBarStartButton";
import WindowsBarMenu from "@/app/components/organisms/WindowsBarMenu";

type WindowsBarProps = {
  children?: React.ReactNode;
  isStartSelected: boolean;
  handleStartClick: () => void;
};

export default function WindowsBar(props: WindowsBarProps) {
  return (
    <div className="relative bottom-0 h-9 p-[2px] bg-[#c0c0c0] flex items-center">
      {props.isStartSelected && <WindowsBarMenu />}
      <WindowsBarStartButton
        isStartSelected={props.isStartSelected}
        handleStartClick={props.handleStartClick}
      />
      {props.children}
    </div>
  );
}
