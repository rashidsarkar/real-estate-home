import bannerImg from "../../assets/banner/banner.png";
import {
  FaArrowCircleDown,
  FaSearch,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import "./banner.css";
function Banner() {
  return (
    <div className="flex flex-col  lg:flex-row h-[650px] relative ">
      <div className="bg-[#010F58] lg:w-[60%] h-full left  text-white flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="textContent w-[500px] space-y-4">
            <h2 className="text-3xl font-bold ">
              Discover Most <br className="hidden lg:block" /> Suitable Property
            </h2>
            <p className="">
              Discover the perfect living space with Provident Apartments. We
              provide a selection of thoughtfully designed rentals, ensuring
              comfort and convenience.
            </p>
            <div className="">
              <div className="topTab bg-[#FF5017] w-[250px] space-x-4 py-3 px-3">
                <button className="active">Sell</button>
                <button className="active bg-white text-[#FF5017] rounded p-2">
                  Rent
                </button>
                <button className="active">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg: right">
        <img src={bannerImg} className="w-[753px] h-full bannerImg " alt="" />
      </div>
      <div className="absolute text-white rounded bannerInput">
        <div className="bottomTab  flex gap-3  mt-4 bg-[#FF5017] p-4 z-40 ">
          <div>
            <div className="group w-72 md:w-80 lg:w-40 ">
              <label className="inline-block w-full mb-2 font-medium transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                Type
              </label>
              <div className="relative flex items-center">
                <input
                  id="5"
                  placeholder="Property Type"
                  type="text"
                  className="relative w-full h-10 pl-4 pr-10 font-thin text-gray-700 transition-all duration-200 ease-in-out rounded-md outline-none peer bg-gray-50 drop-shadow-sm focus:bg-white focus:ring-2 focus:ring-black focus:drop-shadow-lg"
                />
                <span className="absolute transition-all duration-200 ease-in-out material-symbols-outlined right-2 group-focus-within:text-black">
                  <FaArrowCircleDown className="text-black" />
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="w-40 group ">
              <label className="inline-block w-full mb-2 font-medium transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                Your Location
              </label>
              <div className="relative flex items-center">
                <input
                  id="5"
                  placeholder="Your Location"
                  type="text"
                  className="relative w-full h-10 pl-4 pr-10 font-thin text-gray-700 transition-all duration-200 ease-in-out rounded-md outline-none peer bg-gray-50 drop-shadow-sm focus:bg-white focus:ring-2 focus:ring-black focus:drop-shadow-lg"
                />
                <span className="absolute transition-all duration-200 ease-in-out material-symbols-outlined right-2 group-focus-within:text-black">
                  <FaArrowCircleDown className="text-black" />
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="w-40 group ">
              <label className="inline-block w-full mb-2 font-medium transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                Bed/Bathrooms
              </label>
              <div className="relative flex items-center">
                <input
                  id="5"
                  placeholder="00 Bed / 00 Bathrooms"
                  type="text"
                  className="relative w-full h-10 pl-4 pr-10 font-thin text-gray-700 transition-all duration-200 ease-in-out rounded-md outline-none peer bg-gray-50 drop-shadow-sm focus:bg-white focus:ring-2 focus:ring-black focus:drop-shadow-lg"
                />
                <span className="absolute transition-all duration-200 ease-in-out material-symbols-outlined right-2 group-focus-within:text-black">
                  <FaArrowCircleDown className="text-black" />
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="w-40 group ">
              <label className="inline-block w-full mb-2 font-medium transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                Price
              </label>
              <div className="relative flex items-center">
                <input
                  id="5"
                  placeholder="Price"
                  type="text"
                  className="relative w-full h-10 pl-4 pr-10 font-thin text-gray-700 transition-all duration-200 ease-in-out rounded-md outline-none peer bg-gray-50 drop-shadow-sm focus:bg-white focus:ring-2 focus:ring-black focus:drop-shadow-lg"
                />
                <span className="absolute transition-all duration-200 ease-in-out material-symbols-outlined right-2 group-focus-within:text-black">
                  <FaArrowCircleDown className="text-black" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-end">
            <div className="w-40 group">
              <div className="relative flex items-center">
                <input
                  id="8"
                  type="text"
                  className="relative w-full h-10 pl-4 pr-20 font-thin text-gray-700 transition-all duration-200 ease-in-out rounded-md outline-none peer bg-gray-50 drop-shadow-sm focus:bg-white focus:drop-shadow-lg"
                  placeholder="Search"
                />
                <button className="absolute right-0 flex items-center justify-center w-16 h-10 text-xs font-semibold text-white transition-all duration-200 ease-in-out bg-blue-600 rounded-r-md group-focus-within:bg-b group-focus-within:hover:bg-blue-600">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-between w-full mx-auto ml-5 text-5xl translate-y-1/2 bottom-1/2">
        <div className="h-[50px] w-[50px] rounded-full border-red-300 border relative">
          <FaChevronLeft className="absolute text-3xl text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
        </div>
        {/* <FaRegArrowAltCircleLeft className="ml-6 text-white" /> */}
        <div className="h-[50px] w-[50px] rounded-full bg-[#FF5017] mr-[50px] relative">
          <FaChevronRight className="absolute text-3xl text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
