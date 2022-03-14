import { nanoid } from "nanoid";

export const defaultSettings = {
  theme: "light",
  timeFormat: "12h",
  dateFormat: "MM/DD/YYYY",
  showSeconds: false,
};

export const defaultTasks = [
  {
    id: nanoid(),
    title: "Task 1",
    completed: false,
  },
];
