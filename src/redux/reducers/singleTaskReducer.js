import * as types from "../types";

const initialState = {
  data: {},
};

const selectSingleTaskReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SELECT_SINGLE_TASK:
      return {
        ...state,
        data:payload
      };
    default:
      return state;
  }
};

export default selectSingleTaskReducer;
