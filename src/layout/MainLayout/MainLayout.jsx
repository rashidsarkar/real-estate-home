import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Navbar/Header/Header";

function MainLayout() {
  return (
    <div className="mx-auto max-w-7xl">
      <Header />
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
}

export default MainLayout;
