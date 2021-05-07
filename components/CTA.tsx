import React from "react";
import { Col, Row } from "react-bootstrap";
import { core, URLS } from "../pages/api/routes";
import { Text, Link } from "@chakra-ui/react";

export const CTA = () => {
  return (
    <div className="border-t border-gray-200">
      <div className="flex">
        <div className="mx-auto py-10 overflow-hidden">
          <Row>
            <Col>
              <div className="px-5 py-2 text-bold">
                <Text className="inter font-bold">Products</Text>
              </div>
              <div className="px-5 py-2">
                <Link
                  className="inter text-base leading-6 text-gray-500"
                  isExternal
                  href={core}
                >
                  Secman
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link
                  className="inter text-base leading-6 text-gray-500"
                  isExternal
                  href="#"
                >
                  Secman Desktop (Soon)
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link
                  className="inter text-base leading-6 text-gray-500"
                  isExternal
                  href={URLS.docs.sm_upg}
                >
                  SM-UPG
                </Link>
              </div>
            </Col>
          </Row>
        </div>

        <div className="mx-auto py-10 overflow-hidden">
          <Row>
            <Col>
              <div className="px-5 py-2 text-bold">
                <Text className="inter font-bold">Resources</Text>
              </div>
              <div className="px-5 py-2">
                <Link
                  className="inter text-base leading-6 text-gray-500"
                  isExternal
                  href={URLS.docs.main}
                >
                  Docs
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link
                  className="inter text-base leading-6 text-gray-500"
                  isExternal
                  href={URLS.get_secman}
                >
                  Get Secman
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link
                  className="inter text-base leading-6 text-gray-500"
                  isExternal
                  href={URLS.docs.cryptography}
                >
                  Cryptography
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link
                  className="inter text-base leading-6 text-gray-500"
                  isExternal
                  href={URLS.docs.commands}
                >
                  How to use secman ?
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link
                  className="inter text-base leading-6 text-gray-500"
                  isExternal
                  href={URLS.github_relases_page}
                >
                  Releases
                </Link>
              </div>
            </Col>
          </Row>
        </div>

        <div className="padding-left mx-auto py-10 overflow-hidden">
          <Row>
            <Col>
              <div className="px-5 py-2 text-bold">
                <Text className="inter font-bold">Company</Text>
              </div>
              <div className="px-5 py-2">
                <Link
                  className="inter text-base leading-6 text-gray-500"
                  isExternal
                  href={URLS.changelog}
                >
                  Changelog
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link
                  className="inter text-base leading-6 text-gray-500"
                  isExternal
                  href={URLS.news}
                >
                  News
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link
                  className="inter text-base leading-6 text-gray-500"
                  isExternal
                  href={URLS.deps_site}
                >
                  Deps
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link
                  className="inter text-base leading-6 text-gray-500"
                  isExternal
                  href={URLS.sys_statuses}
                >
                  System Statuses
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link
                  className="inter text-base leading-6 text-gray-500"
                  isExternal
                  href={URLS.team}
                >
                  Team
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="mt-6 under-space flex justify-center flex-wrap">
        <p className="right-space inter">
          &copy; {new Date().getFullYear()} Secman. All rights reserved.
        </p>
        <a href={URLS.secman_org} className="text-gray-400 github right-border">
          <span className="sr-only">GitHub</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href={URLS.discord}
          className="left-space right-border text-gray-400 discord"
        >
          <span className="sr-only">Discord</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4a8.18 8.18 0 001.8.536c.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z" />{" "}
          </svg>
        </a>
        <a href={URLS.twitter} className="ml-6 text-gray-400 twitter">
          <span className="sr-only">Twitter</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
      </div>
    </div>
  );
};
