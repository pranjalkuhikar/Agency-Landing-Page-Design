import React from "react";
import Button from "../../components/Button";

const Section1 = () => {
  return (
    <div className="px-10 py-10 lg:px-40 lg:py-10 h-full w-full">
      <nav className="h-full w-full">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-tighter">
            🅿️Pranjal
          </div>
          <div className="hidden md:flex items-center justify-between gap-10 text-[#00012A]">
            <div className="cursor-pointer">About Us</div>
            <div className="cursor-pointer">Services</div>
            <div className="cursor-pointer">Team</div>
            <div className="cursor-pointer">Testimonial</div>
          </div>
          <Button text={"Contact Us"} />
        </div>
      </nav>
      <main className="h-full w-full">
        <div className="flex flex-col h-[100%] w-full">
          <div className="w-full h-[50%] pt-20 text-[#00012A] uppercase flex flex-col items-center justify-between">
            <div className="text-8xl font-semibold flex items-baseline">
              <div className="">Creative</div>
              <img
                src="creative.jpg"
                alt="img"
                className="rounded-full rounded-br-none object-cover h-40 w-36"
              />
              <div>Digital</div>
            </div>
            <div
              className="text-8xl font-extralight"
              style={{ fontWeight: 200 }}
            >
              Branding Agency
            </div>
          </div>
          <div className="bg-amber-400 w-full h-[50%]">World</div>
        </div>
      </main>
    </div>
  );
};

export default Section1;
