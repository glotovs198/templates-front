import { Navbar } from "@/shared/ui/components";
import { Box } from "@chakra-ui/react";
import { HomeAbout, HomeHero } from "../components";

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <HomeHero />
      <HomeAbout />
    </Box>
  );
};

export default HomePage;
