import { TaskList } from "../types";

export const useTaskList = (): TaskList => {
  return [
    {
      id: 0,
      title: "Task 1",
      description: "description 1",
    },
    {
      id: 1,
      title: "Task 2",
      description: "description 2",
    },
  ];
};
