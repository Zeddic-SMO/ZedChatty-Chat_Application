import { FaHome } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
const Profile = () => {
  const Logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      <div className="w-full p-7 bg-slate-300 px-[10%] flex">
        <div className=" bg-gray-200 shadow-xl w-full flex flex-col md:flex-row">
          <div className="w-full md:w-[35%] p-4 md:p-5 flex flex-col gap-4 border-r-2 border-gray-700">
            <p className="flex items-center gap-3">
              <span className="font-bold">
                <HiOutlineMail />
              </span>
              <span> samuel93ortil@gmail.com</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="font-bold">
                <BsTelephone />
              </span>
              <span> +234813 347 8014</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="font-bold">
                <FaHome />
              </span>
              <span> Abuja, Nigeria</span>
            </p>
            <div className="flex justify-center items-center my-5 gap-4">
              <Link to="/">
                <span className="py-2 px-4 bg-[#865DFF] rounded-2xl text-gray-300 hover:bg-[#402984]">
                  Messenger
                </span>
              </Link>
              <button
                onClick={() => Logout()}
                className="rounded-2xl py-2 px-4 bg-red-800 hover:bg-red-500 text-gray-300"
              >
                Log Out
              </button>
            </div>
          </div>
          <div className="md:w-[65%] p-4 md:p-5 flex flex-col justify-center items-center">
            <p className="py-4 md:py-0">
              Samuel is an experienced Softare Enginer with over 2 years
              experience in building responsible full stack web application that
              works.
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Profile;
