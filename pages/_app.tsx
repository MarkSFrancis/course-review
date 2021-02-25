import {
  ChakraProvider,
  SimpleGrid,
} from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <SimpleGrid>
        <NavBar />
        <Component {...pageProps} />
      </SimpleGrid>
    </ChakraProvider>
  );
}

export default MyApp;
