import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import UpdateProfile from "../Screens/UpdateProfile";
import { getUserAction } from "../redux/actions/authAction";

const Header = () => {
  const dispatch = useDispatch();
  const { user: loginUser } = useSelector((store) => store.login);
  const { user } = useSelector((store) => store.user);
  const [openModal, setOpenModal] = useState(false);

  // console.log(loginUser._id);
  useEffect(() => {
    dispatch(getUserAction(loginUser._id));
  }, [loginUser, dispatch]);

  // console.log(user);

  return (
    <>
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <UpdateProfile setOpenModal={setOpenModal} />
        </Modal>
      )}
      <div className="w-full h-[200px] md:h-[220px]">
        <img
          src="./img/api.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="font-mono font-extrabold text-lg bg-gray-50 pb-2">
        <div className="relative w-[80%] mx-auto flex flex-col">
          <div className="flex justify-center md:justify-start">
            <img
              src={`./img/profileImg.png`}
              alt=""
              className="w-[150px] md:w-[190px] h-[150px] md:h-[200px] rounded-full absolute top-[-90px] shadow-md shadow-black object-cover"
            />
          </div>
          <div className="mt-16 md:mt-0 text-center md:text-left md:ml-[300px] py-4">
            <h1 className="text-[20px] md:text-[35px] pt-3">
              {user && user.fullName ? (
                user.fullName
              ) : (
                <span className="italic text-[19px]">Full Name Here</span>
              )}
            </h1>
            <p className="text-[12px] md:text-[14px] italic">
              {user && user.headLine ? (
                user.headLine
              ) : (
                <span>Enter a headline or Occupation</span>
              )}
            </p>
            <p className="italic">@{user?.username}</p>
            <p className="text-[16px] font-thin">
              <span>{user?.followers.length} followers</span>{" "}
              <span>{user?.following.length} followings</span>
            </p>
            <p>
              <button
                className="text-sm border-[2px] p-1 border-[#865DFF] hover:bg-slate-500 hover:text-white"
                onClick={() => setOpenModal(true)}
              >
                Update Profile
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
