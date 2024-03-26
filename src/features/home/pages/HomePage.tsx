import { Navbar } from "@/shared/ui/components";
import { Box, Heading, Text } from "@chakra-ui/react";
import { SearchBar } from "../components";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <Box className={styles.bgContainer} bg={"#5E81FF"} h={"100vh"}>
      <Box className={styles.bg} />
      <Navbar />
      <SearchBar />
      <Box display={"flex"} justifyContent={"center"} mt={"100px"}>
        <Box display={"flex"} flexDir={"column"} gap={"22px"}>
          <Heading
            fontWeight={500}
            fontFamily={"Unbounded"}
            as={"h1"}
            fontSize={60}
            color={"white"}
            textTransform={"uppercase"}
          >
            Ваш ключ к <br /> безупречному <br /> проекту
          </Heading>
          <Text color={"white"}>
            Palette - это ваш надежный партнер в мире проектного управления.
          </Text>
          <Text color={"white"} maxW={496}>
            Мы предлагаем широкий выбор качественных и инновационных шаблонов
            проектов, созданных с учетом лучших практик и требований
            современного бизнеса.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
