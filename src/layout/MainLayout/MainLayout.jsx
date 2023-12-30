import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function MainLayout() {
  return (
    <div className="mx-auto max-w-7xl">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
