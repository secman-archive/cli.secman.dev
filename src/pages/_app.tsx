import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "../theme";
import "../components/app.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/secman.svg" type="image/svg+xml" />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
