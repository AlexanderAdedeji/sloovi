import React from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeContext } from "../hooks/HomeContext";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { BsBellFill } from "react-icons/bs";

import { selectSingleTask } from "../redux/actions/TaskActions";

const Task = ({ singleTask }) => {
  const { setViews } = useContext(HomeContext);
  const dispatch = useDispatch();
  const selectTask = () => {
    dispatch(selectSingleTask(singleTask));
    setViews("edit");
  };
  const companyUsers = useSelector((state) => state.companyUsers.data);

  const assignedUser = companyUsers.filter(
    (user) => user.id === singleTask.assigned_user
  );
  return (
    <div id="task">
      <div id="left-aside">
        <img
          src={assignedUser[0]?.icon}
          alt="hskdhkas"
          className="task-img"
          width={50}
        />
        <div className="task-details">
          <p> {singleTask.task_msg}</p>
          <span>{singleTask.task_date}</span>
        </div>
      </div>

      <div id="right-aside">
        <span className="show-on-hover" onClick={selectTask}>
          <MdModeEditOutline />
        </span>
        <span className="">
          <BsBellFill />
        </span>
        <span className="">
          <AiOutlineCheck />
        </span>
      </div>
    </div>
  );
};

export default Task;
