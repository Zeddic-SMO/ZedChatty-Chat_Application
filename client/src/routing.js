import { Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Profile from "./Screens/Profile";
import Messenger from "./Screens/Messenger";
import { useSelector } from "react-redux";

const AllRoutes = () => {
  const { user } = useSelector((store) => store.login);
  return (
    <Routes>
      <Route path="/" element={user ? <Messenger /> : <Login />} />
      <Route path="/login" element={!user ? <Login /> : <Profile />} />
      <Route path="/register" element={!user ? <Register /> : <Profile />} />
      <Route path="/profile" element={user ? <Profile /> : <Login />} />
    </Routes>
  );
};

export default AllRoutes;
