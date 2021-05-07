import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "./api/theme";
import "../components/app.css";
import "../components/markdown.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { URLS } from "./api/routes";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href={URLS.icon} type="image/svg+xml" />
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
