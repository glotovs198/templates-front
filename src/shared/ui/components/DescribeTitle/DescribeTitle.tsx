import { Heading } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const DescribeTitle = ({ children }: PropsWithChildren) => {
  return (
    <Heading fontWeight={400} fontSize={17} color={"#5E81FF"}>
      {children}
    </Heading>
  );
};

export default DescribeTitle;
