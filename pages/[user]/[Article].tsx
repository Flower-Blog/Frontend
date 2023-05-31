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
  // console.log("UserUserUser", User);
  // console.log("UserUserUser", props.article);
  // console.log("commentcomment", props.createrData);

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
  const parts = context.req.url.split("/");
  const number: number = parseInt(parts[parts.length - 1]);
  const createrData = { id: "0", username: "", address: "", email: "", picture: "" };
  const article = { id: "0", title: "", subStandard: "", contents: "", flowerCount: 0, updatedAt: "" };
  const comment = { id: "8", contents: "", likes: 0, createdAt: "", userdata: {} };

  await apiArticleGetArticle(number)
    .then(async res => {
      const { id, title, subStandard, contents, flowerCount, updatedAt, comments, userdata } = res.data.article;
      console.log("id:", id);
      console.log("title:", title);
      console.log("subStandard:", subStandard);
      console.log("contents:", contents);
      console.log("flowerCount:", flowerCount);
      console.log("updatedAt:", updatedAt);
      console.log("comments:", comments);
      console.log("userdata:", userdata);
      // createrData = userdata;
      // comment = comments;
      // const resarticle = {
      //   id,
      //   title,
      //   subStandard,
      //   contents,
      //   FlowerCount,
      //   updateAt,
      // };
      // article = resarticle;
      // console.log("articlearticlearticle", article.title);
    })
    .catch((error: any) => {
      console.log("error.responseerror.response", error);
      return {
        notFound: true,
      };
    });

  return { props: { article, createrData, comment } };
};
