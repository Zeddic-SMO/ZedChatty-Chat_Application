import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Messenger = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <div className="w-full py-7 px-2 bg-slate-300 md:px-[10%] flex">
        <div className=" bg-gray-200 shadow-xl w-full flex flex-col md:flex-row">
          <div className="w-full max-h-[500px] md:w-[30%] p-4 md:p-5 md:flex flex-col gap-4 border-b-2 md:border-b-0 md:border-r-2 border-gray-700 relative ">
            <div className="flex justify-center fixed top-5 right-5">
              <Link to="/profile">
                <span className="py-2 px-4 bg-[#865DFF] rounded-2xl text-gray-300 hover:bg-[#402984]">
                  Go To Profile
                </span>
              </Link>
            </div>
            <div className="p-3 flex md:flex-col overflow-x-scroll  hover:overscroll-contain md:overflow-x-hidden">
              <div className="flex p-2 gap-2 items-center mx-5 md:mx-0 hover:bg-slate-300 rounded-xl cursor-pointer">
                <img
                  src="./img/api.jpg"
                  alt=""
                  className="w-[45px] h-[45px] rounded-full object-cover"
                />
                <span>Zeddic</span>
              </div>

              <div className="flex p-2 gap-2 items-center mx-5 md:mx-0 hover:bg-slate-300 rounded-xl cursor-pointer">
                <img
                  src="./img/api.jpg"
                  alt=""
                  className="w-[45px] h-[45px] rounded-full object-cover"
                />
                <span>Zeddic</span>
              </div>

              <div className="flex p-2 gap-2 items-center mx-5 md:mx-0 hover:bg-slate-300 rounded-xl cursor-pointer">
                <img
                  src="./img/api.jpg"
                  alt=""
                  className="w-[45px] h-[45px] rounded-full object-cover"
                />
                <span>Zeddic</span>
              </div>

              <div className="flex p-2 gap-2 items-center mx-5 md:mx-0 hover:bg-slate-300 rounded-xl cursor-pointer">
                <img
                  src="./img/api.jpg"
                  alt=""
                  className="w-[45px] h-[45px] rounded-full object-cover"
                />
                <span>Zeddic</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[70%] p-4 md:p-5 flex flex-col">
            <p className="bg-gray-300 self-start px-4 py-1 rounded-md">Hi</p>
            <p className="bg-gray-400 self-end px-4 py-1 rounded-md">Hello</p>

            <p className="bg-gray-300 self-start px-4 py-1 rounded-md">
              How're u doing?
            </p>
            <p className="bg-gray-400 self-end px-4 py-1 rounded-md">
              I'm fine. And u?
            </p>

            <p className="w-full my-3">
              <input
                type="text"
                name="message"
                className="w-4/5 mr-2 md:w-[90%] md:mr-2 p-3 rounded-lg"
              />
              <button className=" p-1 px-2 bg-[#865DFF] rounded-lg hover:bg-[#5e45a8]">
                Send
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Messenger;
