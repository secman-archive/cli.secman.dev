import Head from "next/head";
import Link from "next/link";
import React from "react";
import { imgs_secman, URLS } from "../api/routes";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function NotFoundPage() {
  return (
    <div className="NotFoundPage">
      <Head>
        <title>404</title>
      </Head>
      <div id="flex-top">
        <Header />
        <header>
          <h1 className="font-extrabold text-5xl leading-10 tracking-tight text-gray-900">
            _404_
          </h1>
          <h2 className="mt-4 sm:mt-5 font-light text-2xl text-center leading-tight text-gray-900">
            Sorry. the content you’re looking for doesn’t exist. Either it was
            removed, or you mistyped the link.
          </h2>
          <div className="NotFoundPageCenter">
            <Link href="/">
              <a className="link right-border">Home</a>
            </Link>
            <Link href={URLS.docs.main}>
              <a className="link left-space right-border">Docs</a>
            </Link>
            <Link href={URLS.posts}>
              <a className="link left-space">News</a>
            </Link>
          </div>
        </header>
      </div>
      <div className="center">
        <img src={`${imgs_secman}/web/404.svg`} alt="secman 404 error" id="secman404" />
      </div>

      <Footer />
    </div>
  );
}
