import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { toast } from "react-toastify";
import { fetchUsers, addToTasks } from "../utils/apis";

const AddTask = () => {
  const tasks = useSelector((state) => state);

  const companyUsers = useSelector((state) => state.companyUsers.data);
  console.log(companyUsers);
  const [users, setUsers] = useState([]);
  const [addForm, setAddForm] = useState({
    task: "",
    date: "",
    time: "",
    assignedUser: 0,
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getUsers = async () => {
    try {
      const { data } = await fetchUsers();
      console.log(data);
      setUsers(data.results.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
    return () => {};
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    // if (!addForm.task || addForm.date || addForm.time || addForm.assignedUser) {
    //   toast.error("Fields are all requeired");
    //   return;
    // }
    const dataToSend = {
      assigned_user: addForm.assignedUser,
      task_date: addForm.date,
      task_time: 5400,
      is_completed: 0,
      time_zone: 19800,
      task_msg: addForm.task,
    };

    try {
      const { data } = await addToTasks(dataToSend);
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
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
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label for="date" className="form-label">
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
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label for="time" className="form-label">
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
            <label for="exampleInputEmail1" className="form-label">
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
              {users.map((user) => (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <button className="btn" type="button">
            Cancel
          </button>
          <button className="btn btn-success" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
