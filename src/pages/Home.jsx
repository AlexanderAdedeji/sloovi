import React from "react";
import { useEffect } from "react";
import AddTask from "../components/AddTask";
import EditTask from "../components/EditTask";
import TaskHeader from "../components/TaskHeader";
import { useDispatch } from "react-redux";
import Tasks from "../components/TasksList";
import { getCompanyUsers } from "../redux/actions/userActions";
import { getAllTasks } from "../redux/actions/TaskActions";
import { useContext } from "react";
import { HomeContext } from "../hooks/HomeContext";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

const Home = () => {
  const { views } = useContext(HomeContext);
  const dispatch = useDispatch();
  useEffect(() => {
    getCompanyUsers(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (views === "list") {
      getAllTasks(dispatch);
    }
  }, [views, dispatch]);
  return (
    <div id="home">
      <SideBar />
      <div className="main-screen">
        <Navbar />
        <div className="body">
          <div className="task-box">
          <TaskHeader />
          <div className="views">
            {views === "list" && <Tasks />}
            {views === "add" && <AddTask />}
            {views === "edit" && <EditTask />}
          </div>
          </div>

        </div>
      </div>
    
    </div>
  );
};

export default Home;
