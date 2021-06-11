import Link from "next/link";
import { URLS } from "../../api/routes";
import FO from "../../components/FadeObject";
import InlineCode from "../../components/InlineCode";

export const WhatIsSecman = () => {
  return (
    <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
      <p className="my-4 text-gray-700">
        <InlineCode>secman</InlineCode> is a passowrd manager can store,
        retrieves, generates, synchronizes passwords and save files securely,
        and is written in go! The most important difference is secman is not GPG
        cored. Instead, it uses a master password to securely store your
        passwords. It also supports encrypting arbitrary files.
      </p>
      <div>
        <FO>
          <Link href={URLS.dl_secman.main}>
            <a className="hover:underline">
              <h3 className="font-bold text-xl" id="features">
                Features
              </h3>
              <br />
            </a>
          </Link>
        </FO>
        <ol className="ml-8 list-disc text-gray-700">
          <li>Not GPG cored.</li>
          <li>It uses a master password to securely store your passwords.</li>
          <li>It syncs your passwords.</li>
          <li>Supports encrypting arbitrary files.</li>
        </ol>
      </div>
    </div>
  );
};
