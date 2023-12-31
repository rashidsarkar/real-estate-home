import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Services() {
  return (
    <div className="my-4">
      <div>
        <div>
          <p className="text-xl text-[#010F58] font-semibold">Our Services</p>
          <img src="https://i.ibb.co/Zc5xwVG/Design.png" alt="" />
        </div>
        <div className="flex items-center justify-between mb-5">
          <div className="text-4xl font-bold text-[#000] heading">
            Our Main Focus
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
      <div className="grid lg:grid-cols-3">
        <div className="shadow-xl card lg:w-96 bg-base-100">
          <figure>
            <img
              src="https://i.ibb.co/d5Q2DGj/0ecc7350954d1149e6e4b198a3571eb0.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="text-center card-body">
            <h2 className="text-center font-bold card-title text-[#010F58]  flex justify-center">
              <img src="https://i.ibb.co/7C8LKHJ/Icon-1.png" alt="" />
              Buy a property
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisin cing elit sed do
              eiusmod tempor incididunt utlrul labore et dolore magna aliqua.{" "}
            </p>
            <div className="justify-center card-actions">
              <button className="btn btn-outline  text-[#FF5017]">
                Find a home
              </button>
            </div>
          </div>
        </div>
        <div className="shadow-xl card lg:w-96 bg-base-100">
          <figure>
            <img
              src="https://i.ibb.co/ZH76bC5/4c64836b31467df5ea535c1eae16b78b.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="text-center card-body">
            <h2 className="text-center font-bold card-title text-[#010F58]  flex justify-center">
              <img src="https://i.ibb.co/7C8LKHJ/Icon-1.png" alt="" />
              Sell A Property
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisin cing elit sed do
              eiusmod tempor incididunt utlrul labore et dolore magna aliqua.{" "}
            </p>
            <div className="justify-center card-actions">
              <button className="btn btn-outline  text-[#FF5017]">
                Find a home
              </button>
            </div>
          </div>
        </div>
        <div className="shadow-xl card lg:w-96 bg-base-100">
          <figure>
            <img
              src="https://i.ibb.co/vPSp4W6/08f9c4a82c72b0de097a97c63d94115d.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="text-center card-body">
            <h2 className="text-center font-bold card-title text-[#010F58]  flex justify-center">
              <img src="https://i.ibb.co/7C8LKHJ/Icon-1.png" alt="" />
              Rent A Property
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisin cing elit sed do
              eiusmod tempor incididunt utlrul labore et dolore magna aliqua.{" "}
            </p>
            <div className="justify-center card-actions">
              <button className="btn btn-outline  text-[#FF5017]">
                Find a home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
