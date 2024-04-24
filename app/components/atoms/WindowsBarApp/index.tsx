export default function WindowsBarApp() {
  return (
    <div className="m-2 border-t border-l border-gray-200 min-w-[180px]">
      <div className="flex justify-start border-b border-r border-gray-500">
        <button className="p-[2px] flex-1 text-start" onClick={() => console.log('My Computer clicked')}>
          My Computer
        </button>
      </div>
    </div>
  );
}
