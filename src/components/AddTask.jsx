import React, { useState, useEffect,useCallback } from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";

import { toast } from "react-toastify";
import { HomeContext } from "../hooks/HomeContext";
import {  addToTasks } from "../utils/apis";

const AddTask = () => {
  const {setViews} = useContext(HomeContext)
  const companyUsers = useSelector((state) => state.companyUsers.data);
  const [addForm, setAddForm] = useState({
    task: "",
    date: "",
    time: "",
    assignedUser: 0,
  });
  const[btnLoader, setBtnLoader] = useState(false)

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  const setViewsHandler = useCallback(() => {
    setViews("list");
  }, [setViews]);



  const submitHandler = async (e) => {
    e.preventDefault();
    setBtnLoader(true)
    const date = new Date();
    if(addForm.date==="" || !addForm.time ==="" || !addForm.assignedUser===0 || !addForm.task===""){
      toast.error("All fields are required")
      setBtnLoader(false)
      return
    }
    let seconds = Math.floor(date.getTime(addForm.time) / 1000); 
    let timeZone= Math.floor(date.getTimezoneOffset() * 1000)
    console.log({seconds,timeZone})
    const dataToSend = {
      assigned_user: addForm.assignedUser,
      task_date: addForm.date,
      task_time: seconds,
      is_completed: 0,
      time_zone: timeZone,
      task_msg: addForm.task,
    };
    console.log(dataToSend)

    try {
      const { data } = await addToTasks(dataToSend);
      
      toast.success("Task added successfully")
      setViewsHandler();
    } catch (errors) {
     
    }
    setBtnLoader(false)
  };

  return (
    <div id="form-body">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="label">
            Task Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={addForm.task}
            name="task"
            onChange={(e) => onChangeHandler(e)}
          />
        </div>

        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label for="date" className="label">
                Date
              </label>
              <input
                name="date"
                type="date"
                className="form-control"
                id="date"
                aria-describedby="emailHelp"
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label for="time" className="label">
                Time
              </label>
              <input
                name="time"
                type="time"
                className="form-control"
                id="time"
                aria-describedby="emailHelp"
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="label">
              Assign User
            </label>
            <select
              className="form-control"
              name="assignedUser"
              onChange={(e) => {
                onChangeHandler(e);
              }}
            >
              <option>Select a user</option>
              {companyUsers?.map((user) => (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="btn-container">
          <div></div>
          <div className="right-aside">
          <span className="cancel-btn mx-4" type="button">
            Cancel
          </span>
          <button className="btn btn-success px-4" disabled={btnLoader} type="submit">
            Save
          </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default AddTask;
