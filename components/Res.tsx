import React from "react";
import ResData from "../api/Res.json";
import ProductIcon from "./ProductIcon";
import { Typography } from "@supabase/ui";
import CrypData from "../api/Cryp.json";

type Props = {
  text: string;
  description?: string;
  url?: string;
  icon?: string;
  isE?: boolean;
};

const Res = () => {
  const iconSections = Object.values(ResData).map((res: Props) => {
    const { text, description, url, icon, isE } = res;

    const content = (
      <div className="flex lg:flex-col">
        <div className="flex flex-row items-center">
          <ProductIcon icon={icon} />
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
    return (
      url && (
        <a
          key={text}
          href={url}
          className="p-3 col-span-6 rounded hover:bg-gray-50 dark:hover:bg-dark-700 transition"
          target={isE ? "_blank" : ""}
        >
          {content}
        </a>
      )
    );
  });

  return (
    <div className="grid grid-cols-12">
      <nav className="col-span-6">
        <div className="grid grid-cols-12 m-3 gap-3">{iconSections}</div>
      </nav>
      <div className="col-span-6">
        <div className="m-3 mx-6">
        <Typography.Text type="secondary">
            Cryptography Documention
          </Typography.Text>
          <ul className="mt-6 space-y-3">
            {CrypData.map((cryp: any, idx: number) => {
              if (idx > 1) {
                return null;
              }
              return (
                <li className="flow-root" key={`flyout_case_${idx}`}>
                  <a
                    href={cryp.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="p-3 flex rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition ease-in-out duration-150 border dark:border-gray-600"
                  >
                    <div className="hidden sm:block flex-shrink-0">
                      <img
                        className="w-32 h-20 object-cover rounded-md"
                        src={cryp.imgUrl}
                      />
                    </div>
                    <div className="min-w-0 flex-1 sm:ml-8">
                      <Typography.Title level={5} className="mb-0">
                        {cryp.title}
                      </Typography.Title>
                      <Typography.Text>{cryp.description}</Typography.Text>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Res;
