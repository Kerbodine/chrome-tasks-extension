import React from "react";
import { useSettings } from "../contexts/SettingsContext";

export default function ThemePicker({ color }) {
  const { changeThemeColor } = useSettings();

  return (
    <button
      onClick={() => changeThemeColor(color)}
      style={{
        backgroundColor: `hsl(${color.h}, ${color.s}%, ${color.l}%)`,
      }}
      className="w-8 h-8 rounded-lg hover:ring-2 ring-offset-2"
    ></button>
  );
}
