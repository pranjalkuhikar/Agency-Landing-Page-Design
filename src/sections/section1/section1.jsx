import React from "react";
import Button from "../../components/Button";

const Section1 = () => {
  return (
    <div className="px-10 py-10  lg:px-40 lg:py-10 flex items-center justify-between">
      <div className="text-2xl font-semibold tracking-tighter">🅿️Pranjal</div>
      <div className="hidden md:flex items-center justify-between gap-10 text-[#00012A]  ">
        <div className="cursor-pointer">About Us</div>
        <div className="cursor-pointer">Services</div>
        <div className="cursor-pointer">Team</div>
        <div className="cursor-pointer">Testimonial</div>
      </div>
      <Button text={"Contact Us"} />
    </div>
  );
};

export default Section1;
