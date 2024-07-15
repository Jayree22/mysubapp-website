import React from "react";
import Logo from "../assets/images/Logo.png";
import Playstore from "../assets/images/Playstore.png";
import Apple from "../assets/images/Apple.png";
import fullphone from "../assets/images/full-phone.png";
import rounded2 from "../assets/images/rounded-img2.png";
import rounded3 from "../assets/images/rounded-img3.png";

const NavBar = () => {
  return (
    <div className="w-full h-full  px-[5rem] ">
      <div className="mt-8 flex justify-between items-center  ">
        <div className="">
          <img className=" " src={Logo} alt="Logo" />
        </div>
        <div className="flex  w-[50%]">
          <div className="">
            <a
              href="#"
              className=" font-extrabold text-Darkblue text-[15px]  pr-9 drop-shadow-lg shadow-black"
            >
              How it works
            </a>

            <a href="#" className=" font-extrabold text-Darkblue text-sm  pr-9">
              Features
            </a>
            <a href="#" className=" font-extrabold text-Darkblue text-sm  pr-9">
              FAQ
            </a>
          </div>
          <div>
            <button className=" rounded font-medium bg-Darkblue text-white text-sm min-w-[9%] py-[7px] px-[15px] ">
              Download now
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between   ">
          <div className="w-[50%] border  ">
            <h1 className="  text-Darkerblue text-5xl font-black font-[900] w-[79%] border">
              A Better Way to Earn & Subscribe
            </h1>
            <div className="flex mt-8">
              <div className=" flex  items-center border border-slategray rounded  bg-white  min-w-[9%] py-[7px] px-[15px] mr-4">
                <img className="w-3 h-4 " src={Playstore} alt="Playstore" />
                <h1 className="text-xs pl-2 text-Darkblue font-[600]">
                  Get on Andriod
                </h1>
              </div>

              <div className="flex   items-center border border-slategray rounded bg-white  text-sm min-w-[9%] py-[12px] px-[15px] ">
                <img className="w-3 h-4 " src={Apple} alt="Apple" />
                <h1 className="text-xs pl-2 text-Darkblue font-[600]">
                  Get on iPhone
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[50%] h-[70%] bg-red-500"></div>
        <div>
          {" "}
          <img className=" w-[5%]  " src={rounded2} alt="rounded2" />
          <img className="w-[95%] " src={fullphone} alt="fullphone" />
          <img className="w-[10%] " src={rounded3} alt="rounded3" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
