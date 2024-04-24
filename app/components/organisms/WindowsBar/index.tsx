import { useState } from 'react';
import WindowsBarApp from "../../atoms/WindowsBarApp";
import WindowsBarStartButton from "../../atoms/WindowsBarStartButton";
import WindowsBarMenu from '../WindowsBarMenu';

type WindowsBarProps = {
  children?: React.ReactNode;
};

export default function WindowsBar(props: WindowsBarProps) {

  function handleClickStart() {
    console.log('Start button clicked');
    setShowWindowsBarMenu(!showWindowsBarMenu);
  }

  const [showWindowsBarMenu, setShowWindowsBarMenu] = useState(false);
  return(
    <div className="fixed inset-x-0 bottom-0 h-9 p-[2px] bg-[#c0c0c0] flex items-center">
      {showWindowsBarMenu && <WindowsBarMenu />}
      <WindowsBarStartButton onClickStart={handleClickStart} />
      {props.children}
    </div>
  );
}