import React from "react";
import { useSelector } from "react-redux";
import  {AiOutlinePlus}  from 'react-icons/ai';
import { useContext } from "react";
import { HomeContext } from "../hooks/HomeContext";


const TaskHeader = () => {
  const tasks = useSelector((state)=>state.tasks.data)
  const {setViews} = useContext(HomeContext)
  const showAddTaskHandler = () => {
    setViews("add");
  };
  return (
    <div id="task-header">
      <p className="title">
      Tasks  <span>{tasks.length? tasks.length : "0"}</span>
      </p>
    <span className="add-icon" onClick={showAddTaskHandler}><AiOutlinePlus/></span>
    </div>
  );
};

export default TaskHeader;
