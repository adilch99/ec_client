import { publicRequest } from "../requestMethods";
import {
  loginStart,
  loginFailure,
  loginSuccess,
  resetError,
} from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure({ msg: error.response.data.msg }));
    setTimeout(() => {
      dispatch(resetError());
    }, 3000);
  }
};

export const register = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(loginSuccess(res.data));
    localStorage.setItem("user", JSON.stringify(res.data.user));
  } catch (error) {
    dispatch(loginFailure({ msg: error.response.data.msg }));
    setTimeout(() => {
      dispatch(resetError());
    }, 3000);
  }
};
