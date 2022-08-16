import axios, { ApiNoAuth } from "./services/apiAdapter";

export const userLogin = (userData) =>
  ApiNoAuth.post("login", userData, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    userData,
  });

export const fetchUsers = async () => {
  return await axios.get(
    "team?product=outreach&company_id=company_413ef22b6237417fb1fba7917f0f69e7"
  );
};

export const addToTasks = async (taskData) => {
  return await axios.post(
    "task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=company_413ef22b6237417fb1fba7917f0f69e7",
    taskData
  );
};

export const fetchTasks = async () => {
  return await axios.get(
    "task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=company_413ef22b6237417fb1fba7917f0f69e7"
  );
};

export const updateTask = async (taskData, id) => {
  return await axios.put(
    `task/lead_465c14d0e99e4972b6b21ffecf3dd691/${id}?company_id=company_413ef22b6237417fb1fba7917f0f69e7`,
    taskData
  );
};

export const deleteTask = async (id) => {
  return await axios.delete(
    `task/lead_465c14d0e99e4972b6b21ffecf3dd691/${id}?company_id=company_413ef22b6237417fb1fba7917f0f69e7`
  );
};
