import { Typography } from "@supabase/ui";

const SectionHeader = (props: any) => {
  return (
    <div className={"grid grid-cols-12 gap-1 sm:gap-8 " + props.className}>
      <div className="relative grid py-12 col-span-12 grid-cols-12">
        <div className="col-span-12">
          <span className="col-span-12 block mb-6 text-2xl tracking-widest uppercase text-gray-300 font-mono dark:text-gray-300">
            {props.subtitle}
          </span>
          <Typography.Title level={2}>
            <span>{props.title}</span>
            {props.title_alt && (
              <span className="text-gray-400 dark:text-gray-300 inline">
                {props.title_alt}
              </span>
            )}
          </Typography.Title>
        </div>
        <div className="col-span-12 lg:col-span-7">
          {props.paragraph && (
            <p className="mt-3 mx-auto text-xl text-gray-400 dark:text-gray-300 sm:mt-4">
              {props.paragraph}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
