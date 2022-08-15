import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AddTask from "../components/AddTask";
import EditTask from "../components/EditTask";
import TaskHeader from "../components/TaskHeader";
import { useDispatch } from "react-redux";
import Tasks from "../components/Tasks";
import { getCompanyUsers } from "../redux/actions/userActions";

const Home = () => {
  const [views, setViews] = useState("list");
  const dispatch = useDispatch();
  useEffect(() => {
    getCompanyUsers(dispatch);
  }, [dispatch]);

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
