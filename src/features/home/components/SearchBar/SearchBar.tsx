import { Box, Input } from "@chakra-ui/react";
import { Container } from "@/shared/ui/components";

const SearchBar = () => {
  return (
    <Container>
      <Box pos={"relative"} zIndex={100}>
        <Input
          mt={"15px"}
          mb={"15px"}
          pl={23}
          pr={23}
          border={"none"}
          bg={"white"}
          placeholder="Что вас интересует?"
          w={"100%"}
          borderRadius={20}
        />
      </Box>
    </Container>
  );
};

export default SearchBar;
