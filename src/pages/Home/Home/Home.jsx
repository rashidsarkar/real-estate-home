import About from "../../../components/About/About";
import Agents from "../../../components/Agents/Agents";
import Banner from "../../../components/Banner/Banner";
import Blog from "../../../components/Blog/Blog";
import Categories from "../../../components/Categories/Categories";
import Feedback from "../../../components/Feedback/Feedback";
import FindChoose from "../../../components/FindChoose/FindChoose";
import OurCities from "../../../components/OurCities/OurCities";
import OurProperty from "../../../components/OurProperty/OurProperty";
import Services from "../../../components/Services/Services";
import Subscribe from "../../../components/Subscribe/Subscribe";
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
      <Agents />
      <Feedback />
      <Subscribe />
      <Blog />
    </div>
  );
}

export default Home;
