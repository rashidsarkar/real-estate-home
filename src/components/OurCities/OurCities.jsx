import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function OurCities() {
  return (
    <div>
      <div>
        <div>
          <p className="text-xl text-[#010F58] font-semibold">
            Find Properties
          </p>
          <img src="https://i.ibb.co/Zc5xwVG/Design.png" alt="" />
        </div>
        <div className="flex items-center justify-between mb-5">
          <div className="text-4xl font-bold text-[#000] heading">
            Explore Our Cities
          </div>
          <div className="arrowRight">
            <div className="flex items-center gap-4 mx-auto ml-5 text-5xl bottom-1/2">
              <div className="h-[50px] w-[50px] rounded-full border-red-300 border relative">
                <FaChevronLeft className="absolute text-3xl text-[#FF5017] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              </div>
              {/* <FaRegArrowAltCircleLeft className="ml-6 text-white" /> */}
              <div className="h-[50px] w-[50px] rounded-full bg-[#FF5017] relative">
                <FaChevronRight className="absolute text-3xl text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="shadow-xl card w-96 bg-base-100">
          <figure className="relative">
            <img
              src="https://i.ibb.co/8XD8fHB/948a3b5449480eb9e70c05f6e97d2217.jpg"
              alt="Shoes"
            />
            <button className="btn border-none absolute bg-[#FF5017] hover:bg-[#FF5017] text-white px-8">
              Bangkok
            </button>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#010F58]">Farmhouse For Buy</h2>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className="rating rating-md rating-half">
                  <input
                    type="radio"
                    name="rating-10"
                    className="rating-hidden"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-2"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-2"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-2"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-1"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-2"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-2"
                  />
                </div>
                <p className="text-[#FF5017]  text-xl font-semibold">5</p>
              </div>
              <div className="relative">
                <svg
                  className="w-[90px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="122"
                  height="33"
                  viewBox="0 0 122 33"
                  fill="none"
                >
                  <path
                    d="M122 32.8857L20.1473 32.8858L0.193907 16.8858L20.1473 0.885751L122 0.885742L122 32.8857Z"
                    fill="#FF5017"
                  />
                </svg>
                <p className="absolute z-20 text-white -translate-y-1/2 top-1/2 left-3">
                  800 / Sqft
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-xl card w-96 bg-base-100">
          <figure className="relative">
            <img
              src="https://i.ibb.co/7gkhMWr/48109a9b86cc3ce824ce7c30aa879991.jpg"
              alt="Shoes"
            />
            <button className="btn border-none absolute bg-[#FF5017] hover:bg-[#FF5017] text-white px-8">
              Toronto
            </button>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#010F58]">Farmhouse For Buy</h2>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className="rating rating-md rating-half">
                  <input
                    type="radio"
                    name="rating-10"
                    className="rating-hidden"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-2"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-2"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-2"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-1"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-2"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-2"
                  />
                </div>
                <p className="text-[#FF5017]  text-xl font-semibold">4.5</p>
              </div>
              <div className="relative">
                <svg
                  className="w-[90px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="122"
                  height="33"
                  viewBox="0 0 122 33"
                  fill="none"
                >
                  <path
                    d="M122 32.8857L20.1473 32.8858L0.193907 16.8858L20.1473 0.885751L122 0.885742L122 32.8857Z"
                    fill="#FF5017"
                  />
                </svg>
                <p className="absolute z-20 text-white -translate-y-1/2 top-1/2 left-3">
                  800 / Sqft
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-xl card w-96 bg-base-100">
          <figure className="relative">
            <img
              src="https://i.ibb.co/8r2y1s1/035511cd27c75f5452afd352e610347e.jpg"
              alt="Shoes"
            />
            <button className="btn border-none absolute bg-[#FF5017] hover:bg-[#FF5017] text-white px-8">
              Sudney
            </button>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#010F58]">Farmhouse For Buy</h2>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className="rating rating-md rating-half">
                  <input
                    type="radio"
                    name="rating-10a"
                    className="rating-hidden"
                  />
                  <input
                    type="radio"
                    name="rating-10a"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10a"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-2"
                  />
                  <input
                    type="radio"
                    name="rating-10a"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10a"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-2"
                  />
                  <input
                    type="radio"
                    name="rating-10a"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10a"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-2"
                  />
                  <input
                    type="radio"
                    name="rating-10a"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-1"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-10a"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-2"
                  />
                  <input
                    type="radio"
                    name="rating-10a"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10a"
                    className="bg-[#FF5017] mask mask-star-2 mask-half-2"
                  />
                </div>
                <p className="text-[#FF5017]  text-xl font-semibold">4.5</p>
              </div>
              <div className="relative">
                <svg
                  className="w-[90px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="122"
                  height="33"
                  viewBox="0 0 122 33"
                  fill="none"
                >
                  <path
                    d="M122 32.8857L20.1473 32.8858L0.193907 16.8858L20.1473 0.885751L122 0.885742L122 32.8857Z"
                    fill="#FF5017"
                  />
                </svg>
                <p className="absolute z-20 text-white -translate-y-1/2 top-1/2 left-3">
                  800 / Sqft
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCities;
