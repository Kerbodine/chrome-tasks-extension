import { useSettings } from "../contexts/SettingsContext";

export default function ThemePicker({ color, system }) {
  const { themeColor, changeThemeColor } = useSettings();

  console.log(themeColor);
  console.log(color);

  if (color === "system") {
    return (
      <button
        onClick={() => changeThemeColor(color)}
        className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden"
      >
        <div className="w-1/2 bg-black"></div>
        {themeColor === color && (
          <div className="w-3 h-3 rounded-full bg-white/50"></div>
        )}
      </button>
    );
  } else {
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
        {themeColor === color && (
          <div className="w-3 h-3 rounded-full bg-white/50"></div>
        )}
      </button>
    );
  }
}
