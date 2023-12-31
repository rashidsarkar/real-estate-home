function FindChoose() {
  return (
    <div>
      <div className="relative flex flex-col lg:flex-row h-[500px] my-44 ">
        <div className="lg:w-1/2">
          <img
            src="https://i.ibb.co/Y0fRvT7/Image-1.png"
            alt=""
            className="h-full"
          />
        </div>
        <div className="space-y-6 lg:w-1/2">
          <div>
            <p className="text-xl text-[#010F58]   font-semibold">
              Find More Choose
            </p>
            <img src="https://i.ibb.co/Zc5xwVG/Design.png" alt="" />
          </div>
          <h3 className="text-4xl font-semibold text-black">
            Why You Choose Our Kavinax Property
          </h3>
          <p>
            Excepteur sint occaecat cupidatat non proident,sunt inculpk qui
            officia deserunt mollit anim id est laborum.sed do eiusmod.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {" "}
                <img
                  src="https://i.ibb.co/3BK6Jmp/Group-1000005957.png"
                  alt=""
                />{" "}
                <p className="text-xl font-semibold">Trusted By Thousands</p>
              </div>
              <p>
                Donec sit amet urna libero Quisque efficitur nulla et odio
                hendrerit{" "}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {" "}
                <img
                  src="https://i.ibb.co/3BK6Jmp/Group-1000005957.png"
                  alt=""
                />{" "}
                <p className="text-xl font-semibold">Private Security</p>
              </div>
              <p>
                Donec sit amet urna libero Quisque efficitur nulla et odio
                hendrerit{" "}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {" "}
                <img
                  src="https://i.ibb.co/3BK6Jmp/Group-1000005957.png"
                  alt=""
                />{" "}
                <p className="text-xl font-semibold">Evaluate Property</p>
              </div>
              <p>
                Donec sit amet urna libero Quisque efficitur nulla et odio
                hendrerit{" "}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {" "}
                <img
                  src="https://i.ibb.co/3BK6Jmp/Group-1000005957.png"
                  alt=""
                />{" "}
                <p className="text-xl font-semibold">Find A Good Side</p>
              </div>
              <p>
                Donec sit amet urna libero Quisque efficitur nulla et odio
                hendrerit{" "}
              </p>
            </div>
          </div>
          <button className="btn btn-active text-white font-semibold bg-[#010F58] hover:bg-[#364075]">
            Explore More <img src="https://i.ibb.co/wsr4W2F/Icon.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FindChoose;
