import { nanoid } from "nanoid";

export const defaultSettings = {
  twelveHourClock: true,
  showDate: true,
  showSeconds: false,
  darkMode: false,
};

export const defaultTasks = [
  {
    id: nanoid(),
    title: "Welcome to your task list!",
    completed: false,
  },
  {
    id: nanoid(),
    title: "Click the + button to add a task new task",
    completed: false,
  },
  {
    id: nanoid(),
    title: "Hover over a task to edit or delete it",
    completed: false,
  },
];
