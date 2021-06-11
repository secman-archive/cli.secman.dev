import React from "react";
import Head from "next/head";

function LoadingPage(): React.ReactElement {
  return (
    <div>
      <Head>
        <title>Secman</title>
      </Head>
      <div className="bg-gray-50 min-h-ful">
        {/* <img src="/images/loading.gif" alt="secman gif" width="300" /> */}
      </div>
    </div>
  );
}

export default LoadingPage;
