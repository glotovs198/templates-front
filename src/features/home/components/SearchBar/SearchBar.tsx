import { Box, Input } from "@chakra-ui/react";
import { Container } from "@/shared/ui/components";

const SearchBar = () => {
  return (
    <Container>
      <Box pos={"relative"} zIndex={100} mt={"15px"} mb={"15px"}>
        <Input
          pl={"60px"}
          pr={"30px"}
          border={"none"}
          bg={"white"}
          placeholder="Что вас интересует?"
          w={"100%"}
          borderRadius={20}
          outline={"yellow"}
        />
        <svg
          style={{ position: "absolute", top: 8, left: 15, zIndex: 999 }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C3 7.68333 3.62933 6.146 4.888 4.888C6.14667 3.63 7.684 3.00067 9.5 3C11.3167 3 12.8543 3.62933 14.113 4.888C15.3717 6.14667 16.0007 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C14 8.25 13.5627 7.18767 12.688 6.313C11.8133 5.43833 10.7507 5.00067 9.5 5C8.25 5 7.18767 5.43767 6.313 6.313C5.43833 7.18833 5.00067 8.25067 5 9.5C5 10.75 5.43767 11.8127 6.313 12.688C7.18833 13.5633 8.25067 14.0007 9.5 14Z"
            fill="black"
          />
        </svg>
      </Box>
    </Container>
  );
};

export default SearchBar;
