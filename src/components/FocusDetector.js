import React, { useEffect } from "react";
import { useSettings } from "../contexts/SettingsContext";

const FocusDetector = () => {
  const { setTasks } = useSettings();

  const onFocus = () => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  };

  useEffect(() => {
    window.addEventListener("focus", onFocus);
    // Calls onFocus when the window first loads
    onFocus();
    // Specify how to clean up after this effect:
    return () => {
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  return <></>;
};

export default FocusDetector;
