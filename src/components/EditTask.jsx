import React, { useState, useCallback } from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { HomeContext } from "../hooks/HomeContext";
import { deleteTask, updateTask } from "../utils/apis";
import { RiDeleteBin5Line } from "react-icons/ri";

const EditTask = () => {
  const task = useSelector((state) => state.task.data);
  const companyUsers = useSelector((state) => state.companyUsers.data);

  const { setViews } = useContext(HomeContext);
  const [editTaskForm, setEditTaskForm] = useState({
    task: task.task_msg,
    date: task.task_date,
    time: task.task_time,
    assignedUser: companyUsers?.filter(
      (user) => user.id === task.assigned_user
    ),
    assignedUser_id: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setEditTaskForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const setViewsHandler = useCallback(() => {
    setViews("list");
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const dataToSend = {
      assigned_user: editTaskForm.assignedUser_id,
      task_date: editTaskForm.date,
      task_time: 5400,
      is_completed: 0,
      time_zone: 19800,
      task_msg: editTaskForm.task,
    };

    try {
      const { data } = await updateTask(dataToSend, task.id);
      console.log(data);
      setViews("list");
    } catch (errors) {
      console.log(errors);
    }
  };

  const deleteSingleTask = async () => {
    console.log(task);
    try {
      const { data } = await deleteTask(task.id);
      toast.success("Task deleted successfully");
    } catch (error) {
      console.log(error);
    }
    setViewsHandler();
  };
  console.log(editTaskForm);
  return (
    <div id="form-body">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Task Description
          </label>
          <input
            type="text"
            value={editTaskForm.task}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => onChangeHandler(e)}
          />
        </div>

        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Date
              </label>
              <input
                type="date"
                value={editTaskForm.date}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Time
              </label>
              <input
                type="time"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Assign User
            </label>
            <select
              className="form-control"
              name="assignedUser_id"
              onChange={(e) => {
                onChangeHandler(e);
              }}
            >
              <option value={editTaskForm.assignedUser[0].id}>
                {editTaskForm.assignedUser[0].name}
              </option>
              {companyUsers.map((user) => (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="btn-container">
          <div className="mx-2">
            <span className="delete-icon">
            <RiDeleteBin5Line onClick={deleteSingleTask} />

            </span>
          </div>
          <div className="right-aside">
            <span className="cancel-btn mx-3" type="button" onClick={setViewsHandler}>
              Cancel
            </span>
            <button className="btn btn-success px-4" type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
