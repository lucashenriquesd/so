import { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const containerClassNames = ["ml-auto", "m-2", "border-t", "border-l", "border-gray-500"];
  const pseudoClassNames = ["flex", "justify-start", "border-b", "border-r", "border-gray-200"];

  return (
    <div className={containerClassNames.join(" ")}>
      <div className={pseudoClassNames.join(" ")}>
        <button className="flex items-center p-[2px] flex-1 text-start cursor-default">
          <span className="select-none">{time.getHours().toString().padStart(2, '0')}:{time.getMinutes().toString().padStart(2, '0')}</span>
        </button>
      </div>
    </div>
  );
}
