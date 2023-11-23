import React from "react";
import Laije from "../assets/LaijePic2.jpg";
import Resume from "../assets/files/Jasmine-Osai-Resume.pdf"
const home = () => {
  return (
    <div>
      <div className="flex justify-between px-12 hero" id = 'home'>
        <div className=" flex flex-col mt-36  items-center overflow-hidden text-[1.5vw] leading-tight font-medium text-left ml-28 animate-dropin">
          <p>
            Hello I`m Jasmine,
            <br />{" "}
            <span className="font-extrabold text-[4.5vw]">
              Media <br /> & Communications Professional
            </span>
            <br /> based in Nigeria.
          </p>

          <a href= {Resume} target="_blank" className="self-start"><button className="p-2 mt-6 text-xl font-normal transition duration-300 ease-in-out rounded-md flex-start delay-15 hover:-translate-y-1 hover:scale-120">
          Résumé
          </button></a>
          
        </div>

        <div className="relative flex items-center justify-center mr-20 ">
            
          <img
            src={Laije}
            alt=""
            className="object-cover mt-16 overflow-hidden border-8 border-primary  rounded-[50%] w-[80%] h-[70%] animate-dropin"
          />
          
        </div>
      </div>
    </div>
  );
};

export default home;
