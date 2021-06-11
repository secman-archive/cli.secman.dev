import React, { useMemo } from "react";
import { useRouter } from "next/router";
import LoadingPage from "../components/LoadingPage";
import NotFoundPage from "./404";

export function parseNameVersion(nameVersion: string): [string, string] {
  const [name, version] = nameVersion.split("@", 2);
  return [name, version];
}

export default function RestPage(): React.ReactElement {
  const { query } = useRouter();
  const { name } = useMemo(() => {
    const [identifier] = (query.rest as string[]) ?? [];
    const [name] = parseNameVersion(identifier ?? "");
    return { name };
  }, [query]);

  if (name === "") return <LoadingPage />;

  return <NotFoundPage />;
}
