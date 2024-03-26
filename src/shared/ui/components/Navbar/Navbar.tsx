import { Box, Button, Image } from "@chakra-ui/react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";

interface NavItems {
  href: string;
  text: string;
  child?: NavItems[];
}

const navItems: NavItems[] = [
  {
    href: "/",
    text: "Главная",
  },
  {
    href: "/design",
    text: "Дизайн",
    child: [],
  },
  {
    href: "/servers",
    text: "Серверные приложения",
    child: [],
  },
];

const Navbar = () => {
  return (
    <Box bg={"white"} w={"100%"} borderRadius={20} pt={"12px"} pb={"12px"}>
      <Container>
        <Box display={"flex"} alignItems={"center"}>
          <Link to="/">
            <Image src={logo} mr={116} />
          </Link>
          <Box display={"flex"} gap={10} flex={1}>
            {navItems.map((navItem) => (
              <Link to={navItem.href}>
                <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                  {navItem.text}
                  {navItem.child ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.99999 8.78065L11.3 5.48065L12.2427 6.42399L7.99999 10.6667L3.75732 6.42399L4.69999 5.48132L7.99999 8.78065Z"
                        fill="black"
                      />
                    </svg>
                  ) : null}
                </Box>
              </Link>
            ))}
          </Box>
          <Box display={"flex"} gap={"7px"}>
            <Button bg={"#5E81FF"} color={"white"} borderRadius={17}>
              Войти
            </Button>
            <Button bg={"#DEDEDE"} borderRadius={17}>
              Регистрация
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
