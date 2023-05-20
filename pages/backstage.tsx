import Head from "next/head";
import React from "react";

import Component4 from "../components/component4";
import Component5 from "../components/component5";

const Page = () => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - Flower</title>
          <meta property="og:title" content="Page - Flower" />
        </Head>
        <div className="page-container4">
          <div className="page-container5">
            <button className="page-button1 button">使用者記錄</button>
            <button className="page-button2 button">花總類</button>
          </div>
          <div className="page-container6">
            <Component4 rootClassName="component4-root-class-name"></Component4>
            <Component5 rootClassName="component5-root-class-name"></Component5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
