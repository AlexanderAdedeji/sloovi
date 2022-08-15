import * as types from "../types";

const initialState = {
  data: [],
};

const fetchTaskReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.TASKS_DATA_LOADING:
      return {
        ...state,
      };
    case types.TASKS_DATA_SUCCESS:
      return {
        ...state,
        data: [...payload.data],
      };
    case types.TASKS_DATA_FAILED:
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};

export default fetchTaskReducer;
