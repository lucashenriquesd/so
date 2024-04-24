import WindowsBarMenuItem from "@/app/components/atoms/WindowsBarMenuItem";
import WindowsBarHeaderColumn from "../../molecules/WindowsBarHeaderColumn";
import WindowsBarContentColumn from "../../molecules/WindowsBarContentColumn";

export default function WindowsBarMenu() {
  const containerClassNames = [
    "absolute",
    "bottom-full",
    "z-10",
    "bg-[#c0c0c0]",
    "w-52",
    "min-w-[180px]",
    "border-t",
    "border-l",
    "border-gray-200",
  ];
  const pseudoClassNames = [
    "flex",
    "justify-start",
    "border-b",
    "border-r",
    "border-gray-500",
  ];

  return (
    <div className={containerClassNames.join(" ")}>
      <div className={pseudoClassNames.join(" ")}>
        <WindowsBarHeaderColumn />
        <WindowsBarContentColumn>
          <WindowsBarMenuItem
            text="Programs"
            onClick={() => console.log("Programs clicked")}
          />
          <WindowsBarMenuItem
            text="Documents"
            onClick={() => console.log("Documents clicked")}
          />
          <WindowsBarMenuItem
            text="Settings"
            onClick={() => console.log("Settings clicked")}
          />
          <WindowsBarMenuItem
            text="Find"
            onClick={() => console.log("Find clicked")}
          />
          <WindowsBarMenuItem
            text="Help"
            onClick={() => console.log("Help clicked")}
          />
          <WindowsBarMenuItem
            text="Run"
            onClick={() => console.log("Run clicked")}
          />
          <WindowsBarMenuItem
            text="Suspend"
            onClick={() => console.log("Suspend clicked")}
          />
          <WindowsBarMenuItem
            text="Shutdown"
            onClick={() => console.log("Shutdown clicked")}
          />
        </WindowsBarContentColumn>
      </div>
    </div>
  );
}
