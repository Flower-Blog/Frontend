import Head from "next/head";
import React from "react";

import AllFlowerTypes from "../components/dashboard/AllFlowerTypes";
import UserRecord from "../components/dashboard/UserRecord";

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
            <AllFlowerTypes rootClassName="component4-root-class-name"></AllFlowerTypes>
            <UserRecord rootClassName="component5-root-class-name"></UserRecord>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
