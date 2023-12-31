import { TiTick } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
function About() {
  return (
    <div>
      <div className="relative flex flex-col lg:flex-row h-[600px] ">
        <div className="lg:w-1/2">
          <img
            src="https://i.ibb.co/YkZbJZr/Image.png"
            alt=""
            className="h-full"
          />
        </div>
        <div className="space-y-6 lg:w-1/2">
          <div>
            <p className="text-xl text-[#010F58] font-semibold">About Us</p>
            <img src="https://i.ibb.co/Zc5xwVG/Design.png" alt="" />
          </div>
          <h3 className="text-4xl font-semibold text-black">
            We Specialize In Quality Home Renovations
          </h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div>
            <ul className="space-y-3">
              <li className="flex items-center gap-4">
                <div className="h-[30px] w-[30px] rounded-xl  bg-[#010F58]  p-3 relative">
                  <TiTick className="absolute text-xl text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                </div>
                <p className="text-xl font-semibold">Outstanding property</p>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-[30px] w-[30px] rounded-xl  bg-[#010F58]  p-3 relative">
                  <TiTick className="absolute text-xl text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                </div>
                <p className="text-xl font-semibold">
                  Provide the best services for users
                </p>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-[30px] w-[30px] rounded-xl  bg-[#010F58]  p-3 relative">
                  <TiTick className="absolute text-xl text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                </div>
                <p className="text-xl font-semibold">
                  Modern city location & ecceptional lifestyle
                </p>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-[30px] w-[30px] rounded-xl  bg-[#010F58]  p-3 relative">
                  <TiTick className="absolute text-xl text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                </div>
                <p className="text-xl font-semibold">
                  Professional & experienced human resources
                </p>
              </li>
            </ul>
          </div>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit sed quia consequuntur magni dolores eos qui ratione voluptatem
            sequi nesciunt.
          </p>
          <div>
            <div className="flex items-center gap-5 ">
              <button className="btn btn-active text-white font-semibold bg-[#010F58] hover:bg-[#364075]">
                Explore More{" "}
                <img src="https://i.ibb.co/wsr4W2F/Icon.png" alt="" />
              </button>
              <div>
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src="https://i.ibb.co/GTFTyTK/88dcfdb640ce0abb41cf0ec80c43181b.jpg"
                  alt=""
                />
              </div>
              <div className="text-xl font-semibold">
                <p>
                  <span className="text-[#FF5017]">David Smith</span> ( CEO Of
                  Kavinax Property )
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-[50px] w-[50px] rounded-xl  bg-[#FF5017]  p-3 relative">
                    <IoCall className="absolute text-2xl text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                  </div>
                  <p>
                    Call For Booking Appointment
                    <br />
                    Date :{" "}
                    <span className="text-[#FF5017]"> +435 6789 4321</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
