import React from "react";
import { useEffect, useState } from "react";
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
  const [arl, setarl] = useState("");
  // console.log("UserUserUser", User);
  // console.log("UserUserUser", props.article);
  // console.log("commentcomment", props.createrData);

  useEffect(() => {
    // TODO: 文章創作者資料
    dispatch(update(JSON.stringify(props.createrData)));

    apiArticleGetArticle(2).then((res: any) => {
      setarl(JSON.stringify(res.data.article.title));
    });
  }, [dispatch, props.createrData]);

  // TODO: UI funtion

  return (
    <>
      <div className="home-container">
        <div className="page1-container04">
          <div className="page1-container05 py-2">
            <div className="page1-container06">
              <h1 className="page1-text13">{arl}</h1>
            </div>
            <div className="page1-container07">
              <div className="page1-container08">
                <img alt="image" src="{props.article.userData.picture}" loading="lazy" className="page1-image2" />
              </div>
              <div className="page1-container09 ml-2">
                <h1 className="page1-text14">${props.article.userData}</h1>
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
              <CreateComment name={User.profile.name} picture={User.profile.picture}></CreateComment>
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
  console.log("ArticleUrlArticleUrl", ArticleUrl);
  await apiArticleGetArticle(ArticleUrl)
    .then(async res => {
      const { id, title, subStandard, contents, FlowerCount, updateAt, comments, userdata } = res.data.articles;
      createrData = userdata;
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
      console.log("titletitletitletitle", title);
      console.log("articlearticlearticle", article);
    })
    .catch(() => {
      return {
        notFound: true,
      };
    });

  return { props: { article, createrData, comment } };
};
