import {
  BlurryBlobs,
  ChakraProvider,
  PageContainer,
  SimpleGrid,
} from "design-system";
import React from "react";
import { FirebaseProvider } from "../components/FirebaseProvider";
import { NavBar } from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <FirebaseProvider>
        <SimpleGrid>
          <NavBar />
          <BlurryBlobs
            blobColors={[
              "rgba(245, 101, 101, 0.6)",
              "rgba(237, 100, 166, 0.6)",
              "rgba(237, 100, 166, 0.6)",
              "rgba(237, 137, 54, 0.6)",
              "rgba(236, 201, 75, 0.6)",
              "rgba(72, 187, 120, 0.6)",
              "rgba(66, 153, 225, 0.6)",
            ]}
          >
            <Component {...pageProps} />
          </BlurryBlobs>
        </SimpleGrid>
      </FirebaseProvider>
    </ChakraProvider>
  );
}

export default MyApp;
