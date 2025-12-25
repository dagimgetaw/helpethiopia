import Hero from "../feature/about/components/Hero";
import Mission from "../feature/about/components/Mission";
import WhoWeAre from "../feature/about/components/WhoWeAre";
import Story from "../feature/about/components/Story";
import CoreServices from "../feature/about/components/CoreServices";
import Impact from "../feature/about/components/Impact";
import SuccessStories from "../feature/about/components/SuccessStories";
import TrustedPartners from "../feature/about/components/TrustedPartners";

const AboutPage = () => {
  return (
    <>
      <Hero />
      <Mission />
      <WhoWeAre />
      <Story />
      <CoreServices />
      <Impact />
      <SuccessStories />
      <TrustedPartners />
    </>
  );
};

export default AboutPage;
