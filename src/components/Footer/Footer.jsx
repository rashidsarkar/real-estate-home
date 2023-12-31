import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import "./footer.css";
import { IoCall } from "react-icons/io5";
import logoImg from "../../assets/header/Logo.png";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <div>
      <div className="flex items-end w-full bg-[#010F58]">
        <footer className="w-full text-white bg-[#010F58] body-font">
          <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-64 mx-auto space-y-2 text-center md:mx-0 md:text-left">
              <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                <img src="https://i.ibb.co/vmzKC6s/Logo-1.png" alt="" />
              </a>
              <p className="mt-2 text-sm text-white ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <div className="flex">
                <div className="flex gap-2 right">
                  <div className="h-[50px] w-[50px] rounded-full bg-white relative">
                    <FaFacebookF className="absolute text-3xl text-[#FF5017] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                  </div>
                  <div className="h-[50px] w-[50px] rounded-full bg-white relative">
                    <FaInstagram className="absolute text-3xl text-[#FF5017] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                  </div>
                  <div className="h-[50px] w-[50px] rounded-full bg-white relative">
                    <FaTwitter className="absolute text-3xl text-[#FF5017] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                  </div>
                  <div className="h-[50px] w-[50px] rounded-full bg-white relative">
                    <FaLinkedinIn className="absolute text-3xl text-[#FF5017] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
              <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                  Quick Links
                </h2>
                <img src="https://i.ibb.co/Zc5xwVG/Design.png" alt="" />
                <nav className="mb-10 list-none">
                  <li className="flex items-center gap-3 mt-3 text-white">
                    <img src="https://i.ibb.co/yhGbtnt/Vector-1.png" alt="" />
                    <a className="cursor-pointer hover:text-orange-500">
                      About Us
                    </a>
                  </li>
                  <li className="flex items-center gap-3 mt-3 text-white">
                    <img src="https://i.ibb.co/yhGbtnt/Vector-1.png" alt="" />
                    <a className="cursor-pointer hover:text-orange-500">
                      Property
                    </a>
                  </li>
                  <li className="flex items-center gap-3 mt-3 text-white">
                    <img src="https://i.ibb.co/yhGbtnt/Vector-1.png" alt="" />
                    <a className="cursor-pointer hover:text-orange-500">
                      Our Agents
                    </a>
                  </li>
                  <li className="flex items-center gap-3 mt-3 text-white">
                    <img src="https://i.ibb.co/yhGbtnt/Vector-1.png" alt="" />
                    <a className="cursor-pointer hover:text-orange-500">
                      Careers
                    </a>
                  </li>
                  <li className="flex items-center gap-3 mt-3 text-white">
                    <img src="https://i.ibb.co/yhGbtnt/Vector-1.png" alt="" />
                    <a className="cursor-pointer hover:text-orange-500">
                      Contact
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest uppercase title-font">
                  Recent Post
                </h2>
                <img src="https://i.ibb.co/Zc5xwVG/Design.png" alt="" />
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <div className="flex items-center gap-3 ">
                      <img
                        src="https://i.ibb.co/7QC3G8t/ec3ac95b296619f4de53d7e78e581549.png"
                        alt=""
                        className="h-[80px] w-[80px]"
                      />
                      <img
                        src="https://i.ibb.co/YfmrtDP/b926943dc4dfc7694ebdc1bfdeb84115.jpg"
                        alt=""
                        className="h-[80px] w-[80px]"
                      />
                    </div>
                  </li>
                  <li className="mt-3">
                    <div className="flex items-center gap-3 ">
                      <img
                        src="https://i.ibb.co/sFB698V/1e0fde2ccf8a6131a90fcf59944f428c.png"
                        alt=""
                        className="h-[80px] w-[80px]"
                      />
                      <img
                        src="https://i.ibb.co/HVVnrvq/1f22f9fe8ad7323cd68536ce9d1b4524.png"
                        alt=""
                        className="h-[80px] w-[80px]"
                      />
                    </div>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                  Contact Us
                </h2>
                <img src="https://i.ibb.co/Zc5xwVG/Design.png" alt="" />
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <div className="flex items-center gap-3">
                      <div className="h-[35px] w-[35px] rounded-full bg-white relative">
                        <IoCall className="absolute text-xl text-[#FF5017] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                      </div>
                      <div>
                        <p>Phone</p>
                        <p className="text-sm">+44 (0) 20 9994 7740</p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-3">
                    <div className="flex items-center gap-3">
                      <div className="h-[35px] w-[35px] rounded-full bg-white relative">
                        <IoMdMail className="absolute text-xl text-[#FF5017] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                      </div>
                      <div>
                        <p>Email</p>
                        <p className="text-sm">support@yourdomain.com</p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-3">
                    <div className="flex items-center gap-3">
                      <div className="h-[35px] w-[35px] rounded-full bg-white relative">
                        <FaLocationDot className="absolute text-xl text-[#FF5017] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                      </div>
                      <div>
                        <p>Address</p>
                        <p className="text-sm">7124 Landmark Tower,New York</p>
                      </div>
                    </div>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-[#FF5017]">
            <div className="container px-5 py-4 mx-auto">
              <p className="text-sm text-gray-700 capitalize xl:text-center">
                © 2020 All rights reserved{" "}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
