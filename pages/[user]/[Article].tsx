import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { apiArticleGetArticle } from "@/components/api";
import AllComment from "@/components/users/Article/comment/AllComment";
import CreateComment from "@/components/users/Article/comment/CreateComment";
import GiveFlowers from "@/components/users/Article/GiveFlowers";
import { update } from "@/store/CreaterSlice";

export default function Article(props: any) {
  // TODO: Handle funtion
  const dispatch = useDispatch();
  const [flowerCount, setflowerCount] = useState(props.article.flowerCount);
  const User = useSelector((state: any) => state.User);
  useEffect(() => {
    // TODO: 文章創作者資料
    dispatch(update(JSON.stringify(props.createrData)));
  }, [dispatch, props.createrData]);

  const updatedAt = props.article.updatedAt.substr(0, 10);

  // TODO: UI funtion

  return (
    <>
      <div className="home-container">
        <div className="page1-container04">
          <div className="page1-container05 py-2">
            <div className="page1-container06">
              <h1 className="page1-text13 break-all">{props.article.title}</h1>
            </div>
            <a className="page1-container07 rounded-lg shadow hover:shadow-lg" href={"/" + props.createrData.name}>
              <div className="page1-container08">
                <img alt="image" src={props.createrData.picture} loading="lazy" className="page1-image2" />
              </div>
              <div className="page1-container09 ml-2">
                <h1 className="page1-text14">{props.createrData.name}</h1>
                <div>{updatedAt}</div>
              </div>
            </a>
            <div className="page1-container10">
              <div className="page1-text16 break-all">{props.article.subStandard}</div>
              <div className="page1-text21 break-all">{props.article.contents}</div>
            </div>
            <div className="page1-comment">
              <div className="page1-container11">
                {User.profile.login ? (
                  <GiveFlowers
                    kay={props.article.id}
                    id={props.article.id}
                    createname={props.createrData.name}
                    title={props.article.title}
                    username={User.profile.name}
                    flowerCount={flowerCount}
                    setflowerCount={setflowerCount}
                  />
                ) : null}
                <div className="flex items-center">
                  <img alt="image" src="/playground_assets/1rose.png" className="page1-image3" />
                  <span className="px-1">{flowerCount}</span>
                </div>
              </div>
              <CreateComment
                articleId={props.article.id}
                name={User.profile.name}
                picture={User.profile.picture}
              ></CreateComment>
              {props.comment.slice(1).map((comment: any) => {
                const { id, contents, createdAt, likes, userdata } = comment;
                const { name, picture } = userdata;

                return (
                  <AllComment
                    key={id}
                    name={name}
                    Username={User.profile.name}
                    id={id}
                    picture={picture}
                    contents={contents}
                    createdAt={createdAt}
                    likes={likes}
                  />
                );
              })}
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
  let createrData = { name: "", picture: "" };
  let article = { id: 0, title: "", subStandard: "", contents: "", flowerCount: 0, updatedAt: "" };
  const comment = [{ id: 0, contents: "", likes: 0, createdAt: "", userdata: { name: "", picture: "" } }];

  await apiArticleGetArticle(number)
    .then(async res => {
      const { id, title, subStandard, contents, flowerCount, updatedAt, comments, userdata } = res.data.article;
      createrData = userdata;
      comment.push(...comments);
      const resarticle = {
        id,
        title,
        subStandard,
        contents,
        flowerCount,
        updatedAt,
      };
      article = resarticle;
    })
    .catch((error: any) => {
      console.log("error.response", error.response);
      return {
        notFound: true,
      };
    });

  return { props: { article, createrData, comment } };
};
