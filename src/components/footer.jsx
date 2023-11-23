import React from "react";
import Linkedin from "../assets/linkedinpink.svg";
import Email from "../assets/emailpink.svg";
import X from "../assets/twitterpink.svg";
import Phone from "../assets/phone.svg";

const footer = () => {
  return (
    <div>
      <div className="flex justify-center pb-10 mt-8">
        <a href="mailto:jasmineosai@gmail.com">
          <img className="mr-1 mt-0.5 w-10" src={Email} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/jasmineosai" target="blank">
          <img className="w-10 mr-1 " src={Linkedin} alt="" />
        </a>
        <a href="">
          <img className="mr-1 mt-1.5 w-10 h-8" src={X} alt="" />
        </a>
        <div className="flex items-center rounded-md cursor-default w-52 bg-primary">
          <img className="w-10 h-8 mx-1 mt-" src={Phone} alt="" />{" "}
          <p className="text-white">+2349032082817</p>{" "}
        </div>
      </div>
      <p className="pb-1 text-center text-primary">
        {" "}
        &#169; 2023 <span className="font-bold">Jasmine Osai</span> All Rights
        Reserved.
      </p>
    </div>
  );
};

export default footer;
