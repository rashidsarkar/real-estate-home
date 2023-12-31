import { FaBed, FaHeart, FaRegHeart } from "react-icons/fa";

function OurProperty() {
  return (
    <div>
      <div className="space-y-2 text-center">
        <div>
          <p className="text-xl text-[#010F58]   font-semibold">Our Property</p>
          <img
            src="https://i.ibb.co/Zc5xwVG/Design.png"
            className="mx-auto"
            alt=""
          />
        </div>
        <h3 className="text-4xl font-semibold text-black">
          Why You Choose Our Kavinax Property
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-4 my-9">
        <div className="shadow-xl card w-96 bg-base-100">
          <figure className="relative px-10 pt-10">
            <img
              src="https://i.ibb.co/0JXk9QT/Image.png"
              alt="Shoes"
              className="rounded-xl"
            />
            <div className="absolute flex justify-between w-[79%] top-[85px] ">
              <div className="relative ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="98"
                  height="33"
                  viewBox="0 0 98 33"
                  fill="none"
                  className="-z-3" // Remove this class or adjust its value
                >
                  <p className="z-20 text-white bg-red-400">For Rent</p>
                  <path
                    d="M0.669312 0.0395508H81.4981L97.3328 16.0396L81.4981 32.0396H0.669312V0.0395508Z"
                    fill="#010F58"
                  />
                </svg>
                <p className="absolute z-20 text-white -translate-y-1/2 top-1/2 left-3">
                  For Sell
                </p>
              </div>
              <div className="h-[30px] w-[30px] rounded-full bg-[#010F58]  relative">
                <FaHeart className="absolute text-xl text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              </div>
            </div>
          </figure>
          <div className=" card-body">
            <h2 className="text-left card-title text-[#FF5017]">
              Ready Resort for Sell
              <span className="px-4 bg-[#FF5017] text-white text-base">
                2,525.00$
              </span>
            </h2>
            <p>
              Duis aute irure dolor in reprehenderit into volupjl tate velit
              esse cillum dolore eu fugiat.
            </p>
            <hr />
            <div className="flex justify-between">
              <div className="flex items-center gap-2 ">
                {" "}
                <img src="https://i.ibb.co/5vsLPxt/Icon.jpg" alt="" />{" "}
                <p>Beds : Na</p>
              </div>
              <div className="flex items-center gap-2 ">
                {" "}
                <img src="https://i.ibb.co/jWfXbQp/Icon-2.png" alt="" />{" "}
                <p>Baths : 2</p>
              </div>
              <div className="flex items-center gap-2 ">
                {" "}
                <img
                  src="https://i.ibb.co/4P63z5J/Component-1.png"
                  alt=""
                />{" "}
                <p>Parking : 1</p>
              </div>
            </div>
            <hr />
            <div className=" card-actions">
              <p className="text-[#FF5017] font-medium text-lg cursor-pointer">
                View Details
              </p>
              <img
                src="https://i.ibb.co/mymYK3H/Arrows-Icon.png"
                className="cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="shadow-xl card w-96 bg-base-100">
          <figure className="relative px-10 pt-10">
            <img
              src="https://i.ibb.co/Zz3Zm7L/Image-1.png"
              alt="Shoes"
              className="rounded-xl"
            />
            <div className="absolute flex justify-between w-[79%] top-[85px] ">
              <div className="relative ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="98"
                  height="33"
                  viewBox="0 0 98 33"
                  fill="none"
                  className="-z-3" // Remove this class or adjust its value
                >
                  <p className="z-20 text-white bg-red-400">For Rent</p>
                  <path
                    d="M0.669312 0.0395508H81.4981L97.3328 16.0396L81.4981 32.0396H0.669312V0.0395508Z"
                    fill="#010F58"
                  />
                </svg>
                <p className="absolute z-20 text-white -translate-y-1/2 top-1/2 left-3">
                  For Sell
                </p>
              </div>
              <div className="h-[30px] w-[30px] rounded-full bg-[#010F58]  relative">
                <FaHeart className="absolute text-xl text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              </div>
            </div>
          </figure>
          <div className=" card-body">
            <h2 className="text-left card-title text-[#FF5017]">
              Office Space
              <span className="px-4 bg-[#FF5017] text-white text-base">
                2,525.00$
              </span>
            </h2>
            <p>
              Duis aute irure dolor in reprehenderit into volupjl tate velit
              esse cillum dolore eu fugiat.
            </p>
            <hr />
            <div className="flex justify-between">
              <div className="flex items-center gap-2 ">
                {" "}
                <img src="https://i.ibb.co/5vsLPxt/Icon.jpg" alt="" />{" "}
                <p>Beds : Na</p>
              </div>
              <div className="flex items-center gap-2 ">
                {" "}
                <img src="https://i.ibb.co/jWfXbQp/Icon-2.png" alt="" />{" "}
                <p>Baths : 2</p>
              </div>
              <div className="flex items-center gap-2 ">
                {" "}
                <img
                  src="https://i.ibb.co/4P63z5J/Component-1.png"
                  alt=""
                />{" "}
                <p>Parking : 1</p>
              </div>
            </div>
            <hr />
            <div className=" card-actions">
              <p className="text-[#FF5017] font-medium text-lg cursor-pointer">
                View Details
              </p>
              <img
                src="https://i.ibb.co/mymYK3H/Arrows-Icon.png"
                className="cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="shadow-xl card w-96 bg-base-100">
          <figure className="relative px-10 pt-10">
            <img
              src="https://i.ibb.co/ZfLY5G9/Image-2.png"
              alt="Shoes"
              className="rounded-xl"
            />
            <div className="absolute flex justify-between w-[79%] top-[85px] ">
              <div className="relative ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="98"
                  height="33"
                  viewBox="0 0 98 33"
                  fill="none"
                  className="-z-3" // Remove this class or adjust its value
                >
                  <p className="z-20 text-white bg-red-400">For Rent</p>
                  <path
                    d="M0.669312 0.0395508H81.4981L97.3328 16.0396L81.4981 32.0396H0.669312V0.0395508Z"
                    fill="#010F58"
                  />
                </svg>
                <p className="absolute z-20 text-white -translate-y-1/2 top-1/2 left-3">
                  For Sell
                </p>
              </div>
              <div className="h-[30px] w-[30px] rounded-full bg-[#010F58]  relative">
                <FaHeart className="absolute text-xl text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              </div>
            </div>
          </figure>
          <div className=" card-body">
            <h2 className="text-left card-title text-[#FF5017]">
              Luxury Condo
              <span className="px-4 bg-[#FF5017] text-white text-base">
                2,525.00$
              </span>
            </h2>
            <p>
              Duis aute irure dolor in reprehenderit into volupjl tate velit
              esse cillum dolore eu fugiat.
            </p>
            <hr />
            <div className="flex justify-between">
              <div className="flex items-center gap-2 ">
                {" "}
                <img src="https://i.ibb.co/5vsLPxt/Icon.jpg" alt="" />{" "}
                <p>Beds : Na</p>
              </div>
              <div className="flex items-center gap-2 ">
                {" "}
                <img src="https://i.ibb.co/jWfXbQp/Icon-2.png" alt="" />{" "}
                <p>Baths : 2</p>
              </div>
              <div className="flex items-center gap-2 ">
                {" "}
                <img
                  src="https://i.ibb.co/4P63z5J/Component-1.png"
                  alt=""
                />{" "}
                <p>Parking : 1</p>
              </div>
            </div>
            <hr />
            <div className=" card-actions">
              <p className="text-[#FF5017] font-medium text-lg cursor-pointer">
                View Details
              </p>
              <img
                src="https://i.ibb.co/mymYK3H/Arrows-Icon.png"
                className="cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="shadow-xl card w-96 bg-base-100">
          <figure className="relative px-10 pt-10">
            <img
              src="https://i.ibb.co/jhzJhQ6/Image-3.png"
              alt="Shoes"
              className="rounded-xl"
            />
            <div className="absolute flex justify-between w-[79%] top-[85px] ">
              <div className="relative ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="98"
                  height="33"
                  viewBox="0 0 98 33"
                  fill="none"
                  className="-z-3" // Remove this class or adjust its value
                >
                  <p className="z-20 text-white bg-red-400">For Rent</p>
                  <path
                    d="M0.669312 0.0395508H81.4981L97.3328 16.0396L81.4981 32.0396H0.669312V0.0395508Z"
                    fill="#010F58"
                  />
                </svg>
                <p className="absolute z-20 text-white -translate-y-1/2 top-1/2 left-3">
                  For Sell
                </p>
              </div>
              <div className="h-[30px] w-[30px] rounded-full bg-[#010F58]  relative">
                <FaHeart className="absolute text-xl text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              </div>
            </div>
          </figure>
          <div className=" card-body">
            <h2 className="text-left card-title text-[#FF5017]">
              Modern Villa
              <span className="px-4 bg-[#FF5017] text-white text-base">
                2,525.00$
              </span>
            </h2>
            <p>
              Duis aute irure dolor in reprehenderit into volupjl tate velit
              esse cillum dolore eu fugiat.
            </p>
            <hr />
            <div className="flex justify-between">
              <div className="flex items-center gap-2 ">
                {" "}
                <img src="https://i.ibb.co/5vsLPxt/Icon.jpg" alt="" />{" "}
                <p>Beds : Na</p>
              </div>
              <div className="flex items-center gap-2 ">
                {" "}
                <img src="https://i.ibb.co/jWfXbQp/Icon-2.png" alt="" />{" "}
                <p>Baths : 2</p>
              </div>
              <div className="flex items-center gap-2 ">
                {" "}
                <img
                  src="https://i.ibb.co/4P63z5J/Component-1.png"
                  alt=""
                />{" "}
                <p>Parking : 1</p>
              </div>
            </div>
            <hr />
            <div className=" card-actions">
              <p className="text-[#FF5017] font-medium text-lg cursor-pointer">
                View Details
              </p>
              <img
                src="https://i.ibb.co/mymYK3H/Arrows-Icon.png"
                className="cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="shadow-xl card w-96 bg-base-100">
          <figure className="relative px-10 pt-10">
            <img
              src="https://i.ibb.co/4RQKhmC/Image-4.png"
              alt="Shoes"
              className="rounded-xl"
            />
            <div className="absolute flex justify-between w-[79%] top-[85px] ">
              <div className="relative ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="98"
                  height="33"
                  viewBox="0 0 98 33"
                  fill="none"
                  className="-z-3" // Remove this class or adjust its value
                >
                  <p className="z-20 text-white bg-red-400">For Rent</p>
                  <path
                    d="M0.669312 0.0395508H81.4981L97.3328 16.0396L81.4981 32.0396H0.669312V0.0395508Z"
                    fill="#010F58"
                  />
                </svg>
                <p className="absolute z-20 text-white -translate-y-1/2 top-1/2 left-3">
                  For Sell
                </p>
              </div>
              <div className="h-[30px] w-[30px] rounded-full bg-[#010F58]  relative">
                <FaHeart className="absolute text-xl text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              </div>
            </div>
          </figure>
          <div className=" card-body">
            <h2 className="text-left card-title text-[#FF5017]">
              Luxury Condo
              <span className="px-4 bg-[#FF5017] text-white text-base">
                2,525.00$
              </span>
            </h2>
            <p>
              Duis aute irure dolor in reprehenderit into volupjl tate velit
              esse cillum dolore eu fugiat.
            </p>
            <hr />
            <div className="flex justify-between">
              <div className="flex items-center gap-2 ">
                {" "}
                <img src="https://i.ibb.co/5vsLPxt/Icon.jpg" alt="" />{" "}
                <p>Beds : Na</p>
              </div>
              <div className="flex items-center gap-2 ">
                {" "}
                <img src="https://i.ibb.co/jWfXbQp/Icon-2.png" alt="" />{" "}
                <p>Baths : 2</p>
              </div>
              <div className="flex items-center gap-2 ">
                {" "}
                <img
                  src="https://i.ibb.co/4P63z5J/Component-1.png"
                  alt=""
                />{" "}
                <p>Parking : 1</p>
              </div>
            </div>
            <hr />
            <div className=" card-actions">
              <p className="text-[#FF5017] font-medium text-lg cursor-pointer">
                View Details
              </p>
              <img
                src="https://i.ibb.co/mymYK3H/Arrows-Icon.png"
                className="cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="shadow-xl card w-96 bg-base-100">
          <figure className="relative px-10 pt-10">
            <img
              src="https://i.ibb.co/NV5gxdM/a372874e46cf3a6350d6e4c5beeb4ae0.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
            <div className="absolute flex justify-between w-[79%] top-[85px] ">
              <div className="relative ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="98"
                  height="33"
                  viewBox="0 0 98 33"
                  fill="none"
                  className="-z-3" // Remove this class or adjust its value
                >
                  <p className="z-20 text-white bg-red-400">For Rent</p>
                  <path
                    d="M0.669312 0.0395508H81.4981L97.3328 16.0396L81.4981 32.0396H0.669312V0.0395508Z"
                    fill="#010F58"
                  />
                </svg>
                <p className="absolute z-20 text-white -translate-y-1/2 top-1/2 left-3">
                  For Sell
                </p>
              </div>
              <div className="h-[30px] w-[30px] rounded-full bg-[#010F58]  relative">
                <FaHeart className="absolute text-xl text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              </div>
            </div>
          </figure>
          <div className=" card-body">
            <h2 className="text-left card-title text-[#FF5017]">
              Office Space
              <span className="px-4 bg-[#FF5017] text-white text-base">
                2,525.00$
              </span>
            </h2>
            <p>
              Duis aute irure dolor in reprehenderit into volupjl tate velit
              esse cillum dolore eu fugiat.
            </p>
            <hr />
            <div className="flex justify-between">
              <div className="flex items-center gap-2 ">
                {" "}
                <img src="https://i.ibb.co/5vsLPxt/Icon.jpg" alt="" />{" "}
                <p>Beds : Na</p>
              </div>
              <div className="flex items-center gap-2 ">
                {" "}
                <img src="https://i.ibb.co/jWfXbQp/Icon-2.png" alt="" />{" "}
                <p>Baths : 2</p>
              </div>
              <div className="flex items-center gap-2 ">
                {" "}
                <img
                  src="https://i.ibb.co/4P63z5J/Component-1.png"
                  alt=""
                />{" "}
                <p>Parking : 1</p>
              </div>
            </div>
            <hr />
            <div className=" card-actions">
              <p className="text-[#FF5017] font-medium text-lg cursor-pointer">
                View Details
              </p>
              <img
                src="https://i.ibb.co/mymYK3H/Arrows-Icon.png"
                className="cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <button className="btn text-center mx-auto btn-active flex text-white font-semibold bg-[#010F58] hover:bg-[#364075]">
        View All Property <img src="https://i.ibb.co/wsr4W2F/Icon.png" alt="" />
      </button>
    </div>
  );
}

export default OurProperty;
