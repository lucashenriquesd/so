type WindowsBarContentColumnProps = {
  children?: React.ReactNode;
};

export default function WindowsBarContentColumn(props: WindowsBarContentColumnProps) {
  return(
    <div className="flex flex-col flex-1">
      {props.children}
    </div>
  );
}