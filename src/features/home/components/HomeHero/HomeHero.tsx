import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { SearchBar } from "..";
import { Container, Navbar } from "@/shared/ui/components";

import mockTemplatesJpg from "../../assets/mock-templates.jpg";
import styles from "./HomeHero.module.css";

const HomeHero = () => {
  return (
    <>
      <Box
        bg={"purple"}
        className={styles.bgContainer}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        borderBottomRadius={40}
        pos={"relative"}
        as="section"
      >
        <Navbar />

        <Box w={"100%"}>
          <SearchBar />
        </Box>

        <Container>
          <Box
            display={"flex"}
            justifyContent={"center"}
            h={"100%"}
            pb={"260px"}
            pos={"relative"}
          >
            <Box
              zIndex={99}
              display={"flex"}
              flexDir={"column"}
              gap={"22px"}
              mt={"50px"}
            >
              <Heading
                fontWeight={500}
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
                Мы предлагаем широкий выбор качественных и инновационных
                шаблонов проектов, созданных с учетом лучших практик и
                требований современного бизнеса.
              </Text>
            </Box>
            <Image
              src={mockTemplatesJpg}
              pos={"absolute"}
              bottom={0}
              zIndex={1}
              right={0}
              borderTopRadius={20}
            />
          </Box>
        </Container>

        <Box className={styles.bg} />
      </Box>
    </>
  );
};

export default HomeHero;
