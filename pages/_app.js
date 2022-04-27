import { Box, ChakraProvider } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyTheme from "../styles/theme";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/montserrat/700.css";
import { motion } from "framer-motion";

const ChakraBox = motion(Box);

const MyApp = ({ Component, pageProps, router }) => {
  const niceProps = {
    maxWidth: 1400,
    mx: "auto",
    height: "100%",
    p: { sm: 6, "2xl": 0 },
  };
  return (
    <ChakraProvider theme={MyTheme} resetCSS>
      <Header />
      <ChakraBox
        overflowY={"auto"}
        height={"calc(100vh - 88px - 96px)"}
        sx={{
          "&::-webkit-scrollbar": {
            width: "8px",
            borderRadius: "15px",
            backgroundColor: "rgba(0, 0, 0, 0.05)",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "15px",
            backgroundColor: "purple.300",
          },
        }}
        key={router.route}
        initial={"empty"}
        animate={"final"}
        variants={{
          empty: {
            opacity: 0,
            scale: 0.8,
            x: Math.floor(Math.random * 10) > 4 ? 200 : -200,
          },
          final: {
            opacity: 1,
            scale: 1,
            x: 0,
          },
        }}
      >
        <Component niceProps={niceProps} {...pageProps} />
      </ChakraBox>
      <Footer />
    </ChakraProvider>
  );
};
export default MyApp;
