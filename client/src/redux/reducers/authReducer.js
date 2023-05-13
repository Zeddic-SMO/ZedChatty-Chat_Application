import {
  REGISTER_USER_FAILED,
  REGISTER_USER_INIT,
  REGISTER_USER_RESET,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_INIT,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER_RESET,
} from "../constants/authConstants";

const registerReducer = (state = { loading: false, error: "" }, action) => {
  switch (action.type) {
    case REGISTER_USER_INIT:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        user: action.payload,
      };
    case REGISTER_USER_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    case REGISTER_USER_RESET:
      return {};
    default:
      return state;
  }
};

const userFromStore = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const loginReducer = (
  state = {
    loading: false,
    error: "",
    user: userFromStore && userFromStore.user ? userFromStore.user : null,
  },
  action
) => {
  switch (action.type) {
    case LOGIN_USER_INIT:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        message: action.payload.message,
        user: action.payload.user,
      };
    case LOGIN_USER_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    case LOGIN_USER_RESET:
      return {};
    default:
      return state;
  }
};

export { registerReducer, loginReducer };
