import React from "react";
import { useSelector } from "react-redux";

const EditTask = () => {

  // const task = useSelector((state)=>)
  return (
    <div>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Task Description
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
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
            <select className="form-control">
              <option></option>
            </select>
          </div>
        </div>
      </form>{" "}
      v
    </div>
  );
};

export default EditTask;
