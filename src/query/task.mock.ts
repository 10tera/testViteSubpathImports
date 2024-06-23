import { TaskList } from "../types";

export const useTaskList = (): TaskList => {
  return [
    {
      id: 1,
      title: "Task 1(mock)",
      description: "description 1",
    },
    {
      id: 2,
      title: "Task 2(mock)",
      description: "description 2",
    },
    {
      id: 3,
      title: "Task 3(mock)",
      description: "description 3",
    },
  ];
};
