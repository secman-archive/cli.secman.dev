import React from "react";
import App from "next/app";
import Head from "next/head";
import "../components/app.css";
import "../components/markdown.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "preact/debug";
import { URLS } from "../api/routes";

export default class SecmanWebsiteApp extends App {
  render(): React.ReactElement {
    const { Component, pageProps } = this.props;
    return (
      <div className="h-screen">
        <Head>
          <link rel="icon" href={URLS.icon} type="image/svg+xml" />
        </Head>
        {console.log(`
          ███████╗╗███████╗ ██████╗███╗   ███╗ █████╗ ███╗    ███╗
          ██╔════╝║██╔════╝██╔════╝████╗ ████║██╔══██╗█████╗  ███║
          ███████╗║█████╗  ██║     ██╔████╔██║███████║███║███╗███║
          ╚════██║║██╔══╝  ██║     ██║╚██╔╝██║██╔══██║███║╚═█████║
          ███████║║███████╗╚██████╗██║ ╚═╝ ██║██║  ██║███║  ╚═███║
          ╚══════╝╚═══════╝ ╚═════╝╚═╝     ╚═╝╚═╝  ╚═╝╚══╝    ╚══╝
        `)}
        <Component {...pageProps} />
      </div>
    );
  }
}
