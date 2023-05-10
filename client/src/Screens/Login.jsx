import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-[450px] w-[320px] md:w-[450px] shadow-lg p-7 rounded-md bg-slate-100">
        <div className="text-center font-mono font-extrabold text-3xl border-b-2 border-gray-950 pb-2">
          Zed<span className="text-[#865DFF] text-4xl">Chatty</span>
        </div>

        <div className="mt-5">
          <input
            type="text"
            placeholder="Username or Email"
            className="block w-full p-4 mb-4 rounded-md outline-none cursor-pointer"
          />

          <input
            type="password"
            placeholder="Password"
            className="block w-full p-4 mb-4 rounded-md outline-none cursor-pointer"
          />
          <p className="my-4 text-end text-red-400 cursor-pointer">
            Forgot Password?{" "}
          </p>
          <input
            type="button"
            value="Login"
            className="block w-full p-2 mb-3 rounded-md outline-none bg-[#865DFF] text-xl uppercase text-gray-200 hover:bg-[#6245ba]"
          />
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
