import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/header/Logo.png";
import "./navbar.css";
function Navbar() {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-[#021327] "
              : isActive
              ? "text-[#FF5017] font-semibold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/AboutUs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-[#021327] "
              : isActive
              ? "text-[#FF5017] font-semibold"
              : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Property"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-[#021327] "
              : isActive
              ? "text-[#FF5017] font-semibold"
              : ""
          }
        >
          Property
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Pages"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-[#021327] "
              : isActive
              ? "text-[#FF5017] font-semibold"
              : ""
          }
        >
          Pages
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-[#021327] "
              : isActive
              ? "text-[#FF5017] font-semibold"
              : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-[#021327] "
              : isActive
              ? "text-[#FF5017] font-semibold"
              : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link className="text-xl">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="inline-flex flex-row flex-wrap p-2 px-1 space-x-4 text-xl font-semibold menuu menuu-horizontal">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="join join-vertical lg:join-horizontal">
            <Link className="border-none join-item btn btn-outline hover:bg-base-100 hover:text-[#FF5017] ">
              Sing In
            </Link>
            <a className="btn join-item bg-[#FF5017] hover:bg-[#FF5017] propertyBtn text-white">
              Add Property
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
