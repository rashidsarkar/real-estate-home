import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function Blog() {
  return (
    <div className="my-8">
      <div>
        <div>
          <p className="text-xl text-[#010F58] font-semibold">Blog & News</p>
          <img src="https://i.ibb.co/Zc5xwVG/Design.png" alt="" />
        </div>
        <div className="flex items-center justify-between mb-5">
          <div className="text-4xl font-bold text-[#000] heading">
            Our Latest Blog & News
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
        <div className="shadow-xl card w-96 bg-base-200">
          <figure>
            <img
              src="https://i.ibb.co/mG9rNnV/7d9ec0baf8bbe16c2d564388db2270b3.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between gap-1">
                <img src="https://i.ibb.co/MP40Yrc/Icon-3.png" alt="" />
                <p>05 Dec 2022</p>
              </div>
              <div className="flex items-center justify-between gap-1">
                <img src="https://i.ibb.co/ncsxkNM/Vector.png" alt="" />
                <p>1000</p>
              </div>
              <div className="flex items-center justify-between gap-1">
                <img src="https://i.ibb.co/1MDMj49/Icon-4.png" alt="" />
                <p>12 Comments</p>
              </div>
            </div>

            <h2 className="card-title text-[#FF5017] underline">
              7 home trends that will shape your house
            </h2>
            <p>
              Duis aute irure dolor in reprehenderit into volupjl tate velit
              esse cillum dolore eu fugiat nulla partr iatur sunt in culp qui
              officia deserunt mollit
            </p>
            <hr />
            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://i.ibb.co/wBNxrS8/33fe647a46f9bf668322f8c1d94ed937.png"
                      alt="Tailwind-CSS-Avatar-component"
                    />
                  </div>
                </div>
                <p>David Smith</p>
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.7981 0.982422C11.9336 0.982422 15.2981 4.34692 15.2981 8.48242C15.2981 12.6179 11.9336 15.9824 7.7981 15.9824C3.6626 15.9824 0.298096 12.6179 0.298096 8.48242C0.298096 4.34692 3.6626 0.982422 7.7981 0.982422ZM7.7981 2.10742C4.28285 2.10742 1.4231 4.96717 1.4231 8.48242C1.4231 11.9977 4.28285 14.8574 7.7981 14.8574C11.3133 14.8574 14.1731 11.9977 14.1731 8.48242C14.1731 4.96717 11.3133 2.10742 7.7981 2.10742ZM7.544 4.80397C7.85525 4.80397 8.1065 5.05597 8.1065 5.36647V8.68297L10.6602 10.2055C10.9265 10.3652 11.0142 10.7102 10.8552 10.9772C10.7495 11.1535 10.5627 11.2517 10.3715 11.2517C10.2732 11.2517 10.1742 11.2262 10.0835 11.173L7.256 9.48622C7.0865 9.38422 6.9815 9.20047 6.9815 9.00247V5.36647C6.9815 5.05597 7.2335 4.80397 7.544 4.80397Z"
                      fill="black"
                      fill-opacity="0.75"
                    />
                  </svg>
                </span>
                <p>2 minutes ago</p>
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <p className="text-[#FF5017]">Read More</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <circle cx="11.8559" cy="11.5304" r="11.049" fill="#FF5017" />
                  <path
                    d="M12.6595 7.13258C12.6595 6.69032 12.3005 6.33301 11.8562 6.33301C11.4119 6.33301 11.0529 6.69032 11.0529 7.13258V10.7307H7.43827C6.99397 10.7307 6.63501 11.088 6.63501 11.5303C6.63501 11.9725 6.99397 12.3298 7.43827 12.3298H11.0529V15.9279C11.0529 16.3702 11.4119 16.7275 11.8562 16.7275C12.3005 16.7275 12.6595 16.3702 12.6595 15.9279V12.3298H16.2741C16.7185 12.3298 17.0774 11.9725 17.0774 11.5303C17.0774 11.088 16.7185 10.7307 16.2741 10.7307H12.6595V7.13258Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="shadow-xl card w-96 bg-base-200">
          <figure>
            <img
              src="https://i.ibb.co/LzhLwyS/a983fb15a6acff1ac42c37debc43dabb.jpg"
              alt="Shoes"
              className="h-[216px]"
            />
          </figure>
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between gap-1">
                <img src="https://i.ibb.co/MP40Yrc/Icon-3.png" alt="" />
                <p>06 Dec 2022</p>
              </div>
              <div className="flex items-center justify-between gap-1">
                <img src="https://i.ibb.co/ncsxkNM/Vector.png" alt="" />
                <p>2000</p>
              </div>
              <div className="flex items-center justify-between gap-1">
                <img src="https://i.ibb.co/1MDMj49/Icon-4.png" alt="" />
                <p>13 Comments</p>
              </div>
            </div>

            <h2 className="card-title text-[#FF5017] underline">
              Renovating a Living Room? Experts Share Their Secrets
            </h2>
            <p>
              Duis aute irure dolor in reprehenderit into volupjl tate velit
              esse cillum dolore eu fugiat nulla partr iatur sunt in culp qui
              officia deserunt mollit
            </p>
            <hr />
            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://i.ibb.co/wBNxrS8/33fe647a46f9bf668322f8c1d94ed937.png"
                      alt="Tailwind-CSS-Avatar-component"
                    />
                  </div>
                </div>
                <p>David Smith</p>
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.7981 0.982422C11.9336 0.982422 15.2981 4.34692 15.2981 8.48242C15.2981 12.6179 11.9336 15.9824 7.7981 15.9824C3.6626 15.9824 0.298096 12.6179 0.298096 8.48242C0.298096 4.34692 3.6626 0.982422 7.7981 0.982422ZM7.7981 2.10742C4.28285 2.10742 1.4231 4.96717 1.4231 8.48242C1.4231 11.9977 4.28285 14.8574 7.7981 14.8574C11.3133 14.8574 14.1731 11.9977 14.1731 8.48242C14.1731 4.96717 11.3133 2.10742 7.7981 2.10742ZM7.544 4.80397C7.85525 4.80397 8.1065 5.05597 8.1065 5.36647V8.68297L10.6602 10.2055C10.9265 10.3652 11.0142 10.7102 10.8552 10.9772C10.7495 11.1535 10.5627 11.2517 10.3715 11.2517C10.2732 11.2517 10.1742 11.2262 10.0835 11.173L7.256 9.48622C7.0865 9.38422 6.9815 9.20047 6.9815 9.00247V5.36647C6.9815 5.05597 7.2335 4.80397 7.544 4.80397Z"
                      fill="black"
                      fill-opacity="0.75"
                    />
                  </svg>
                </span>
                <p>3 minutes ago</p>
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <p className="text-[#FF5017]">Read More</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <circle cx="11.8559" cy="11.5304" r="11.049" fill="#FF5017" />
                  <path
                    d="M12.6595 7.13258C12.6595 6.69032 12.3005 6.33301 11.8562 6.33301C11.4119 6.33301 11.0529 6.69032 11.0529 7.13258V10.7307H7.43827C6.99397 10.7307 6.63501 11.088 6.63501 11.5303C6.63501 11.9725 6.99397 12.3298 7.43827 12.3298H11.0529V15.9279C11.0529 16.3702 11.4119 16.7275 11.8562 16.7275C12.3005 16.7275 12.6595 16.3702 12.6595 15.9279V12.3298H16.2741C16.7185 12.3298 17.0774 11.9725 17.0774 11.5303C17.0774 11.088 16.7185 10.7307 16.2741 10.7307H12.6595V7.13258Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="shadow-xl card w-96 bg-base-200">
          <figure>
            <img
              src="https://i.ibb.co/b5tgJrV/b6aeb873d842dd2de65985f8e25c7d5f.jpg"
              alt="Shoes"
              className="h-[216px]"
            />
          </figure>
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between gap-1">
                <img src="https://i.ibb.co/MP40Yrc/Icon-3.png" alt="" />
                <p>07 Dec 2022</p>
              </div>
              <div className="flex items-center justify-between gap-1">
                <img src="https://i.ibb.co/ncsxkNM/Vector.png" alt="" />
                <p>3000</p>
              </div>
              <div className="flex items-center justify-between gap-1">
                <img src="https://i.ibb.co/1MDMj49/Icon-4.png" alt="" />
                <p>15 Comments</p>
              </div>
            </div>

            <h2 className="card-title text-[#FF5017] underline">
              Recent Commercial Real Estate Transactions
            </h2>
            <p>
              Duis aute irure dolor in reprehenderit into volupjl tate velit
              esse cillum dolore eu fugiat nulla partr iatur sunt in culp qui
              officia deserunt mollit
            </p>
            <hr />
            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://i.ibb.co/wBNxrS8/33fe647a46f9bf668322f8c1d94ed937.png"
                      alt="Tailwind-CSS-Avatar-component"
                    />
                  </div>
                </div>
                <p>David Smith</p>
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.7981 0.982422C11.9336 0.982422 15.2981 4.34692 15.2981 8.48242C15.2981 12.6179 11.9336 15.9824 7.7981 15.9824C3.6626 15.9824 0.298096 12.6179 0.298096 8.48242C0.298096 4.34692 3.6626 0.982422 7.7981 0.982422ZM7.7981 2.10742C4.28285 2.10742 1.4231 4.96717 1.4231 8.48242C1.4231 11.9977 4.28285 14.8574 7.7981 14.8574C11.3133 14.8574 14.1731 11.9977 14.1731 8.48242C14.1731 4.96717 11.3133 2.10742 7.7981 2.10742ZM7.544 4.80397C7.85525 4.80397 8.1065 5.05597 8.1065 5.36647V8.68297L10.6602 10.2055C10.9265 10.3652 11.0142 10.7102 10.8552 10.9772C10.7495 11.1535 10.5627 11.2517 10.3715 11.2517C10.2732 11.2517 10.1742 11.2262 10.0835 11.173L7.256 9.48622C7.0865 9.38422 6.9815 9.20047 6.9815 9.00247V5.36647C6.9815 5.05597 7.2335 4.80397 7.544 4.80397Z"
                      fill="black"
                      fill-opacity="0.75"
                    />
                  </svg>
                </span>
                <p>4 minutes ago</p>
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <p className="text-[#FF5017]">Read More</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <circle cx="11.8559" cy="11.5304" r="11.049" fill="#FF5017" />
                  <path
                    d="M12.6595 7.13258C12.6595 6.69032 12.3005 6.33301 11.8562 6.33301C11.4119 6.33301 11.0529 6.69032 11.0529 7.13258V10.7307H7.43827C6.99397 10.7307 6.63501 11.088 6.63501 11.5303C6.63501 11.9725 6.99397 12.3298 7.43827 12.3298H11.0529V15.9279C11.0529 16.3702 11.4119 16.7275 11.8562 16.7275C12.3005 16.7275 12.6595 16.3702 12.6595 15.9279V12.3298H16.2741C16.7185 12.3298 17.0774 11.9725 17.0774 11.5303C17.0774 11.088 16.7185 10.7307 16.2741 10.7307H12.6595V7.13258Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
