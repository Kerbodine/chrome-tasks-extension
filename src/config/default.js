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
    text: "hsl(0, 0%, 0%)",
    default: true,
  }, // light mode
  {
    h: 330,
    s: 13,
    l: 75,
    default: true,
  },
  {
    h: 213,
    s: 56,
    l: 81,
    default: true,
  },
  {
    h: 172,
    s: 47,
    l: 79,
    default: true,
  },
  {
    h: 139,
    s: 35,
    l: 84,
    default: true,
  },
  {
    h: 56,
    s: 29,
    l: 80,
    default: true,
  },
  {
    h: 11,
    s: 47,
    l: 88,
    default: true,
  },
  {
    h: 240,
    s: 6,
    l: 10,
    text: "hsl(0, 0%, 100%)",
    default: true,
  }, // dark mode
  {
    h: 261,
    s: 26,
    l: 29,
    default: true,
  },
  {
    h: 200,
    s: 61,
    l: 23,
    default: true,
  },
  {
    h: 178,
    s: 53,
    l: 17,
    default: true,
  },
  {
    h: 157,
    s: 22,
    l: 25,
    default: true,
  },
  {
    h: 56,
    s: 9,
    l: 22,
    default: true,
  },
  {
    h: 345,
    s: 67,
    l: 25,
    default: true,
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
