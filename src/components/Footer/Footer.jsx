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
              <div className="flex items-center justify-between">
                <p className="text-sm text-white capitalize xl:text-center">
                  ©2022 Kavinax Property. All Rights Reserved.
                </p>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="28"
                        viewBox="0 0 23 28"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_123)">
                          <path
                            d="M22.681 9.6804C22.7333 12.3004 22.7774 14.9122 21.8618 17.4307C20.1991 22.0166 17.2553 25.3272 12.6449 27.021C12.0144 27.2525 11.428 27.2647 10.8055 27.0332C5.47221 25.055 2.38386 21.1068 1.04651 15.6353C0.813576 14.6766 0.713174 13.6936 0.713174 12.7025C0.721206 10.4075 0.729238 8.11247 0.705142 5.81745C0.701126 5.28533 0.885865 4.99287 1.36378 4.77759C4.64088 3.30715 7.91398 1.8164 11.1831 0.325653C11.5445 0.159111 11.8698 0.155049 12.2393 0.325653C15.4602 1.80015 18.677 3.27465 21.914 4.71259C22.5284 4.98475 22.7172 5.35845 22.6931 6.00024C22.6529 7.2229 22.681 8.45368 22.681 9.6804ZM9.2955 19.5916C9.56056 19.5348 9.71317 19.2951 9.8939 19.1123C12.5084 16.472 15.1349 13.8399 17.7292 11.1793C19.0666 9.80632 19.1549 10.3303 17.6449 8.73396C17.3798 8.45368 17.171 8.45774 16.926 8.73802C16.7694 8.91675 16.5927 9.07923 16.42 9.24577C14.2031 11.4595 11.9782 13.6652 9.78145 15.8993C9.36378 16.3258 9.09068 16.338 8.70113 15.8912C8.24731 15.3712 7.73727 14.9 7.25534 14.4126C6.0706 13.2143 6.08265 13.2265 4.95414 14.4451C4.6208 14.8066 4.64088 15.0422 4.9702 15.3712C6.26337 16.667 7.53647 17.9831 8.82161 19.2911C8.95815 19.421 9.07864 19.5713 9.2955 19.5916Z"
                            fill="#F8FAFA"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_123">
                            <rect
                              width="22"
                              height="27"
                              fill="white"
                              transform="translate(0.705078 0.200195)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p>Secure Payments</p>
                  </div>
                  <div className=" w-[100px] h-[38px] flex justify-center items-center bg-white rounded">
                    <img
                      src="https://i.ibb.co/2MCgfNt/5323abfc22c7e1fd0da62bffb6a4f3be.png"
                      alt=""
                      className="w-[60px] h-[17px]"
                    />
                  </div>
                  <div className=" w-[100px] h-[38px] flex justify-center items-center bg-white rounded">
                    <img
                      src="https://i.ibb.co/D7vxkrd/49bee202e7871165211a2c19ae111315.png"
                      alt=""
                      className="w-[24px] h-[17px]"
                    />
                  </div>
                  <div className=" w-[100px] h-[38px] flex justify-center items-center bg-white rounded">
                    <img
                      src="https://i.ibb.co/vJpgQt2/01b240273b40dab07f8246ef98aed88a.png"
                      alt=""
                      className="w-[45px] h-[17px]"
                    />
                  </div>
                  <div className="px-5 bg-white rounded">
                    <img
                      src="https://i.ibb.co/p2dvBNc/7a07f1d6dae7e7c284f383ef52580247.png"
                      alt=""
                      className="w-[67px] h-[38px]"
                    />
                  </div>
                  <div className=" w-[100px] h-[38px] flex justify-center items-center bg-white rounded">
                    <img
                      src="https://i.ibb.co/YZqtGhh/aa73c6f58e3738daf12804b6446f57fc.png"
                      alt=""
                      className="w-[21px] h-[17px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
