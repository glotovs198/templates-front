import { Box, Heading, Text } from "@chakra-ui/react";
import { SearchBar } from "..";

import styles from "./HomeHero.module.css";

const HomeHero = () => {
  return (
    <>
      <Box
        bg={"#5E81FF"}
        className={styles.bgContainer}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        pb={260}
      >
        <Box w={"100%"}>
          <SearchBar />
        </Box>

        <Box className={styles.bg} />
        <Box display={"flex"} flexDir={"column"} gap={"22px"} mt={50}>
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
    </>
  );
};

export default HomeHero;
