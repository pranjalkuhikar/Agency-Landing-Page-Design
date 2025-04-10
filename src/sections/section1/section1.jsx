import React from "react";
import Button from "../../components/Button";
import { ArrowUpRight } from "lucide-react";

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
            <div className="text-4xl md:text-6xl lg:text-8xl font-semibold flex  lg:flex-row items-baseline">
              Creative
              <img
                src="creative.jpg"
                alt="img"
                className="rounded-full rounded-br-none object-cover h-20 w-20 lg:h-40 lg:w-36"
              />
              Digital
            </div>
            <div className="text-4xl md:text-6xl lg:text-8xl font-extralight ">
              Branding Agency
            </div>
          </div>
          <div className=" w-full pt-14 h-[50%] md:flex items-center justify-between gap-10">
            <div className="h-full md:flex flex-col items-start justify-between gap-3 lg:w-[31%] ">
              <img
                src="ice.png"
                alt="img"
                className="animate-spin lg:h-32"
                style={{ animationDuration: "5s" }}
              />
              <div>
                <h3 className="font-semibold text-2xl md:text-lg ">
                  Our Story
                </h3>
                <p>
                  Specialized agency that helps business establish and maintain
                  a
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="text-white bg-[#4F4AD7] px-4 py-2 rounded-xl cursor-pointer">
                    <ArrowUpRight />
                  </div>
                  <p>
                    strong online presence. This type of agency offers a range
                    of services.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full lg:w-[90%] mt-3 flex items-end justify-end flex-col gap-2">
              <img
                src="design.jpg"
                alt="img"
                className="h-72 w-full object-cover rounded-4xl"
              />
              <div className="text-white bg-[#4F4AD7] px-10 py-2 rounded-xl flex items-center justify-center gap-4 cursor-pointer">
                Know More <ArrowUpRight />
              </div>
            </div>
            <div className="md:w-[20%] h-full flex flex-col items-center md:items-start justify-between gap-6">
              <div className="text-lg font-extralight">
                <div className="text-6xl">
                  12 <span className="text-[#4F4AD7]">+</span>
                </div>
                Years Experience
              </div>
              <div className="text-lg font-extralight">
                <div className="text-6xl">
                  800 <span className="text-[#4F4AD7]">+</span>
                </div>
                Project Done
              </div>
              <div className="text-lg font-extralight">
                <div className="text-6xl">
                  500 <span className="text-[#4F4AD7]">+</span>
                </div>
                Happy Client
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Section1;
