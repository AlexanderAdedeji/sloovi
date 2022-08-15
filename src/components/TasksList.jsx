import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks.data);
  return (
    <div>
      {tasks.map(() => (
        <Task />
      ))}
    </div>
  );
};

export default Tasks;
