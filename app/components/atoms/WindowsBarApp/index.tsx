import { useState } from "react";

export default function WindowsBarApp() {
  const [selected, setSelected] = useState(false);

  function handleclick() {
    console.log("My Computer clicked");
    setSelected(!selected);
  }

  const containerClassNames = [
    "m-2",
    "min-w-[180px]",
    "border-t",
    "border-l",
  ];

  const pseudoClassNames = [
    "flex",
    "justify-start",
    "border-b",
    "border-r",
  ];

  if (selected) {
    containerClassNames.push("border-gray-200");
    pseudoClassNames.push("border-gray-500");
  } else {
    containerClassNames.push("border-gray-500");
    pseudoClassNames.push("border-gray-200");
  }

  return (
    <div className={containerClassNames.join(" ")}>
      <div className={pseudoClassNames.join(" ")}>
        <button className="p-[2px] flex-1 text-start" onClick={handleclick}>
          My Computer
        </button>
      </div>
    </div>
  );
}
