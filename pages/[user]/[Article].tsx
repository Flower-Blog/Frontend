import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { apiArticleGetArticle } from "@/components/api";
import AllComment from "@/components/users/Article/comment/AllComment";
import CreateComment from "@/components/users/Article/comment/CreateComment";
import GiveFlowers from "@/components/users/Article/GiveFlowers";
import { update } from "@/store/CreaterSlice";

export default function Article(props: any) {
  // TODO: Handle funtion
  const dispatch = useDispatch();
  const User = useSelector((state: any) => state.User);

  useEffect(() => {
    // TODO: 文章創作者資料
    dispatch(update(JSON.stringify(props.createrData)));
  }, [dispatch, props.createrData]);

  // TODO: UI funtion

  return (
    <>
      <div className="home-container">
        <div className="page1-container04">
          <div className="page1-container05 py-2">
            <div className="page1-container06">
              <h1 className="page1-text13">{props.article.title}</h1>
            </div>
            <div className="page1-container07">
              <div className="page1-container08">
                <img alt="image" src="{props.article.user.picture}" loading="lazy" className="page1-image2" />
              </div>
              <div className="page1-container09 ml-2">
                <h1 className="page1-text14">${props.article.user}</h1>
                <div>{props.article.updateAt}</div>
              </div>
            </div>
            <div className="page1-container10">
              <div className="page1-text16">{props.article.subStandard}</div>
              <div className="page1-text21">{props.article.contents}</div>
            </div>
            <div className="page1-comment">
              <div className="page1-container11">
                {User.profile.login ? (
                  <GiveFlowers createname={User.profile.username} title={props.article.title} />
                ) : null}
                <div className="page1-container12">
                  <img alt="image" src="/playground_assets/1rose.png" className="page1-image3" />
                  <div>{props.article.FlowerCount}</div>
                </div>
              </div>
              <CreateComment userame={User.profile.name} picture={User.profile.picture} />
              <AllComment />
              <AllComment />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  // 取得單一文章
  const ArticleUrl = context.req.url.split("/")[2];
  let createrData = { id: 0, username: "", address: "", email: "", picture: "" };
  let article = { id: 0, title: "", subStandard: "", contents: "", FlowerCount: "", updateAt: "" };
  let comment = { id: 8, contents: "", likes: 0, createdAt: "", userdata: [] };
  // let createrData = { name: "", picture: ""};

  await apiArticleGetArticle(ArticleUrl)
    .then(async res => {
      const { id, title, subStandard, contents, FlowerCount, updateAt, comments, user } = res.data.articles;
      createrData = user;
      comment = comments;
      const resarticle = {
        id,
        title,
        subStandard,
        contents,
        FlowerCount,
        updateAt,
      };
      article = resarticle;
    })
    .catch(() => {
      return {
        notFound: true,
      };
    });

  return { props: { article, createrData, comment } };
};
