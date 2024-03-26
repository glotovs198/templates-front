import { Input } from "@chakra-ui/react";
import { Container } from "@/shared/ui/components";

const SearchBar = () => {
  return (
    <Container>
      <Input
        mt={"10px"}
        mb={"10px"}
        border={"none"}
        bg={"white"}
        placeholder="Что вас интересует?"
        w={"100%"}
        borderRadius={20}
      />
    </Container>
  );
};

export default SearchBar;
