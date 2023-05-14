import {
  REGISTER_USER_INIT,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGIN_USER_INIT,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  GET_FRIEND_INFO_INIT,
  GET_FRIEND_INFO_SUCCESS,
  GET_FRIEND_INFO_FAILED,
} from "../constants/authConstants";
import axios from "axios";

// Registration action
const registerAction = ({ username, email, password, repeat_password }) => {
  return async (dispatch) => {
    try {
      // dispatch the API call initialization call that loads the spinner
      dispatch({ type: REGISTER_USER_INIT });

      //   set headders for the API call
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // axios call to submit data to the backend
      const { data } = await axios.post(
        "/api/v1/signup",
        {
          username,
          email,
          password,
          repeat_password,
        },
        config
      );

      // console.log(data);

      // dispatch the success action
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: REGISTER_USER_FAILED,
        payload:
          err.response && err.response.data.error
            ? err.response.data.error
            : err.message,
      });
    }
  };
};

// Login Action
const loginAction = ({ email, password }) => {
  return async (dispatch) => {
    try {
      // initiate the API call
      dispatch({ type: LOGIN_USER_INIT });

      // set headers and make API call
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // API call
      const { data } = await axios.post(
        "/api/v1/signin",
        { email, password },
        config
      );

      // dispatch success
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: data,
      });

      localStorage.setItem(
        "user",
        JSON.stringify({ access_token: data.access_token, user: data.user })
      );
    } catch (err) {
      // dispatch Failed
      console.log(err.response.data);
      dispatch({
        type: LOGIN_USER_FAILED,
        payload:
          err.response && err.response.data ? err.response.data : err.message,
      });
    }
  };
};

// Get a user
const getUserAction = (userId) => {
  return async (dispatch) => {
    try {
      // initiate the API call
      dispatch({
        type: GET_FRIEND_INFO_INIT,
      });

      // API call
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(`/api/v1/user?userId=${userId}`);

      // handle success situation
      dispatch({
        type: GET_FRIEND_INFO_SUCCESS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      // handle failed response
      dispatch({
        type: GET_FRIEND_INFO_FAILED,
        payload:
          err.response && err.response.data ? err.response.data : err.message,
      });
    }
  };
};

export { registerAction, loginAction, getUserAction };
