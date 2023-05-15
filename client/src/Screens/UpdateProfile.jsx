import React, { useState } from "react";

const UpdateProfile = () => {
  const [img, setImg] = useState(null);
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    headLine: "",
    bio: "",
    phoneNumber: "",
    location: "",
  });

  //   handle input
  const handleUpdateInput = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  //   handleSubmit handler
  const submitUpdateHandler = () => {
    console.log(userInfo);
  };

  const { fullName, headLine, bio, phoneNumber, location } = userInfo;
  return (
    <div className="p-3">
      <div className="my-3">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
          htmlFor="profile_pic"
        >
          Upload Profile Pic:
        </label>
        <input
          className="block w-full md:w-[80%] md:ml-[15%] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="profile_pic"
          type="file"
        />
      </div>

      <div>
        <label htmlFor="fullName" className="text-gray-800 font-medium text-sm">
          Full Name:
        </label>
        <input
          type="text"
          name="fullName"
          value={fullName}
          onChange={handleUpdateInput}
          className="border-b-[1px] block w-full md:w-[80%] md:ml-[15%] outline-none border-gray-800 mb-2"
        />
      </div>

      <div>
        <label htmlFor="headLine" className="text-gray-800 font-medium text-sm">
          Headline:
        </label>
        <input
          type="text"
          name="headLine"
          value={headLine}
          onChange={handleUpdateInput}
          className="border-b-[1px] block w-full md:w-[80%] md:ml-[15%] outline-none border-gray-800 mb-2"
        />
      </div>

      <div>
        <label htmlFor="bio" className="text-gray-800 font-medium text-sm">
          Bio:
        </label>
        <textarea
          name="bio"
          value={bio}
          onChange={handleUpdateInput}
          className="w-full border-b-[1px] block md:w-[80%] md:ml-[15%] outline-none border-gray-800 mb-2"
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="phoneNumber"
          className="text-gray-800 font-medium text-sm"
        >
          Phone Number:
        </label>
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleUpdateInput}
          className="border-b-[1px] block w-full md:w-[80%] md:ml-[15%] outline-none border-gray-800 mb-2"
        />
      </div>

      <div>
        <label htmlFor="location" className="text-gray-800 font-medium text-sm">
          Location:
        </label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleUpdateInput}
          className="border-b-[1px] block w-full md:w-[80%] md:ml-[15%] outline-none border-gray-800 mb-2"
        />
      </div>

      <div className="flex justify-center py-2">
        <button
          className="bg-gray-700 hover:bg-[#865DFF] py-1 px-4 text-white shadow-md rounded-md"
          onClick={() => submitUpdateHandler()}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
