import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <Box maxW={1230} width={"100%"} pl={15} pr={15} margin={"0 auto"}>
      {children}
    </Box>
  );
};

export default Container;
