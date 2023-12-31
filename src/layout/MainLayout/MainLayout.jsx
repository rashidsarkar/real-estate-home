import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function MainLayout() {
  return (
    <div className="mx-auto max-w-7xl">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
