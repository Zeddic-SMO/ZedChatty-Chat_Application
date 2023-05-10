import { Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Profile from "./Screens/Profile";
import Messenger from "./Screens/Messenger";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Messenger />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AllRoutes;
