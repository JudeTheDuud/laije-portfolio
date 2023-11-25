import React from "react";
import Laije from "../assets/LaijePic2.jpg";
import Resume from "../assets/files/Jasmine-Osai-Resume.pdf"
const home = () => {
  return (
    <div>
      <div className="flex flex-col-reverse items-center justify-between px-12 hero md:flex-row md:justify-evenly" id = 'home'>
        <div className="flex flex-col items-center text-xl font-medium  text-center mt-36 animate-dropin md:text-left md:text-[1.5vw] md:leading-[3rem] md:ml-[3rem]">
          <p className="">
            Hello I`m Jasmine,
            <br />{" "}
            <span className="text-2xl font-extrabold md:text-[4.5vw] md:leading-[3rem]">
              Media <br /> & Communications Professional
            </span>
            <br /> based in Nigeria.
          </p>

          <a href= {Resume} target="_blank" className="self-center md:self-start"><button className="p-2 mt-6 text-xl font-normal transition duration-300 ease-in-out rounded-md flex-start delay-15 hover:-translate-y-1 hover:scale-120">
          Résumé
          </button></a>
          
        </div>

        <div className="relative flex items-center justify-center md:w-3/5 ">
            
          <img
            src={Laije}
            alt=""
            className="items-center object-cover mt-16 overflow-hidden border-8 border-primary  rounded-[50%] w-[200px] h-[200px] animate-dropin md:w-[400px] md:h-[400px] md:min-w-[400px] md:min-h-[400px]"
          />
          
        </div>
      </div>
    </div>
  );
};

export default home;
