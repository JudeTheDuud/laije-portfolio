import React from "react";
import { Link } from "react-scroll";
import Linkedin from "../assets/linkedin-fill.svg";
import Email from "../assets/email-fill.svg";
import X from "../assets/twitter-x-fill.svg";

const navbar = () => {
  return (
    <div className="sticky top-[0.1px] bg-primary z-50">
      <nav className="flex items-center justify-between w-full px-12 py-6 text-2xl ">
        <div className="text-3xl font-bold text-white"> Jasmine Osai</div>

        <div>
          <ul className="flex ">
            <li className="mx-5 transition cursor-pointer">
              <Link
                activeClass="active"
                className=""
                spy={true}
                smooth={true}
                offset={-150}
                duration={100}
                to="home"
              >
                Home
              </Link>
            </li>

            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-130}
              duration={100}
              to="about"
            >
              <li className="mx-5 transition cursor-pointer ">About</li>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-60}
              duration={100}
              to="contact"
            >
              <li className="mx-5 transition cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>

        <div className="flex align-middle">
          <a href="mailto:jasmineosai@gmail.com">
            <img className="mx-1 mt-0.5 w-10" src={Email} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/jasmineosai/" target="blank">
            <img className="w-10 mx-1" src={Linkedin} alt="" />
          </a>
          <a href="">
            <img className="mx-1 mt-1.5 w-10 h-8" src={X} alt="" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
