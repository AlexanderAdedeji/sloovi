import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AddTask from "../components/AddTask";
import EditTask from "../components/EditTask";
import TaskHeader from "../components/TaskHeader";
import { useDispatch } from "react-redux";
import Tasks from "../components/TasksList";
import { getCompanyUsers } from "../redux/actions/userActions";
import { getAllTasks } from "../redux/actions/getTaskActions";

const Home = () => {
  const [views, setViews] = useState("list");
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
    <div>
      <TaskHeader setViews={setViews} />
      {views === "list" && <Tasks setViews={setViews} />}
      {views === "add" && <AddTask />}
      {views === "edit" && <EditTask />}
    </div>
  );
};

export default Home;
