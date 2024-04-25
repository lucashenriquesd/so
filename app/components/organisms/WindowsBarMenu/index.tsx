import WindowsBarMenuItem from "@/app/components/atoms/WindowsBarMenuItem";
import WindowsBarHeaderColumn from "@/app/components/molecules/WindowsBarHeaderColumn";
import WindowsBarContentColumn from "@/app/components/molecules/WindowsBarContentColumn";
import Menu from "@/app/components/organisms/Menu";

export default function WindowsBarMenu() {
  return (
    <Menu>
      <WindowsBarHeaderColumn />
      <WindowsBarContentColumn>
        <WindowsBarMenuItem
          text="Programs"
          isCategory={true}
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
    </Menu>
  );
}
