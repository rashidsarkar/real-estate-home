import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Categories() {
  return (
    <div className="p-10">
      <div className="flex items-center justify-between mb-5">
        <div className="text-4xl font-semibold text-[#010F58] heading">
          Browse By Categories
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
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <div className="flex gap-5">
          <div className="w-[150px] h-[150px]">
            <img
              src="https://i.ibb.co/mcJVHsV/b062c06a6b8142f73af7df6e4870fb06.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="flex items-center">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#010F58] capitalize">
                appartment
              </h3>
              <p>Lorem ipsum dolor sitam consectetur elit.</p>
              <p className="text-[#010F58]">22 Property</p>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-[150px] h-[150px]">
            <img
              src="https://i.ibb.co/x1nrXc1/ed629a50dae45ff0ac41f4bc578f34f5.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="flex items-center">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#010F58] capitalize">
                Duplex House
              </h3>
              <p>Lorem ipsum dolor sitam consectetur elit.</p>
              <p className="text-[#010F58]">25 Property</p>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-[150px] h-[150px]">
            <img
              src="https://i.ibb.co/yPVnLjS/d63755cb314c35c3eac53ad5f487559a.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="flex items-center">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#010F58] capitalize">
                Office
              </h3>
              <p>Lorem ipsum dolor sitam consectetur elit.</p>
              <p className="text-[#010F58]">30 Property</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
