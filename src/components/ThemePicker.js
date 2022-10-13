import { HiXCircle } from "react-icons/hi";
import { useSettings } from "../contexts/SettingsContext";

export default function ThemePicker({ color }) {
  const { themeColor, changeThemeColor, deleteColor } = useSettings();

  return (
    <button
      onClick={() => changeThemeColor(color)}
      style={{
        backgroundColor: `hsl(${color.h}, ${color.s}%, ${color.l}%)`,
      }}
      className={`w-8 h-8 relative rounded-lg flex items-center justify-center focus:outline-none group ${
        color.l > 90 && "border-2 border-black/25"
      }`}
    >
      {JSON.stringify(themeColor) === JSON.stringify(color) && (
        <div
          className={`w-2.5 h-2.5 rounded-full ${
            color.l > 90 ? "bg-black/25" : "bg-white/50"
          }`}
        ></div>
      )}
      {!color.default && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteColor(color);
          }}
          className="hidden group-hover:block text-xl -top-2 -right-2 rounded-full absolute border-white bg-white"
        >
          <HiXCircle />
        </button>
      )}
    </button>
  );
}
