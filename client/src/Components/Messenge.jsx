import React from "react";
import { format } from "timeago.js";

const Messenge = ({ chat, own }) => {
  return (
    <div
      className="inline-flex mb-3"
      style={
        own ? { justifyContent: "flex-end" } : { justifyContent: "flex-start" }
      }
    >
      <div
        className="px-4 py-1 rounded-md"
        style={
          own
            ? { backgroundColor: "#865DFF", color: "white" }
            : { backgroundColor: "#ccc" }
        }
      >
        {chat.text}
        <p
          className="flex text-slate-700 text-sm pt-2"
          style={
            own
              ? { justifyContent: "flex-end" }
              : { justifyContent: "flex-start" }
          }
        >
          {" "}
          {format(chat.createdAt)}
        </p>
      </div>
    </div>
  );
};

export default Messenge;
