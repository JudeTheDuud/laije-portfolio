import React from "react";
import Linkedin from "../assets/linkedin-fill.svg"
import Email from "../assets/email-fill.svg"
import X from "../assets/twitter-x-fill.svg"

const navbar = () => {
  return (
    <div className="bg-primary">
      <nav className="flex items-center justify-between w-full px-12 py-6 text-2xl">
        <div className="text-3xl font-bold text-white"> Jasmine Osai</div>

        <div>
          <ul className="flex ">
            <a href=""><li className="mx-5 transition">Home</li></a>
            <a href=""><li className="mx-5 transition">About</li></a>
            <a href=""><li className="mx-5 transition">Contact</li></a>
            
          </ul>
        </div>

        <div className="flex align-middle">
            <a href=""><img className = "mx-1 mt-0.5 w-10"src={Email} alt="" /></a>
            <a href=""><img className = "w-10 mx-1"src={Linkedin} alt="" /></a>
            <a href=""><img className = "mx-1 mt-1.5 w-10 h-8"src={X} alt="" /></a>
            
        </div>
      </nav>
    </div>
  );
};

export default navbar;
