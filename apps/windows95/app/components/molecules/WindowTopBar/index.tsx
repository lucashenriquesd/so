type WindowTopBarProps = {
  icon?: React.ReactNode;
  name: string;
};

export default function WindowTopBar(props: WindowTopBarProps) {
  return (
    <div className="bg-[#d3d3d3] p-[3px] h-[30px]">
      {props.icon}
      <span>{props.name}</span>
    </div>
  );
}
