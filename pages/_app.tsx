import { ChakraProvider, SimpleGrid } from "design-system";
import React from "react";
import { FirebaseProvider } from "../components/FirebaseProvider";
import { NavBar } from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <FirebaseProvider>
        <SimpleGrid>
          <NavBar />
          <Component {...pageProps} />
        </SimpleGrid>
      </FirebaseProvider>
    </ChakraProvider>
  );
}

export default MyApp;
