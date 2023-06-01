import Head from "next/head";
import React from "react";
import { useState } from "react";

import { apiArticleGetAllHotArticle, apiArticleGetAllNewArticle } from "@/components/api";
import RightSidebar from "@/components/home/RightSidebar";
import ArticleItem from "@/components/users/Article/ArticleItem";

import TakeTurns from "./../components/home/TakeTurns";

export default function Home(props: any) {
  //TODO: UI function
  const [activeComponent, setActiveComponent] = useState("new");

  const showComponent = (component: React.SetStateAction<string>) => {
    setActiveComponent(component);
  };

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
        <section className="home-collection">
          <div className="home-container04">
            <button className="home-button1 button" onClick={() => showComponent("new")}>
              最新
            </button>
            <button className="home-button2 button" onClick={() => showComponent("hot")}>
              熱門
            </button>
          </div>
          <div className="home-container05">
            {/* 最新 */}
            {activeComponent === "new" && (
              <div className="home-blog mx-2">
                <div className="home-container06 w-full">
                  {props.NewArticles != null &&
                    props.NewArticles.map((item: any) => {
                      const { id, title, subStandard, updatedAt, flowerCount } = item;
                      const { name, picture } = item.userdata;
                      return (
                        <ArticleItem
                          key={id}
                          id={id}
                          name={name}
                          title={title}
                          subStandard={subStandard}
                          picture={picture}
                          flowerCount={flowerCount}
                          updatedAt={updatedAt}
                        />
                      );
                    })}
                </div>
              </div>
            )}
            {/* 熱門 */}
            {activeComponent === "hot" && (
              <div className="home-blog mx-2">
                <div className="home-container06 w-full">
                  {props.HotArticles != null &&
                    props.HotArticles.map((item: any) => {
                      const { id, title, subStandard, updatedAt, flowerCount } = item;
                      const { name, picture } = item.userdata;
                      return (
                        <ArticleItem
                          key={id}
                          id={id}
                          name={name}
                          title={title}
                          subStandard={subStandard}
                          picture={picture}
                          flowerCount={flowerCount}
                          updatedAt={updatedAt}
                        />
                      );
                    })}
                </div>
              </div>
            )}
            <RightSidebar />
          </div>
        </section>
      </div>
    </>
  );
}
export const getServerSideProps = async () => {
  try {
    const NewArticles = await apiArticleGetAllNewArticle();
    const HotArticles = await apiArticleGetAllHotArticle();
    return { props: { NewArticles: NewArticles.data.articles, HotArticles: HotArticles.data.articles } };
  } catch {
    return { props: { NewArticles: null, HotArticles: null } };
  }
};
