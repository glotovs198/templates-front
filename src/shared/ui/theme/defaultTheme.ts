import { extendTheme } from "@chakra-ui/react";

const appColors = {
  lightPurple: "#5E81FF",
  darkPurple: "#471EA6",
  yellow: "#FFD576",
  blue: "#7AE6FF",
};

const lightTheme = extendTheme({
  colors: {
    purple: appColors.lightPurple,
    darkPurple: appColors.darkPurple,
    yellow: appColors.yellow,
    blue: appColors.blue,
  },
  fonts: {
    heading: "Unbounded, monospace",
    body: "TT Commons, sans-serif",
    mono: "mono, monospace",
  },
});

export default lightTheme;
