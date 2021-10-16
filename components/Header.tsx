import React, { useState } from "react";
import Link from "next/link";

import { Button, Badge } from "@supabase/ui";
import FlyOut from "./UI/FlyOut";
import Transition from "../tools/Transition";

import SolutionsData from "../api/Solutions.json";

import Solutions from "./Product";
import Developers from "./Developers";
import Res from "./Res";
import Company from "./Company";
import { imgs_secman, URLS } from "../api/routes";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const [openProduct, setOpenProduct] = useState(false);
  const [openDevelopers, setOpenDevelopers] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const [openRes, setOpenRes] = useState(false);

  React.useEffect(() => {
    if (open) {
      // Prevent scrolling on mount
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  function handleToggle(callback: any) {
    handleCancel();
    callback();
  }

  function handleCancel() {
    setOpenProduct(false);
    setOpenDevelopers(false);
    setOpenCompany(false);
    setOpenRes(false);
  }

  const iconSections = Object.values(SolutionsData).map(
    (solution: any, idx: number) => {
      const { name, description, icon, label, url } = solution;

      const content = (
        <div className="mb-3 flex md:h-full lg:flex-col">
          <div className="flex-shrink-0">
            <div className="inline-flex items-center justify-center rounded-md bg-gray-800 dark:bg-white text-white h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                className="fill-current dark:text-black"
              >
                <path fillRule="evenodd" d={icon}></path>
              </svg>
            </div>
          </div>
          <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
            <div>
              <p className="text-base font-medium text-gray-900 dark:text-white space-x-2">
                <span>{name}</span>
                {label && <Badge color="blue">{label}</Badge>}
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-dark-100">
                {description}
              </p>
            </div>
            {url && (
              <p className="mt-2 text-sm font-medium lg:mt-4">
                Learn more <span aria-hidden="true">&rarr;</span>
              </p>
            )}
          </div>
        </div>
      );
      return url ? (
        <a
          key={`solution_${idx}`}
          href={url}
          className="-m-3 p-3 my-2 flex flex-col justify-between rounded-lg hover:bg-gray-50 dark:hover:bg-dark-600 transition ease-in-out duration-150"
        >
          {content}
        </a>
      ) : (
        <div
          key={`solution_${idx}`}
          className="-m-3 p-3 flex flex-col justify-between rounded-lg transition ease-in-out duration-150"
        >
          {content}
        </div>
      );
    }
  );

  type HamburgerButtonProps = {
    toggleFlyOut: Function;
  };

  const HamburgerButton = (props: HamburgerButtonProps) => (
    <div
      className="absolute inset-y-0 left-0 px-2 flex items-center lg:hidden"
      onClick={() => props.toggleFlyOut()}
    >
      <button
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-700"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>

        <svg
          className="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          className="hidden h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );

  const FlyOutNavButton = (props: any) => (
    <div
      className={
        `
          inline-flex items-center px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700
          dark:text-dark-100 cursor-pointer
        ` + props.active
      }
      onClick={props.onClick}
    >
      <>
        <span>{props.title}</span>
        <svg
          className={
            "ml-2 h-5 w-5 text-gray-300 group-hover:text-gray-300 transition ease-in-out duration-150" +
            (props.active && " transform rotate-180")
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </>
    </div>
  );

  return (
    <>
      <div className="sticky top-0 z-50">
        <nav>
          {/* <div className="lg:container mx-auto relative flex justify-between h-16 lg:px-10 xl:px-0"> */}
          <div className="lg:container mx-auto relative flex justify-between h-16 lg:px-16 xl:px-20">
            <HamburgerButton toggleFlyOut={() => setOpen(true)} />
            <div className="flex-1 flex items-center justify-center sm:items-stretch lg:justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" as="/">
                    <img
                      className="block h-10 w-auto"
                      style={{ cursor: "pointer" }}
                      src={URLS.logo}
                      alt="Logo"
                    />
                  </Link>
                </div>
                <div className="pl-4 hidden sm:ml-6 lg:flex sm:space-x-4">
                  <FlyOutNavButton
                    title={"Products"}
                    onClick={() =>
                      handleToggle(() => setOpenProduct(!openProduct))
                    }
                    active={openProduct}
                  />
                  <FlyOutNavButton
                    title={"Resources"}
                    onClick={() => handleToggle(() => setOpenRes(!openRes))}
                    active={openRes}
                  />
                  <FlyOutNavButton
                    title={"Developers"}
                    onClick={() =>
                      handleToggle(() => setOpenDevelopers(!openDevelopers))
                    }
                    active={openDevelopers}
                  />
                  <FlyOutNavButton
                    title={"Company"}
                    onClick={() =>
                      handleToggle(() => setOpenCompany(!openCompany))
                    }
                    active={openCompany}
                  />
                  <a
                    href={URLS.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                    transition
                    inline-flex items-center px-1 border-b-2 border-transparent text-sm font-medium
                    text-gray-500 hover:text-gray-700 hover:border-gray-500 p-5
                    dark:text-dark-100 dark:hover:border-dark-100
                  `}
                  >
                    Try Secman
                  </a>
                  <div className="hidden lg:flex items-center sm:space-x-2">
                    <a href={URLS.dl_secman.main}>
                      <Button type="dashed">Download Secman</Button>
                    </a>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={URLS.secman_repo}
                    className="text-gray-300 hover:text-gray-400 transition inline-flex items-center px-1"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Nav Menu */}
          <Transition
            appear={true}
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <div className="p-4 md:p-8 h-screen w-screen fixed bg-white transform overflow-y-scroll -inset-y-0 z-50 dark:bg-dark-700">
              <div className="absolute right-4 top-4 items-center justify-between">
                <div className="-mr-2">
                  <button
                    onClick={() => setOpen(false)}
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500 dark:bg-dark-800"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* </div> */}
              <div className="mt-6 mb-12">
                <div className="pt-2 pb-4 space-y-1">
                  <a
                    href={URLS.demo}
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white"
                  >
                    Try Secman
                  </a>
                  <a
                    href="/docs"
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white"
                  >
                    Products
                  </a>
                  <a
                    href="/docs"
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white"
                  >
                    Resources
                  </a>
                  <a
                    href="/docs"
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white"
                  >
                    Developers
                  </a>
                  <a
                    href="/docs"
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white"
                  >
                    Company
                  </a>
                  <a
                    href={URLS.dl_secman.main}
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white"
                  >
                    <Button type="dashed">Download Secman</Button>
                  </a>
                </div>
                <div className="p-3">
                  <p className="mb-6 text-sm text-gray-400">
                    Products available:
                  </p>
                  {iconSections}
                </div>
              </div>
            </div>
          </Transition>
        </nav>
        <FlyOut open={openProduct} handleCancel={handleCancel}>
          <Solutions />
        </FlyOut>
        <FlyOut withBlogs open={openRes} handleCancel={handleCancel}>
          <Res />
        </FlyOut>
        <FlyOut open={openDevelopers} handleCancel={handleCancel}>
          <Developers />
        </FlyOut>
        <FlyOut withBlogs open={openCompany} handleCancel={handleCancel}>
          <Company />
        </FlyOut>
      </div>
    </>
  );
};

export default Nav;
