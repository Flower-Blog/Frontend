import Head from "next/head";
import React from "react";

import RightSidebar from "@/components/home/RightSidebar";
import SigngleArticle from "@/components/SigngleArticle";

import TakeTurns from "./../components/home/TakeTurns";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Flower</title>
          <meta property="og:title" content="Flower" />
        </Head>
        <div className="home-content">
          <TakeTurns rootClassName="firstpart-root-class-name"></TakeTurns>
        </div>
        <section className="home-description"></section>
        <section className="home-collection">
          <div className="home-container04">
            <button className="home-button1 button">
              <span>
                <span>最新</span>
                <br></br>
              </span>
            </button>
            <button className="home-button2 button">熱門</button>
          </div>
          <div className="home-container05">
            <div className="home-blog">
              <div className="home-container06">
                <SigngleArticle
                  profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                  rootClassName="rootClassName3"
                ></SigngleArticle>
              </div>
            </div>
            <RightSidebar />
          </div>
        </section>
      </div>
    </>
  );
}
