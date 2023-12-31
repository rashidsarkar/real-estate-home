import About from "../../../components/About/About";
import Banner from "../../../components/Banner/Banner";
import Categories from "../../../components/Categories/Categories";
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
    </div>
  );
}

export default Home;
