import Head from "next/head";
import React from "react";
import { useState } from "react";

import { apiArticleGetAllArticle } from "@/components/api";
import RightSidebar from "@/components/home/RightSidebar";
import SigngleArticle from "@/components/SigngleArticle";

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
        <section className="home-description"></section>
        <section className="home-collection">
          <div className="home-container04">
            <button className="home-button1 button" onClick={() => showComponent("new")}>
              <span>
                <span>最新</span>
                <br></br>
              </span>
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
                  {props.Articles != null &&
                    props.Articles.map((item: any) => {
                      const { id, title, subStandard, updatedAt, flowerCount } = item;
                      const { name, picture } = item.userdata;
                      return (
                        <SigngleArticle
                          key={id}
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
                  {props.Articles != null &&
                    props.Articles.slice() // 先進行陣列複製，避免修改原始陣列
                      .sort((a: { flowerCount: number }, b: { flowerCount: number }) => b.flowerCount - a.flowerCount) // 根據 flowerCount 排序（降序）
                      .map((item: any) => {
                        const { id, title, subStandard, updatedAt, flowerCount } = item;
                        const { name, picture } = item.userdata;
                        return (
                          <SigngleArticle
                            key={id}
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
    const Articles = await apiArticleGetAllArticle();
    return { props: { Articles: Articles.data.articles } };
  } catch {
    return { props: { Articles: null } };
  }
};
