import WindowsBarStartButton from "@/app/components/atoms/WindowsBarStartButton";
import WindowsBarMenu from "@/app/components/organisms/WindowsBarMenu";
import Clock from "@/app/components/molecules/Clock";

type WindowsBarProps = {
  children?: React.ReactNode;
  isStartSelected: boolean;
  // eslint-disable-next-line no-unused-vars
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
        <Clock />
      </div>
    </div>
  );
}
