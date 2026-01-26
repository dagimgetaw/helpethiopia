import HomeHero from "../feature/home/components/HomeHero";
import Mission from "../feature/home/components/Mission";
import Services from "../feature/home/components/Services";
import Impacts from "../feature/home/components/Impacts";
import Partner from "../feature/home/components/Partner";
import Register from "../feature/home/components/Register";
import SuccessStories from "../feature/home/components/SuccessStories";
import Contact from "../feature/home/components/Contact";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <Mission />
      <Services />
      <Impacts />
      <Partner />
      <Register />
      <SuccessStories />
      <Contact />
    </>
  );
};

export default HomePage;
