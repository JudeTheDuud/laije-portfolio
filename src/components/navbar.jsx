import React, {useState} from "react";
import { Link } from "react-scroll";
import Linkedin from "../assets/linkedin-fill.svg";
import Email from "../assets/email-fill.svg";
import X from "../assets/twitter-x-fill.svg";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const navbar = () => {
  let [isOpen, setIsOpen] = useState(false)


  
  return (
    <div className="sticky top-[0.1px] bg-primary z-50">
      <nav className="flex flex-wrap items-center justify-between w-full px-12 py-6 text-2xl md:flex-nowrap ">
        <div className="text-xl font-bold text-white md:text-3xl"> Jasmine Osai</div>

        <div onClick={() =>{setIsOpen(!isOpen)}} className="self-end cursor-pointer md:hidden lg:hidden">
          
          {
            !isOpen ? <Bars3Icon className="w-8 h-8 text-white" /> : <XMarkIcon className="w-8 h-8 text-white"/>
          }
          
        </div>

        <div className="flex w-screen justify-center md:w-[22rem]">
          <ul className={`flex flex-col  animate-dropin items-center w-screen absolute  pb-[10rem] md:pb-0 bg-primary md:static  md:flex-row ${isOpen ? 'top-22' : 'top-[-490px]'}`}>
            <li className="mx-5 mt-4 mb-4 text-lg cursor-pointer animate-dropin md:text-2xl md:mb-0 md:mt-0">
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

            <li className="mx-5 mb-4 text-lg transition cursor-pointer md:text-2xl md:mb-0">
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-130}
                duration={100}
                to="about"
              >
                About
              </Link>
            </li>

            <li className="mx-5 text-lg transition cursor-pointer md:text-2xl ">
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-60}
                duration={100}
                to="contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden align-middle md:flex ">
          <a href="mailto:jasmineosai@gmail.com">
            <img
              className="hidden md:block mx-1 mt-0.5 w-10"
              src={Email}
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/in/jasmineosai/" target="blank">
            <img className="hidden w-10 mx-1 md:block" src={Linkedin} alt="" />
          </a>
          <a href="">
            <img
              className="hidden md:block mx-1 mt-1.5 w-10 h-8"
              src={X}
              alt=""
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
