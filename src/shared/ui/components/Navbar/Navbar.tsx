import { Box, Button, Image, Menu } from "@chakra-ui/react";
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
    <Box
      bg={"white"}
      w={"100%"}
      borderRadius={20}
      pt={"12px"}
      pb={"12px"}
      zIndex={120}
      as={"header"}
    >
      <Container>
        <Box display={"flex"} alignItems={"start"}>
          <Link to="/">
            <Image src={logo} mr={116} />
          </Link>
          <Box flex={1}>
            <Menu direction="rtl">
              {navItems.map((navItem) => (
                <Link to={navItem.href} key={navItem.href}>
                  <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                    {navItem.text}
                    {navItem.child ? (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
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
            </Menu>
          </Box>

          <Box display={"flex"} gap={"7px"}>
            <Button
              pl={"25px"}
              pr={"25px"}
              pt={"8px"}
              pb={"8px"}
              bg={"#5E81FF"}
              color={"white"}
              borderRadius={17}
            >
              Войти
            </Button>
            <Button
              pl={"25px"}
              pr={"25px"}
              pt={"8px"}
              pb={"8px"}
              bg={"#DEDEDE"}
              borderRadius={17}
            >
              Регистрация
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
