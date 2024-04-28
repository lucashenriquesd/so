import WindowsBarStartButton from "@/app/components/atoms/WindowsBarStartButton";
import WindowsBarMenu from "@/app/components/organisms/WindowsBarMenu";

type WindowsBarProps = {
  children?: React.ReactNode;
  isStartSelected: boolean;
  handleStartClick: (e: React.MouseEvent) => void;
  handleWindowsBarClick: () => void;
};

export default function WindowsBar(props: WindowsBarProps) {
  return (
    <div className="relative">
      {props.isStartSelected && <WindowsBarMenu />}
      <div
        onClick={props.handleWindowsBarClick}
        className="h-9 p-[2px] bg-[#c0c0c0] flex items-center"
      >
        <WindowsBarStartButton
          isStartSelected={props.isStartSelected}
          handleStartClick={(e: React.MouseEvent) => props.handleStartClick(e)}
        />
        {props.children}
      </div>
    </div>
  );
}
