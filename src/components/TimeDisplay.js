import { useEffect, useState, useRef } from "react";
import { useSettings } from "../contexts/SettingsContext";

const TimeDisplay = () => {
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  const { settings } = useSettings();
  const interval = useRef(null);

  const updateTime = () => {
    const currentTime = new Date();
    setTime(
      currentTime.toLocaleTimeString("en-US", {
        hour12: settings.twelveHourClock,
        hour: "numeric",
        minute: "numeric",
        ...(settings.showSeconds && { second: "numeric" }),
      })
    );
    setDate(
      currentTime.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
    );
  };

  useEffect(() => {
    updateTime();
    interval.current = setInterval(updateTime, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, [settings]);

  return (
    <div>
      <h1 className="font-medium text-6xl dark:text-white transition-colors text-center">
        {time}
      </h1>
      {settings.showDate && (
        <h2 className="text-2xl text-center dark:text-white transition-colors">
          {date}
        </h2>
      )}
    </div>
  );
};

export default TimeDisplay;
