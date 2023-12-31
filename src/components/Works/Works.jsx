import { FaChevronRight, FaHandshake } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";

function Works() {
  return (
    <div>
      <div className="my-5">
        <div className="relative mx-auto h-[550px] mt-20">
          <img
            className="object-cover w-full h-full rounded-md"
            src="https://i.ibb.co/VSR37Pq/image1.png"
            alt="Random image"
          />
          <div className="absolute inset-0 rounded-md overLayBg "></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div>
              <div>
                <img
                  className="h-[50px] w-[50px] mx-auto"
                  src="https://i.ibb.co/nmnPC44/Play.png"
                  alt=""
                />
                <h2 className="py-4 text-3xl font-bold text-center text-white">
                  Watch Our Video Tutorial
                </h2>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="relative">
                  <img
                    className="absolute"
                    src="https://i.ibb.co/wgFJR0p/Group.png"
                    alt=""
                  />
                  <div className="p-4">
                    <img
                      className=""
                      src="https://i.ibb.co/mtP992R/Vector.png"
                      alt=""
                    />
                    <div className="h-[50px] w-[50px] rounded-full bg-white  left-[91px] -bottom-[7px] absolute">
                      <IoHome className="absolute text-3xl text-[#FF5017] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white w-[245px] text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                  <div className="absolute -bottom-[40px] -translate-x-1/2 left-1/2">
                    <p className="text-center w-[200px] text-white">
                      Choose Your Property
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="absolute"
                    src="https://i.ibb.co/wgFJR0p/Group.png"
                    alt=""
                  />
                  <div className="p-4">
                    <img
                      className=""
                      src="https://i.ibb.co/mtP992R/Vector.png"
                      alt=""
                    />
                    <div className="h-[50px] w-[50px] rounded-full bg-white  left-[91px] -bottom-[7px] absolute">
                      <FaHandshake className="absolute text-3xl text-[#FF5017] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white w-[245px] text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                  <div className="absolute -bottom-[40px] -translate-x-1/2 left-1/2">
                    <p className="text-center w-[200px] text-white">
                      Make Appointment
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="absolute"
                    src="https://i.ibb.co/wgFJR0p/Group.png"
                    alt=""
                  />
                  <div className="p-4">
                    <img
                      className=""
                      src="https://i.ibb.co/mtP992R/Vector.png"
                      alt=""
                    />
                    <div className="h-[50px] w-[50px] rounded-full bg-white  left-[91px] -bottom-[7px] absolute">
                      <MdPayment className="absolute text-3xl text-[#FF5017] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white w-[245px] text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                  <div className="absolute -bottom-[40px] -translate-x-1/2 left-1/2">
                    <p className="text-center w-[200px] text-white">
                      Make Payment
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="absolute"
                    src="https://i.ibb.co/wgFJR0p/Group.png"
                    alt=""
                  />
                  <div className="p-4">
                    <img
                      className=""
                      src="https://i.ibb.co/mtP992R/Vector.png"
                      alt=""
                    />
                    <div className="h-[50px] w-[50px] rounded-full bg-white  left-[91px] -bottom-[7px] absolute">
                      <HiMiniUserGroup className="absolute text-3xl text-[#FF5017] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white w-[245px] text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                  <div className="absolute -bottom-[40px] -translate-x-1/2 left-1/2">
                    <p className="text-center w-[200px] text-white">
                      Enjoy Property Services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
