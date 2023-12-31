import About from "../../../components/About/About";
import Banner from "../../../components/Banner/Banner";
import Categories from "../../../components/Categories/Categories";
import FindChoose from "../../../components/FindChoose/FindChoose";
import OurProperty from "../../../components/OurProperty/OurProperty";
import Services from "../../../components/Services/Services";
import Video from "../../../components/Video/Video";

function Home() {
  return (
    <div>
      <Banner />
      <Categories />
      <About />
      <Services />
      <Video />
      <FindChoose />
      <OurProperty />
    </div>
  );
}

export default Home;
