import { Home, MailOutline, Phone } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
const Profile = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      <div className="w-full p-7 bg-slate-300 px-[10%] flex">
        <div className=" bg-gray-200 shadow-xl w-full flex flex-col md:flex-row">
          <div className="w-full md:w-[35%] p-4 md:p-5 flex flex-col gap-4 border-r-2 border-gray-700">
            <p className="flex items-center gap-3">
              <span className="font-bold">
                <MailOutline />
              </span>
              <span> samuel93ortil@gmail.com</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="font-bold">
                <Phone />
              </span>
              <span> +234813 347 8014</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="font-bold">
                <Home />
              </span>
              <span> Abuja, Nigeria</span>
            </p>
            <div className="flex justify-center my-5">
              <Link to="/">
                <span className="py-2 px-4 bg-[#865DFF] rounded-2xl text-gray-300 hover:bg-[#402984]">
                  Messenger
                </span>
              </Link>
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
