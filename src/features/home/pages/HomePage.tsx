import { Box } from "@chakra-ui/react";
import { HomeAbout, HomeBenefits, HomeHero } from "../components";

const HomePage = () => {
  return (
    <Box>
      <HomeHero />
      <HomeAbout />
      <HomeBenefits />
    </Box>
  );
};

export default HomePage;
