import * as types from "../types";

const initialState = {
  data: [],
};

const companyUsersReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.COMPANY_USERS_DATA_LOADING:
      return {
        ...state,
      };
    case types.COMPANY_USERS_DATA_SUCCESS:
      return {
        ...state,

        data: [...payload.data],
      };
    case types.COMPANY_USERS_DATA_FAILED:
      return {
        ...state,

        data: [],
      };
    default:
      return state;
  }
};

export default companyUsersReducers;
