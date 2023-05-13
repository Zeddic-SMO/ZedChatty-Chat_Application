import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actions/authAction";
import { toast } from "react-toastify";
import Spinner from "../Components/spinner/Spinner";

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // user details
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  // consuming the Redux Store
  const {
    error: loginError,
    success,
    user,
  } = useSelector((store) => store.login);
  console.log(success);
  useEffect(() => {
    if (success) {
      toast.success(user.message);
      setUserDetails({
        email: "",
        password: "",
      });
      if (loginError) {
        setError(loginError);
      }
      navigation("/");
    }
  }, [success, loginError]);

  // handling user inputs
  const inputHandler = (e) => {
    setError(null);
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  // submitButtonHandler
  const submitButtonHandler = () => {
    if (!email || !password) {
      setError("All fields are required");
      return;
    }
    //dispatch the action
    dispatch(loginAction({ ...userDetails }));
  };

  const { email, password } = userDetails;
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-[450px] w-[320px] md:w-[450px] shadow-lg p-7 rounded-md bg-slate-100">
        <div className="text-center font-mono font-extrabold text-3xl border-b-2 border-gray-950 pb-2">
          Zed<span className="text-[#865DFF] text-4xl">Chatty</span>
        </div>
        {error && (
          <div className="border-2 border-red-600 text-red-600 shadow-md p-1 my-2 text-center">
            {error}
          </div>
        )}
        <div className="mt-5">
          <input
            type="text"
            placeholder="Username or Email"
            name="email"
            value={email}
            onChange={inputHandler}
            className="block w-full p-4 mb-4 rounded-md outline-none cursor-pointer"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={inputHandler}
            className="block w-full p-4 mb-4 rounded-md outline-none cursor-pointer"
          />
          <p className="my-4 text-end text-red-400 cursor-pointer">
            Forgot Password?{" "}
          </p>
          {!loading ? (
            <input
              type="button"
              value="Login"
              onClick={submitButtonHandler}
              className="block w-full p-2 mb-3 rounded-md outline-none bg-[#865DFF] text-xl uppercase text-gray-200 hover:bg-[#6245ba]"
            />
          ) : (
            <Spinner />
          )}
        </div>

        <div>
          <p className="text-gray-950 text-lg">
            You do not have an account?{" "}
            <span className="text-sm text-[#865DFF] cursor-pointer font-bold">
              <Link to="/register">Register Here</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
