import { fetchTasks } from "../../utils/apis";
import {
  TASKS_DATA_LOADING,
  TASKS_DATA_SUCCESS,
  TASKS_DATA_FAILED,
  SELECT_SINGLE_TASK,
} from "../types";

export const getAllTasks = async (dispatch) => {
  dispatch({
    type: TASKS_DATA_LOADING,
    payload: { data: [] },
  });
  try {
    let { data } = await fetchTasks();
    console.log(data);

    dispatch({
      type: TASKS_DATA_SUCCESS,
      payload: { data: data.results },
    });
  } catch (e) {
    dispatch({
      type: TASKS_DATA_FAILED,
      payload: { data: [] },
    });
  }
};

export const selectSingleTask = (task) => (dispatch) => {
  dispatch({ type: SELECT_SINGLE_TASK, payload: task });
};
