import { fetchTasks } from "../../utils/apis";
import {
  TASKS_DATA_LOADING,
  TASKS_DATA_SUCCESS,
  TASKS_DATA_FAILED,
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
