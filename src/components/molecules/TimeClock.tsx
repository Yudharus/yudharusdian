import React, { useState, useEffect } from 'react';

export const TimeClock: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      // Jakarta / Western Indonesia Time (GMT+7)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat('en-GB', options).format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`flex items-center gap-2 text-xs font-mono text-zinc-400 tracking-wider ${className}`}>
      <span className="text-zinc-500 font-semibold">JKT</span>
      <span className="text-zinc-200">{time || '00:00:00'}</span>
      <span className="text-[10px] text-zinc-500">(GMT+7)</span>
    </div>
  );
};
