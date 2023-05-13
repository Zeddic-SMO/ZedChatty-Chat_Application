import React from "react";

const Messenge = ({ own }) => {
  return (
    <div
      className="inline-flex mb-3"
      style={
        own ? { justifyContent: "flex-end" } : { justifyContent: "flex-start" }
      }
    >
      <p className="bg-gray-300 px-4 py-1 rounded-md">Hi, How're u doing?</p>
    </div>
  );
};

export default Messenge;
