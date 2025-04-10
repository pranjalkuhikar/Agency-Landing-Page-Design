import React from "react";

const Button = ({ text }) => {
  return (
    <div className="cursor-pointer px-7 py-3 bg-[#4F4AD7] text-white rounded-xl active:scale-95">
      {text}
    </div>
  );
};

export default Button;
