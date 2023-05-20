import Head from "next/head";
import React from "react";

const Page3 = () => {
  return (
    <>
      <div className="page3-container">
        <Head>
          <title>Page3 - Flower</title>
          <meta property="og:title" content="Page3 - Flower" />
        </Head>
        <div className="page3-container04">
          <div className="page3-container05">
            <div className="page3-container06">
              <h1 className="page3-text13">標題</h1>
            </div>
            <div className="page3-container07">
              <p className="page3-text14">
                <span>副標</span>
                <br></br>
              </p>
            </div>
            <div className="page3-container08">
              <p className="page3-text17">
                <span className="page3-text18">內文</span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
        <div className="page3-container09">
          <button className="page3-button1 button">返回</button>
          <button className="page3-button2 button">發布</button>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Page3;
