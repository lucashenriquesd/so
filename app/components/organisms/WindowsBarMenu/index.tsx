import WindowsBarMenuItem from "@/app/components/atoms/WindowsBarMenuItem";
import WindowsBarHeaderColumn from "@/app/components/molecules/WindowsBarHeaderColumn";
import WindowsBarContentColumn from "@/app/components/molecules/WindowsBarContentColumn";
import Menu from "@/app/components/organisms/Menu";

export default function WindowsBarMenu() {
  return (
    <Menu>
      <div className="flex">
        <WindowsBarHeaderColumn />
        <WindowsBarContentColumn>
          <WindowsBarMenuItem
            text="Programs"
            onClick={() => console.log("Programs clicked")}
          >
            <WindowsBarMenuItem
              text="Acessories"
              onClick={() => console.log("Acessories clicked")}
            >
              <WindowsBarMenuItem
                text="System Tools"
                onClick={() => console.log("System Tools clicked")}
              />
              <WindowsBarMenuItem
                text="Internet Tools"
                onClick={() => console.log("Internet Tools clicked")}
              >
                <WindowsBarMenuItem
                  text="Internet Explorer"
                  onClick={() => console.log("Internet Explorer clicked")}
                />
              </WindowsBarMenuItem>
              <WindowsBarMenuItem
                text="Multimedia"
                onClick={() => console.log("Multimedia clicked")}
              />
            </WindowsBarMenuItem>
            <WindowsBarMenuItem
              text="StartUp"
              onClick={() => console.log("StartUp clicked")}
            />
          </WindowsBarMenuItem>
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
    </Menu>
  );
}
