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
      <div className="title">
      Tasks  <span>{tasks.length? tasks.length : "0"}</span>
      </div>
    <div className="add-icon" onClick={showAddTaskHandler}><AiOutlinePlus/></div>
    </div>
  );
};

export default TaskHeader;
