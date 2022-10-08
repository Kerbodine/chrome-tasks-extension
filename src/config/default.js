import { nanoid } from "nanoid";

export const defaultSettings = {
  twelveHourClock: true,
  showDate: true,
  showSeconds: false,
};

export const defaultThemes = [
  {
    h: 0,
    s: 0,
    l: 100,
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

export const defaultTasks = [
  {
    id: nanoid(),
    title: "Welcome to FocalTab!",
    completed: false,
  },
  {
    id: nanoid(),
    title: "Hover over a task to edit or delete",
    completed: false,
  },
  {
    id: nanoid(),
    title: "Click on the box to mark it as complete",
    completed: false,
  },
];
