import { fetchUsers } from "../../utils/apis";
import {
  COMPANY_USERS_DATA_FAILED,
  COMPANY_USERS_DATA_LOADING,
  COMPANY_USERS_DATA_SUCCESS,
} from "../types";

export const getCompanyUsers = async (dispatch) => {
  dispatch({
    type: COMPANY_USERS_DATA_LOADING,
    payload: {data:[]},
  });
  try {
    const { data } = await fetchUsers();
    console.log(data.results.data);
    dispatch({
      type: COMPANY_USERS_DATA_SUCCESS,
      payload: { data: data.results.data },
    });
  } catch (error) {
    dispatch({
      type: COMPANY_USERS_DATA_FAILED,
      payload: {data:[]},
    });
  }
};
