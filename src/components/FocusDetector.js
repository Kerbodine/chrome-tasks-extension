import React, { useEffect } from "react";
import { useSettings } from "../contexts/SettingsContext";

const FocusDetector = () => {
  const { setTasks } = useSettings();

  const onFocus = () => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  };

  useEffect(() => {
    window.addEventListener("focus", onFocus);
    onFocus();
    return () => {
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  return <></>;
};

export default FocusDetector;
