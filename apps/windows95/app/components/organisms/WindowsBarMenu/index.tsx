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
            onClick={() => console.log("Programs menu item clicked")}
          >
            <WindowsBarMenuItem
              text="Acessories"
              onClick={() => console.log("Acessories menu item clicked")}
            >
              <WindowsBarMenuItem
                text="System Tools"
                onClick={() => console.log("System Tools menu item clicked")}
              />
              <WindowsBarMenuItem
                text="Internet Tools"
                onClick={() => console.log("Internet Tools menu item clicked")}
              >
                <WindowsBarMenuItem
                  text="Internet Explorer"
                  onClick={() =>
                    console.log("Internet Explorer menu item clicked")
                  }
                />
              </WindowsBarMenuItem>
              <WindowsBarMenuItem
                text="Multimedia"
                onClick={() => console.log("Multimedia menu item clicked")}
              />
            </WindowsBarMenuItem>
            <WindowsBarMenuItem
              text="StartUp"
              onClick={() => console.log("StartUp menu item clicked")}
            />
          </WindowsBarMenuItem>
          <WindowsBarMenuItem
            text="Documents"
            onClick={() => console.log("Documents menu item clicked")}
          />
          <WindowsBarMenuItem
            text="Settings"
            onClick={() => console.log("Settings menu item clicked")}
          />
          <WindowsBarMenuItem
            text="Find"
            onClick={() => console.log("Find menu item clicked")}
          />
          <WindowsBarMenuItem
            text="Help"
            onClick={() => console.log("Help menu item clicked")}
          />
          <WindowsBarMenuItem
            text="Run"
            onClick={() => console.log("Run menu item clicked")}
          />
          <WindowsBarMenuItem
            text="Suspend"
            onClick={() => console.log("Suspend menu item clicked")}
          />
          <WindowsBarMenuItem
            text="Shutdown"
            onClick={() => console.log("Shutdown menu item clicked")}
          />
        </WindowsBarContentColumn>
      </div>
    </Menu>
  );
}
