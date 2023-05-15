import { FaHome } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FcSettings } from "react-icons/fc";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Modal from "../Components/Modal";
import UpdateProfile from "./UpdateProfile";
import { getUserAction } from "../redux/actions/authAction";

const Profile = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const { user: loginUser } = useSelector((store) => store.login);
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(getUserAction(loginUser._id));
  }, [loginUser, dispatch]);

  const Logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <div className="min-h-screen">
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <UpdateProfile setOpenModal={setOpenModal} />
        </Modal>
      )}
      {/* Header */}
      <Header />

      <div className="w-full p-7 bg-slate-300 px-[10%] flex">
        <div className=" bg-gray-200 shadow-xl w-full flex flex-col md:flex-row">
          <div className="w-full md:w-[35%] p-4 md:p-5 flex flex-col gap-4 border-r-2 border-gray-700">
            <p className="flex items-center gap-3">
              <span className="font-bold">
                <HiOutlineMail />
              </span>
              <span> {user && user.email ? user.email : "Email Here"}</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="font-bold">
                <BsTelephone />
              </span>
              <span>
                {" "}
                {user && user.phoneNumber ? (
                  "+234 " + user.phoneNumber
                ) : (
                  <span className="text-black italic text-sm">
                    Phone Number Here
                  </span>
                )}
              </span>
            </p>
            <p className="flex items-center gap-3">
              <span className="font-bold">
                <FaHome />
              </span>
              <span>
                {" "}
                {user && user.location ? (
                  user.location
                ) : (
                  <span className="text-black italic text-sm">
                    Your Location Here
                  </span>
                )}
              </span>
            </p>
            <p className="flex items-center gap-3">
              <span>
                <FcSettings />
              </span>

              <span
                className="text-sm font-bold text-red-950 underline hover:text-[#865DFF] cursor-pointer"
                onClick={() => setOpenModal(true)}
              >
                Update Profile
              </span>
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
              {user && user.bio ? (
                user.bio
              ) : (
                <span className="font-bold">
                  Click the update profile button to update your
                  Bio/About/Professional Summary...
                </span>
              )}
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
