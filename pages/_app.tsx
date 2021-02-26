import { ChakraProvider, SimpleGrid } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavBar } from "../components/NavBar";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <SimpleGrid>
          <NavBar />
          <Component {...pageProps} />
        </SimpleGrid>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
