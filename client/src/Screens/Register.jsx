import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Components/spinner/Spinner";
import { registerAction } from "../redux/actions/authAction";
import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    repeat_password: "",
  });

  // Redux store
  const {
    loading,
    success,
    user: loginUser,
  } = useSelector((store) => store.register);

  useEffect(() => {
    if (success) {
      toast.success(loginUser.message);
      setUser({
        username: "",
        email: "",
        password: "",
        repeat_password: "",
      });

      navigate("/login");
    }
  }, [success]);

  // this function handles user's input
  const inputHandler = (e) => {
    setError(null);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // This function handles the submission event
  const submitHandler = () => {
    if (!username || !email || !password || !repeat_password) {
      setError("All fields are required");
    }
    // dispatch the register action passing the data
    dispatch(registerAction({ username, email, password, repeat_password }));
  };

  const { username, email, password, repeat_password } = user;
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-[470px] w-[320px] md:w-[450px] shadow-lg p-7 rounded-md bg-slate-100">
        <div className="text-center font-mono font-extrabold text-3xl border-b-2 border-gray-950 pb-2">
          Zed<span className="text-[#865DFF] text-4xl">Chatty</span>
        </div>
        {error && (
          <div className="border-2 border-red-600 text-red-600 shadow-md p-1 my-2 text-center">
            {error}
          </div>
        )}
        <div className="my-4">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={inputHandler}
            className="block w-full p-3 mb-3 rounded-md outline-none cursor-pointer"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={inputHandler}
            className="block w-full p-3 mb-3 rounded-md outline-none cursor-pointer"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={inputHandler}
            className="block w-full p-3 mb-3 rounded-md outline-none cursor-pointer"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="repeat_password"
            value={repeat_password}
            onChange={inputHandler}
            className="block w-full p-3 mb-3 rounded-md outline-none cursor-pointer"
          />
          {!loading ? (
            <input
              type="button"
              value="Submit"
              onClick={submitHandler}
              className="block w-full p-2 mb-3 rounded-md outline-none bg-[#865DFF] text-xl uppercase text-gray-200 hover:bg-[#6245ba]"
            />
          ) : (
            <Spinner />
          )}
        </div>

        <div>
          <p className="text-gray-950 text-lg">
            Already Have an account?{" "}
            <span className="text-sm text-[#865DFF] cursor-pointer font-bold">
              <Link to="/login">Login Here</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
