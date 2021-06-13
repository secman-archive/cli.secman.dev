import React from "react";
import Head from "next/head";
import Link from "next/link";
import CodeBlock from "../components/CodeBlock";
import Footer from "../components/Footer";
import { NextPage } from "next";
import InlineCode from "../components/InlineCode";
import Header from "../components/Header";
import FO from "../components/FadeObject";
import { InstallSection } from "../content/install_section";
import { URLS } from "../api/routes";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Secman CLI</title>
      </Head>

      <div className="bg-white">
        <div className="bg-gray-50 border-b border-gray-200">
          <Header />
        </div>

        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <FO>
            <a className="hover:underline">
              <h3 className="font-bold text-xl" id="installation">
                Installation
              </h3>
            </a>
          </FO>
          <InstallSection />
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <FO>
            <a className="hover:underline">
              <h3 className="font-bold text-xl" id="getting-started">
                Getting Started
              </h3>
            </a>
          </FO>
          <p className="my-4 text-gray-700">Initializing Vault</p>
          <CodeBlock code="secman init" language="bash" />
          <p className="my-4 text-gray-700">
            Start using <InlineCode>secman</InlineCode>
          </p>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8">
          <CodeBlock code={`secman insert MY_SECRET_TOKEN`} language="bash" />
          <p className="my-4 text-gray-700">Sync Your Passwords</p>
          <CodeBlock code="secman sync start" language="bash" />
          <p className="my-4 text-gray-700">Sync Your Passwords</p>
          <CodeBlock code="secman sync start" language="bash" />
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8">
          <p className="my-4 text-gray-700">
            You can find more commands in{" "}
            <Link href={`${URLS.docs.main}/commands`}>
              <a className="link">Docs</a>
            </Link>
            .
          </p>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <FO>
            <Link href={URLS.docs.main}>
              <a className="hover:underline">
                <h3 className="font-bold text-xl" id="docs">
                  Docs
                </h3>
              </a>
            </Link>
          </FO>

          <p className="my-4 text-gray-700">
            Secman comes with{" "}
            <Link href={URLS.docs.main}>
              <a className="link">docs</a>
            </Link>{" "}
          </p>
          <p className="my-4 text-gray-700">
            Docs pages also contain information about the built in tools that
            Secman provides.
          </p>
        </div>
        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
