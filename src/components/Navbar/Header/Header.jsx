import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
function Header() {
  return (
    <div className="bg-[#010F58] p-5">
      <div className="flex justify-between">
        <div className="flex text-white left gap-x-4">
          <div className="flex items-center gap-x-3">
            <div className="h-[50px] w-[50px] rounded-full bg-white relative">
              <FaLocationDot className="absolute text-3xl text-[#FF5017] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            </div>

            <p>7124 Landmark Tower,New York</p>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="h-[50px] w-[50px] rounded-full bg-white relative">
              <IoMdMail className="absolute text-3xl text-[#FF5017] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            </div>
            <p>support@yourdomain.com</p>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="h-[50px] w-[50px] rounded-full bg-white relative">
              <FaPhoneAlt className="absolute text-3xl text-[#FF5017] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            </div>
            <p>+61383766284</p>
          </div>
        </div>
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
  );
}

export default Header;
