import bannerImg from "../../assets/banner/banner.png";
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
          </div>
        </div>
      </div>
      <div className="lg: right">
        <img src={bannerImg} className="w-[753px] h-full bannerImg " alt="" />
      </div>
    </div>
  );
}

export default Banner;
