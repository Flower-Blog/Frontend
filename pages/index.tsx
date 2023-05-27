import Head from "next/head";
import React from "react";

import { apiArticleGetAllArticle } from "@/components/api";
import RightSidebar from "@/components/home/RightSidebar";
import SigngleArticle from "@/components/SigngleArticle";

import TakeTurns from "./../components/home/TakeTurns";

export default function Home(props: any) {
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
                {props.Articles != null &&
                  props.Articles.map((item: any) => {
                    const { id, title, subStandard } = item;
                    const { name, picture } = item.userdata;
                    return (
                      <SigngleArticle key={id} name={name} title={title} subStandard={subStandard} picture={picture} />
                    );
                  })}
              </div>
            </div>
            <RightSidebar />
          </div>
        </section>
      </div>
    </>
  );
}
export const getServerSideProps = async () => {
  try {
    const Articles = await apiArticleGetAllArticle();
    return { props: { Articles: Articles.data.articles } };
  } catch {
    return { props: { Articles: null } };
  }
};
