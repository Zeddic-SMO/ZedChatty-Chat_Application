import React from "react";

const Header = () => {
  return (
    <>
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
              src="./img/zeddic.png"
              alt=""
              className="w-[150px] md:w-[190px] h-[150px] md:h-[200px] rounded-full absolute top-[-90px] shadow-md shadow-black"
            />
          </div>
          <div className="mt-16 md:mt-0 text-center md:text-left md:ml-[300px] py-4">
            <h1 className="text-[20px] md:text-[35px] pt-3">Samuel M. Ortil</h1>
            <p className="text-[12px] md:text-[14px] italic">
              Software Engineer || MERN Stack
            </p>
            <p className="text-[16px] font-thin">
              <span>100 followers</span> <span>100 followings</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
