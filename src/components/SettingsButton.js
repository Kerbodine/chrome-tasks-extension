import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BiCog, BiX } from "react-icons/bi";
import { useSettings } from "../contexts/SettingsContext";
import SwitchItem from "./SwitchItem";
import FontCard from "./FontCard";
import ThemePicker from "./ThemePicker";

const fontOptions = [
  {
    label: "sans",
    text: "12",
  },
  {
    label: "mono",
    text: "12",
  },
  {
    label: "serif",
    text: "12",
  },
  {
    label: "display",
    text: "12",
  },
];

const themeOptions = [
  {
    h: 0,
    s: 0,
    l: 100,
    primary: "hsl(0, 0%, 96%)",
  }, // light mode
  {
    h: 240,
    s: 6,
    l: 10,
  }, // dark mode
  {
    h: 230,
    s: 26,
    l: 34,
  },
  {
    h: 254,
    s: 25,
    l: 27,
  },
  {
    h: 200.95,
    s: 90,
    l: 27,
  },
  {
    h: 203,
    s: 30,
    l: 26,
  },
];

const SettingsButton = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { settings, setSettings, font, changeFont } = useSettings();

  const openSettings = () => {
    setSettingsOpen(true);
  };

  const closeSettings = () => {
    setSettingsOpen(false);
  };

  const toggleShowDate = () => {
    setSettings({ ...settings, showDate: !settings.showDate });
  };

  const toggleTimeFormat = () => {
    setSettings({
      ...settings,
      twelveHourClock: !settings.twelveHourClock,
    });
  };

  const toggleSeconds = () => {
    setSettings({
      ...settings,
      showSeconds: !settings.showSeconds,
    });
  };

  const switchFont = (font) => {
    changeFont(font);
  };

  return (
    <>
      <button onClick={openSettings} className="settings-button">
        <BiCog />
      </button>
      <Transition appear show={settingsOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeSettings}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            </Transition.Child>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative inline-block w-full max-w-xs p-6 text-left align-middle transform bg-white shadow-lg rounded-2xl">
                <Dialog.Title as="h3" className="text-xl font-medium leading-6">
                  Settings
                </Dialog.Title>
                <div className="mt-4 space-y-1">
                  <SwitchItem
                    label="Show date & weekday"
                    condition={settings.showDate}
                    toggleCondition={toggleShowDate}
                  />
                  <SwitchItem
                    label="24-hour clock"
                    condition={!settings.twelveHourClock}
                    toggleCondition={toggleTimeFormat}
                  />
                  <SwitchItem
                    label="Show seconds"
                    condition={settings.showSeconds}
                    toggleCondition={toggleSeconds}
                  />
                </div>
                <div className="grid grid-cols-4 gap-2 mt-4">
                  {fontOptions.map((option) => (
                    <FontCard
                      key={option.label}
                      label={option.label}
                      text={option.text}
                      active={font === option.label}
                      switchFont={switchFont}
                    />
                  ))}
                </div>
                <div className="flex gap-2 mt-4">
                  {themeOptions.map((option) => (
                    <ThemePicker key={option.h} color={option} />
                  ))}
                </div>
                <button
                  className="absolute right-6 top-6 bg-gray-100 hover:bg-bg hover:text-white rounded-full text-2xl text p-0.5 transition-c"
                  onClick={closeSettings}
                >
                  <BiX />
                </button>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SettingsButton;
