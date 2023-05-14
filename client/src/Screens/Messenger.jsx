import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Messenge from "../Components/Messenge";
import Conversation from "../Components/Conversation";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Messenger = () => {
  const { user } = useSelector((store) => store.login);
  const [conversations, setConversations] = useState(null);
  const [currentChats, setcurrentChats] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  // To fects a users conversation by passing the user's ID as a parameter
  useEffect(() => {
    const getConversations = async () => {
      const { data } = await axios.get(`/api/v1/conversation/${user._id}`);
      setConversations(data);
    };
    user && getConversations();
  }, [user]);

  //Fetch all the chats
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await axios.get(
          "/api/v1/message/" + currentChats?._id
        );
        setMessages(data);
      } catch (err) {
        console.log(err);
      }
    };
    getChats();
  }, [currentChats]);

  // Send message
  const handleSendMessage = async () => {
    const newMessage = {
      conversationId: currentChats?._id,
      senderId: user._id,
      text: text,
    };

    // submitting the new message
    try {
      const { data } = await axios.post("/api/v1/message", newMessage);

      setMessages([...messages, data]);
      setText("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* Header */}
      <Header />

      <div className="w-full py-7 px-2 bg-slate-300 md:px-[10%] flex">
        <div className=" bg-gray-200 shadow-xl w-full flex flex-col md:flex-row">
          <div className="w-full max-h-[500px] md:w-[30%] p-4 md:p-5 md:flex flex-col gap-4 border-b-2 md:border-b-0 md:border-r-2 border-gray-700 relative ">
            <div className="flex justify-center fixed top-5 right-5">
              <Link to="/profile">
                <span className="py-2 px-4 bg-[#402984] rounded-2xl text-gray-300 hover:bg-[#865DFF]">
                  Go To Profile
                </span>
              </Link>
            </div>

            {/* online users  */}
            <div className="p-3 flex md:flex-col overflow-x-scroll md:overflow-x-hidden">
              {conversations &&
                conversations.map((conversation) => {
                  return (
                    <div
                      onClick={() => setcurrentChats(conversation)}
                      key={conversation._id}
                    >
                      <Conversation
                        conversation={conversation}
                        currentUser={user._id}
                      />
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Messenging section begins here */}
          <div className="w-full md:w-[70%] p-4 md:p-5 flex flex-col max-h-[500px] overflow-y-scroll">
            {currentChats ? (
              <>
                {messages.length > 0 &&
                  messages.map((chat) => {
                    return (
                      <Messenge
                        own={chat.senderId === user._id}
                        chat={chat}
                        key={chat._id}
                      />
                    );
                  })}
                {/* Input message section */}
                <div className="w-full my-3 flex items-center" ref={scrollRef}>
                  <textarea
                    name="text"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    className="w-4/5 mr-2 md:w-[90%] md:mr-2 p-3 rounded-lg"
                  ></textarea>

                  <button
                    onClick={handleSendMessage}
                    className="py-2 px-3 bg-[#402984] text-white rounded-lg hover:bg-[#865DFF]"
                  >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <div className="flex justify-center items-center">
                <span className="text-5xl py-10 text-center text-gray-400">
                  Open a conversation to start a chat
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Messenger;
