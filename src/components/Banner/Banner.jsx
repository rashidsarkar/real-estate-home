import bannerImg from "../../assets/banner/banner.png";
import { FaArrowCircleDown, FaSearch } from "react-icons/fa";
import "./banner.css";
function Banner() {
  return (
    <div className="flex flex-col  lg:flex-row h-[650px] relative ">
      <div className="bg-[#010F58] lg:w-[60%] h-full left  text-white flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="textContent w-[500px]">
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
            <label for="input-group-1" className="block mb-2 font-medium ">
              Type
            </label>
            <div className="relative mb-6">
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border w-[210px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Property Type"
              />
              <div className="absolute left-[155px] inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <FaArrowCircleDown className="text-black" />
              </div>
            </div>
          </div>
          <div>
            <label for="input-group-1" className="block mb-2 font-medium ">
              Your Location
            </label>
            <div className="relative mb-6">
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border w-[210px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Location"
              />
              <div className="absolute left-[155px] inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <FaArrowCircleDown className="text-black" />
              </div>
            </div>
          </div>
          <div>
            <label for="input-group-1" className="block mb-2 font-medium ">
              Bed/Bathrooms
            </label>
            <div className="relative mb-6">
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border w-[210px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Bed/Bathrooms"
              />
              <div className="absolute left-[155px] inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <FaArrowCircleDown className="text-black" />
              </div>
            </div>
          </div>
          <div>
            <label for="input-group-1" className="block mb-2 font-medium ">
              Price
            </label>
            <div className="relative mb-6">
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border w-[210px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Price"
              />
              <div className="absolute left-[155px] inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <FaArrowCircleDown className="text-black" />
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex items-center top-[30px] mb-6">
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 overflow-hidden border w-[210px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
              />
              <div className="absolute bg-blue-600 justify-center rounded    left-[155px] inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <FaSearch className="mr-[25px] rounded text-center text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
