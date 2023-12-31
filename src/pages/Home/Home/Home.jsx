import About from "../../../components/About/About";
import Banner from "../../../components/Banner/Banner";
import Categories from "../../../components/Categories/Categories";
import FindChoose from "../../../components/FindChoose/FindChoose";
import OurCities from "../../../components/OurCities/OurCities";
import OurProperty from "../../../components/OurProperty/OurProperty";
import Services from "../../../components/Services/Services";
import Video from "../../../components/Video/Video";
import Works from "../../../components/Works/Works";

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
      <OurCities />
      <Works />
    </div>
  );
}

export default Home;
