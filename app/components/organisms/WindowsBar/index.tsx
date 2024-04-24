import WindowsBarStartButton from "@/app/components/atoms/WindowsBarStartButton";
import WindowsBarMenu from '@/app/components/organisms/WindowsBarMenu';

type WindowsBarProps = {
  children?: React.ReactNode;
  isActiveStartMenu: boolean;
  setIsActiveStartMenu: (value: boolean) => void;
};

export default function WindowsBar(props: WindowsBarProps) {

  function handleClickStart() {
    console.log('Start button clicked');
    props.setIsActiveStartMenu(!props.isActiveStartMenu);
  }

  return(
    <div className="fixed inset-x-0 bottom-0 h-9 p-[2px] bg-[#c0c0c0] flex items-center">
      {props.isActiveStartMenu && <WindowsBarMenu />}
      <WindowsBarStartButton onClickStart={handleClickStart} />
      {props.children}
    </div>
  );
}