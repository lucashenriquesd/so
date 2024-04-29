import WindowTopBar from "@/app/components/molecules/WindowTopBar";
import WindowContent from "@/app/components/organisms/WindowContent";

type WindowProps = {
  id: number;
  name: string;
  children?: React.ReactNode;
  xAxis: number;
  yAxis: number;
  zIndex: number;
  // eslint-disable-next-line no-unused-vars
  onClick: (e: React.MouseEvent) => void;
};

export default function Window(props: WindowProps) {
  const containerClassNames = [
    "absolute",
    "w-[200px]",
    "h-[200px]",
    "bg-white",
    "border-1",
    "border-black",
  ];

  return (
    <div
      className={containerClassNames.join(" ")}
      style={{
        top: `${props.yAxis}px`,
        left: `${props.xAxis}px`,
        zIndex: props.zIndex,
      }}
      onClick={props.onClick}
    >
      <WindowTopBar name={props.name} />
      <WindowContent>{props.children}</WindowContent>
    </div>
  );
}
