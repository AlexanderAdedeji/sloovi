import React from "react";
import { useDispatch } from "react-redux";
import { selectSingleTask } from "../redux/actions/TaskActions";

const Task = ({ singleTask }) => {
  const dispatch = useDispatch();

  const selectTask = () => {
    dispatch(selectSingleTask(singleTask));
  };
  return (
    <div>
      <h3>
        Hello world <span onClick={selectTask}>edit</span>
      </h3>
    </div>
  );
};

export default Task;
