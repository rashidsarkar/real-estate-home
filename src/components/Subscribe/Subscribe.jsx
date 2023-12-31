import { FaFacebookF } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import "./subscribe.css";
function Subscribe() {
  return (
    <div className="my-10">
      <div className="relative mx-auto h-[450px] mt-20">
        <img
          className="object-cover w-full h-full rounded-md"
          src="https://i.ibb.co/7bWqJD6/53176c70acf7fcad4a1ceca80e7275a9.png"
          alt="Random image"
        />
        <div className="absolute inset-0 rounded-md overLayBga "></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <div>
              <h2 className="py-4 text-3xl font-bold text-center text-white">
                Subscribe For Newsletter
              </h2>
              <p className="text-center text-white">
                Be the first one to know about discounts, offers and events.{" "}
                <br />
                Unsubscribe whenever you like.
              </p>
              <div>
                <div className="md:flex">
                  <div className="w-full p-3">
                    <div className="relative">
                      {" "}
                      <input
                        type="text"
                        className="w-full px-4 pr-20 bg-white rounded-md h-14 focus:outline-none hover:cursor-pointer"
                        name=""
                        placeholder="Enter your email"
                      />
                      <button className="absolute h-10 px-3 text-sm text-white bg-[#FF5017] rounded top-2 right-2 hover:bg-[#FF5017] ">
                        Subscribe Now
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4"></div>
          </div>
        </div>
        <div className="h-[50px] w-[50px] rounded-full absolute top-0 SubscribeIcon  bg-[#010F58] ">
          <IoMdMail className="absolute text-3xl text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
