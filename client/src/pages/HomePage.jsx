import HomeHero from "../feature/home/components/HomeHero";
import Mission from "../feature/home/components/Mission";
import Services from "../feature/home/components/Services";
import Impacts from "../feature/home/components/Impacts";
import CTA from "../feature/home/components/CTA";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <Mission />
      <Services />
      <Impacts />
      <CTA />
    </>
  );
};

export default HomePage;
