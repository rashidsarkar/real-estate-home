import img from "./image/image1.png";
import bg from "./image/bg.png";
import "./image/video.css";
function Video() {
  return (
    <div>
      <div className="relative mx-auto mt-20">
        <img
          className="object-cover w-full h-64 rounded-md"
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
      </div>
    </div>
  );
}

export default Video;
