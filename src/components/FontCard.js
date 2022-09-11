import React from "react";

export default function FontCard({ switchFont, active, text, label }) {
  return (
    <button
      onClick={() => switchFont(label)}
      className={`${
        active
          ? "bg-black text-white"
          : "bg-gray-100 hover:bg-gray-200 transition-colors"
      } h-14 rounded-lg flex flex-col items-center justify-center`}
    >
      <p className={`text-2xl font-card ${label}`}>{text}</p>
      <p
        className={`${
          active ? "text-gray-300" : "text-gray-600"
        } text-sm -mt-1 capitalize`}
      >
        {label}
      </p>
    </button>
  );
}
