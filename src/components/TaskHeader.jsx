import React from "react";

const TaskHeader = ({ setViews }) => {
  const showAddTaskHandler = () => {
    setViews("add");
  };
  return (
    <div>
      TaskHeader <span onClick={showAddTaskHandler}>Add</span>
    </div>
  );
};

export default TaskHeader;
