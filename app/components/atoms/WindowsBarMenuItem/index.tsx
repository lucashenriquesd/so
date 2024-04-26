import { useState } from "react";
import Menu from "@/app/components/organisms/Menu";

type WindowsBarMenuItemProps = {
  text: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

export default function WindowsBarMenuItem(props: WindowsBarMenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative whitespace-nowrap"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hover:bg-[#000ab2] hover:text-white">
        <button
          onClick={props.onClick}
          className="p-[2px] flex-1 text-start cursor-default"
        >
          {props.text}
        </button>
      </div>
      {isOpen && props.children && <Menu isSubMenuOpen>{props.children}</Menu>}
    </div>
  );
}
