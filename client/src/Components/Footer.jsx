import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-50 h-[75px] flex items-center justify-center font-mono font-semibold">
      <p className="text-center">
        &copy; {new Date().getFullYear} ZedChatty. All Right Reserved ||
        Designed by Zeddic
      </p>
    </div>
  );
};

export default Footer;
