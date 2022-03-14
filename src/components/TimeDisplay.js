import { useEffect, useState } from "react";
import { useSettings } from "../contexts/SettingsContext";

const TimeDisplay = () => {
  const [time, setTime] = useState();
  const {
    settings: { showSeconds },
  } = useSettings();

  const updateTime = () => {
    const currentTime = new Date();
    setTime(
      currentTime.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        ...(showSeconds && { second: "numeric" }),
      })
    );
  };

  useEffect(() => {
    updateTime();
    setInterval(updateTime, 1000);
  }, []);

  return (
    <div className="font-medium text-6xl dark:text-white transition-colors">
      {time}
    </div>
  );
};

export default TimeDisplay;
