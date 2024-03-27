import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Container, DescribeTitle } from "@/shared/ui/components";

const HomeAbout = () => {
  return (
    <Box pt={50} pb={50}>
      <Container>
        <Box display={"flex"} gap={191} alignItems={"start"}>
          <Box flexShrink={0}>
            <DescribeTitle>Почему мы?</DescribeTitle>
          </Box>
          <Box>
            <Heading
              mb={"40px"}
              maxW={923}
              fontSize={35}
              fontFamily={"Unbounded"}
            >
              Качественные шаблоны - залог хорошего проекта
            </Heading>
            <Box
              mb={"42px"}
              w={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Text fontSize={17}>
                Мы разрабатываем шаблоны без применения <br /> конструкторных
                технологий. Весь каталог проектов был <br /> спроектирован и
                выполнен нашими разработчиками
              </Text>
              <Text fontSize={17}>
                Используем в работе передовые технологии
              </Text>
            </Box>
            <Button borderRadius={15} color={"white"} bg={"#5E81FF"}>
              Выбрать шаблон
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeAbout;
