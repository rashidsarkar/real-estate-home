import img from "./image/image1.png";
import bg from "./image/bg.png";
import "./image/video.css";
function Video() {
  return (
    <div className="my-5">
      <div className="relative mx-auto h-[500px] mt-20">
        <img
          className="object-cover w-full h-full rounded-md"
          src="https://i.ibb.co/VSR37Pq/image1.png"
          alt="Random image"
        />
        <div className="absolute inset-0 rounded-md overLayBg "></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <img
              className="h-[50px] w-[50px] mx-auto"
              src="https://i.ibb.co/nmnPC44/Play.png"
              alt=""
            />
            <h2 className="text-3xl font-bold text-white">
              Watch Our Video Tutorial
            </h2>
          </div>
        </div>
        <div className="bg-white absolute shadow w-[70%] -bottom-[69px] left-1/2 -translate-x-1/2  mx-auto rounded ">
          <div className="grid grid-cols-4 p-7 ">
            <div className="relative flex items-center justify-center w-full mx-auto ">
              <img
                className="object-cover h-[150px] rounded-md"
                src="https://i.ibb.co/VWbtdCD/Group.png"
                alt="Random image"
              />
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] left-1/2 h-[100px] rounded-full border flex justify-center items-center border-blue-600    bottom-0 text-xl font-semibold text-[#FF5017]">
                <div className="w-[90px] absolute h-[90px] rounded-full border  flex items-center justify-center  border-blue-600">
                  <p className="text-[#FF5017]">98700 +</p>
                </div>
              </div>
              <p className="absolute bottom-[-26px] text-[#010F58]  font-bold text-xl">
                Properties Listed
              </p>
            </div>
            <div className="relative flex items-center justify-center w-full mx-auto ">
              <img
                className="object-cover h-[150px] rounded-md"
                src="https://i.ibb.co/VWbtdCD/Group.png"
                alt="Random image"
              />
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] left-1/2 h-[100px] rounded-full border flex justify-center items-center border-blue-600    bottom-0 text-xl font-semibold text-[#FF5017]">
                <div className="w-[90px] absolute h-[90px] rounded-full border  flex items-center justify-center  border-blue-600">
                  <p>48751 +</p>
                </div>
              </div>
              <p className="absolute bottom-[-26px] text-[#010F58] font-bold text-xl">
                Properties Sold
              </p>
            </div>
            <div className="relative flex items-center justify-center w-full mx-auto ">
              <img
                className="object-cover h-[150px] rounded-md"
                src="https://i.ibb.co/VWbtdCD/Group.png"
                alt="Random image"
              />
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] left-1/2 h-[100px] rounded-full border flex justify-center items-center border-blue-600    bottom-0 text-xl font-semibold text-[#FF5017]">
                <div className="w-[90px] absolute h-[90px] rounded-full border  flex items-center justify-center  border-blue-600">
                  <p>67845 +</p>
                </div>
              </div>
              <p className="absolute bottom-[-26px] text-[#010F58] font-bold text-xl">
                Satisfied Clients
              </p>
            </div>
            <div className="relative flex items-center justify-center w-full mx-auto ">
              <img
                className="object-cover h-[150px] rounded-md"
                src="https://i.ibb.co/VWbtdCD/Group.png"
                alt="Random image"
              />
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] left-1/2 h-[100px] rounded-full border flex justify-center items-center border-blue-600    bottom-0 text-xl font-semibold text-[#FF5017]">
                <div className="w-[90px] absolute h-[90px] rounded-full border  flex items-center justify-center  border-blue-600">
                  <p>10 +</p>
                </div>
              </div>
              <p className="absolute bottom-[-26px] text-[#010F58] font-bold text-xl">
                Realtor Awards
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-gray-200 w-[70%]  mx-auto rounded ">
        <div className="grid grid-cols-4 p-7 ">
          <div className="relative flex items-center justify-center w-full mx-auto ">
            <img
              className="object-cover h-[150px] rounded-md"
              src="https://i.ibb.co/VWbtdCD/Group.png"
              alt="Random image"
            />
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] left-1/2 h-[100px] rounded-full border flex justify-center items-center border-blue-600    bottom-0 text-xl font-semibold text-[#FF5017]">
              <div className="w-[90px] absolute h-[90px] rounded-full border  flex items-center justify-center  border-blue-600">
                <p>98700 +</p>
              </div>
            </div>
            <p className="absolute bottom-[-26px] text-[010F58] font-medium text-xl">
              Properties Listed
            </p>
          </div>
          <div className="relative flex items-center justify-center w-full mx-auto ">
            <img
              className="object-cover h-[150px] rounded-md"
              src="https://i.ibb.co/VWbtdCD/Group.png"
              alt="Random image"
            />
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] left-1/2 h-[100px] rounded-full border flex justify-center items-center border-blue-600    bottom-0 text-xl font-semibold text-[#FF5017]">
              <div className="w-[90px] absolute h-[90px] rounded-full border  flex items-center justify-center  border-blue-600">
                <p>48751 +</p>
              </div>
            </div>
            <p className="absolute bottom-[-26px] text-[010F58] font-medium text-xl">
              Properties Sold
            </p>
          </div>
          <div className="relative flex items-center justify-center w-full mx-auto ">
            <img
              className="object-cover h-[150px] rounded-md"
              src="https://i.ibb.co/VWbtdCD/Group.png"
              alt="Random image"
            />
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] left-1/2 h-[100px] rounded-full border flex justify-center items-center border-blue-600    bottom-0 text-xl font-semibold text-[#FF5017]">
              <div className="w-[90px] absolute h-[90px] rounded-full border  flex items-center justify-center  border-blue-600">
                <p>67845 +</p>
              </div>
            </div>
            <p className="absolute bottom-[-26px] text-[010F58] font-medium text-xl">
              Satisfied Clients
            </p>
          </div>
          <div className="relative flex items-center justify-center w-full mx-auto ">
            <img
              className="object-cover h-[150px] rounded-md"
              src="https://i.ibb.co/VWbtdCD/Group.png"
              alt="Random image"
            />
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] left-1/2 h-[100px] rounded-full border flex justify-center items-center border-blue-600    bottom-0 text-xl font-semibold text-[#FF5017]">
              <div className="w-[90px] absolute h-[90px] rounded-full border  flex items-center justify-center  border-blue-600">
                <p>10 +</p>
              </div>
            </div>
            <p className="absolute bottom-[-26px] text-[010F58] font-medium text-xl">
              Realtor Awards
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Video;
