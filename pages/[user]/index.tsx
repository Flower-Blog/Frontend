import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  apiArticleGetUserAllHotArticle,
  apiArticleGetUserAllNewArticle,
  apiUserGetCreaterData,
} from "@/components/api";
import RightSidebar from "@/components/home/RightSidebar";
import ArticleItem from "@/components/users/Article/ArticleItem";
import Editprofile from "@/components/users/EditProfile";
import FlowerRecord from "@/components/users/page-nav/FlowerRecord";
import MyFlowers from "@/components/users/page-nav/MyFlowers";
import { update } from "@/store/CreaterSlice";

export default function Userindex(props: any) {
  // TODO: Handle function
  const [IsPrivate, SetIsPrivate] = useState(false);
  const dispatch = useDispatch();
  const User = useSelector((state: any) => state.User);
  useEffect(() => {
    //TODO: 創作者狀態
    if (props.createrData.name == User.profile.name) SetIsPrivate(true);
    dispatch(update(JSON.stringify(props.createrData)));
  }, [User.profile.name, dispatch, props.IsCreater, props.createrData]);
  //TODO: UI function
  const [activeComponent, setActiveComponent] = useState("newArticle");

  const showComponent = (component: React.SetStateAction<string>) => {
    setActiveComponent(component);
  };

  return (
    <>
      <div className="personalprivate-container">
        <section className="personalprivate-description">
          <div className="personalprivate-container04">
            <div
              className="personalprivate-container05"
              style={{ backgroundImage: `url(${props.createrData.backgroundPhoto})` }}
            >
              <div className="personalprivate-container06">
                <img alt="image" src={props.createrData.picture} loading="lazy" className="personalprivate-image2" />
              </div>
            </div>
            <div className="personalprivate-container07">
              <div className="personalprivate-container08">
                <div className="personalprivate-container09">
                  <span className="personalprivate-text12">{props.createrData.name}</span>
                  <img alt="image" src="/playground_assets/flower11-200h.png" className="personalprivate-image3" />
                </div>
                <div className="personalprivate-container10">
                  <span className="personalprivate-text13">{props.createrData.address}</span>
                </div>
              </div>
              <div className="personalprivate-container11">
                <span>{props.createrData.introduction}</span>
                {IsPrivate ? (
                  // 私人:編輯個人資料
                  <Editprofile />
                ) : null}
              </div>
            </div>
          </div>
        </section>
        <section className="personalprivate-collection">
          <div className="personalprivate-container12">
            <button className="personalprivate-button2 button" onClick={() => showComponent("newArticle")}>
              最新
            </button>
            <button className="personalprivate-button2 button" onClick={() => showComponent("hotArticle")}>
              熱門
            </button>
            {IsPrivate ? (
              <button className="personalprivate-button3 button" onClick={() => showComponent("flowerRecord")}>
                收花紀錄
              </button>
            ) : null}
            <button type="button" className="personalprivate-button4 button" onClick={() => showComponent("myFlower")}>
              收藏花
            </button>
          </div>
          {activeComponent === "flowerRecord" && <FlowerRecord></FlowerRecord>}
          <div className="home-container05">
            {activeComponent === "newArticle" && (
              <div className="personalpublic-container14">
                <div className="personalpublic-blog">
                  <div className="personalpublic-container15 w-full">
                    {props.NewArticles != null &&
                      props.NewArticles.map((item: any) => {
                        const { id, title, subStandard, contents, flowerCount, updatedAt } = item;
                        return (
                          <ArticleItem
                            key={id}
                            id={id}
                            name={props.createrData.name}
                            title={title}
                            subStandard={subStandard}
                            contents={contents}
                            flowerCount={flowerCount}
                            updatedAt={updatedAt}
                            picture={props.createrData.picture}
                            IsPrivate={IsPrivate}
                          />
                        );
                      })}
                  </div>
                </div>
              </div>
            )}
            {activeComponent === "hotArticle" && (
              <div className="personalpublic-container14">
                <div className="personalpublic-blog">
                  <div className="personalpublic-container15 w-full">
                    {props.HotArticles != null &&
                      props.HotArticles.map((item: any) => {
                        const { id, title, subStandard, contents, flowerCount, updatedAt } = item;
                        return (
                          <ArticleItem
                            key={id}
                            id={id}
                            name={props.createrData.name}
                            title={title}
                            subStandard={subStandard}
                            contents={contents}
                            flowerCount={flowerCount}
                            updatedAt={updatedAt}
                            picture={props.createrData.picture}
                            IsPrivate={IsPrivate}
                          />
                        );
                      })}
                  </div>
                </div>
              </div>
            )}
            {activeComponent === "myFlower" && <MyFlowers></MyFlowers>}
            {!IsPrivate ? <RightSidebar /> : null}
          </div>
        </section>
      </div>
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  const url = context.req.url.substring(1);
  let createrData = { id: 0, name: "", address: "", email: "", picture: "", backgroundPhoto: "" };

  // 查詢創作者資料
  await apiUserGetCreaterData(url)
    .then(res => {
      createrData = res.data.userdata;
    })
    .catch(() => {
      // 找不到使用者
      return {
        notFound: true,
      };
    });
  try {
    const NewArticles = await apiArticleGetUserAllNewArticle(createrData.address);
    const HotArticles = await apiArticleGetUserAllHotArticle(createrData.address);
    return { props: { createrData, HotArticles: HotArticles.data.articles, NewArticles: NewArticles.data.articles } };
  } catch {
    return { props: { createrData, HotArticles: null, NewArticles: null } };
  }
};
