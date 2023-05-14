import React, { useEffect, useState } from "react";
import { getUserAction } from "../redux/actions/authAction";
import axios from "axios";

const Conversation = ({ conversation, currentUser }) => {
  const [friend, setFriend] = useState(null);
  useEffect(() => {
    const friendId = conversation.members.find((id) => id !== currentUser);

    const getFriend = async () => {
      try {
        const { data } = await axios.get(`/api/v1/user?userId=${friendId}`);
        setFriend(data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriend();
  }, []);

  return (
    <>
      {friend && (
        <div className="flex p-2 gap-2 items-center mx-5 md:mx-0 hover:bg-slate-300 rounded-xl cursor-pointer">
          <img
            src={
              friend.profilePicture ? friend.profilePicture : `./img/avatar.png`
            }
            alt=""
            className="w-[45px] h-[45px] mx-1 rounded-full object-cover"
          />
          <span>{friend.username}</span>
        </div>
      )}
    </>
  );
};

export default Conversation;
