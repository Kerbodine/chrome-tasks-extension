import { useSettings } from "../contexts/SettingsContext";

export default function ThemePicker({ color }) {
  const { themeColor, changeThemeColor } = useSettings();

  return (
    <button
      onClick={() => changeThemeColor(color)}
      style={{
        backgroundColor: `hsl(${color.h}, ${color.s}%, ${color.l}%)`,
      }}
      className={`w-8 h-8 rounded-lg flex items-center justify-center focus:outline-none ${
        color.l > 90 && "border-2 border-black/25"
      }`}
    >
      {JSON.stringify(themeColor) === JSON.stringify(color) && (
        <div
          className={`w-3 h-3 rounded-full ${
            color.l > 90 ? "bg-black/25" : "bg-white/50"
          }`}
        ></div>
      )}
    </button>
  );
}
