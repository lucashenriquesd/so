import WindowsBarMenuItem from "../../atoms/WindowsBarMenuItem";

export default function WindowsBarMenu() {
  return (
    <div className="absolute bottom-full bg-[#c0c0c0] w-52">
      <WindowsBarMenuItem text="Programs" onClick={() => console.log("Programs clicked")} />
      <WindowsBarMenuItem text="Documents" onClick={() => console.log("Documents clicked")} />
      <WindowsBarMenuItem text="Settings" onClick={() => console.log("Settings clicked")} />
      <WindowsBarMenuItem text="Find" onClick={() => console.log("Find clicked")} />
      <WindowsBarMenuItem text="Help" onClick={() => console.log("Help clicked")} />
      <WindowsBarMenuItem text="Run" onClick={() => console.log("Run clicked")} />
      <WindowsBarMenuItem text="Suspend" onClick={() => console.log("Suspend clicked")} />
      <WindowsBarMenuItem text="Shutdown" onClick={() => console.log("Shutdown clicked")} />
    </div>
  );
}