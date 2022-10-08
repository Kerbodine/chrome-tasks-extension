import { nanoid } from "nanoid";

export const defaultSettings = {
  twelveHourClock: true,
  showDate: true,
  showSeconds: false,
};

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
