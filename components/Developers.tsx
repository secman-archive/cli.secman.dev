import React from "react";
import DevelopersData from "../api/Developers.json";
import { useRouter } from "next/router";
import { Typography } from "@supabase/ui";

type Props = {
  text: string;
  description?: string;
  url?: string;
  icon?: string;
};

const Developers = () => {
  const { basePath } = useRouter();
  const iconSections = Object.values(DevelopersData).map((dev: Props) => {
    const { text, description, url, icon } = dev;

    const content = (
      <div>
        <div className="flex flex-row items-center">
          <div className="inline-flex items-center justify-center rounded-md bg-gray-800 dark:bg-white text-white h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              className="fill-current dark:text-black"
            >
              <path fill-rule="evenodd" d={icon}></path>
            </svg>
          </div>
          <div>
            <Typography.Title level={5} className="ml-3 mb-0">
              {text}
            </Typography.Title>
          </div>
        </div>
        <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
          <Typography.Text>
            <p className="mt-1 text-sm">{description}</p>
          </Typography.Text>
        </div>
      </div>
    );
    return url ? (
      <a
        key={text}
        href={url}
        className="p-3 col-span-6 rounded hover:bg-gray-50 dark:hover:bg-dark-700 transition"
        target="_blank"
      >
        {content}
      </a>
    ) : (
      <div
        key={text}
        className="-m-3 p-3 flex flex-col justify-between rounded-lg transition ease-in-out duration-150"
      >
        {content}
      </div>
    );
  });

  return (
    <div className="grid grid-cols-12">
      <nav className="col-span-6" aria-labelledby="solutionsHeading">
        <div className="grid grid-cols-12 m-3 gap-3">{iconSections}</div>
      </nav>
    </div>
  );
};

export default Developers;
