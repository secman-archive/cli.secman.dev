import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { URLS } from "../api/routes";

export default class SecmanDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <meta
            property="og:description"
            content="Secman is a password manager, can create, edit, generate, and sync passwords."
          />
          <meta property="og:image" content={URLS.logo} />
          <meta property="og:type" content="website" />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content="Secman, Go, Password Manager" />
          <link rel="apple-touch-icon" href={URLS.logo} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
