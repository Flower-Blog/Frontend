import Head from "next/head";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { apiArticleGetUserAllArticle, apiUserGetCreaterData } from "@/components/api";
import BlogPostCard21 from "@/components/SigngleArticle";
import Editprofile from "@/components/users/EditProfile";
import FlowerRecord from "@/components/users/page-nav/FlowerRecord";
import { update } from "@/store/CreaterSlice";

export default function Userindex(props: any) {
  // TODO: Handle function
  const [IsPrivate, SetIsPrivate] = useState(false);
  const dispatch = useDispatch();
  const User = useSelector((state: any) => state.User);
  useEffect(() => {
    // TODO: 創作者狀態
    console.log("props.createrData.namecreaterDatacreaterData", props.createrData.name);
    if (props.createrData.name == User.profile.name) SetIsPrivate(true);
    dispatch(update(JSON.stringify(props.createrData)));
  }, [User.profile.name, dispatch, props.IsCreater, props.createrData]);

  return (
    <>
      <div className="personalprivate-container">
        <Head>
          <title>personalprivate - Flower</title>
          <meta property="og:title" content="personalprivate - Flower" />
        </Head>
        <section className="personalprivate-description">
          <div className="personalprivate-container04">
            <div
              className="personalprivate-container05"
              style={{ backgroundImage: `url(${User.profile.backgroundPhoto})` }}
            >
              <div className="personalprivate-container06">
                <img alt="image" src={User.profile.picture} loading="lazy" className="personalprivate-image2" />
              </div>
            </div>
            <div className="personalprivate-container07">
              <div className="personalprivate-container08">
                <div className="personalprivate-container09">
                  <span className="personalprivate-text12">{User.profile.name}</span>
                  <img alt="image" src="/playground_assets/flower11-200h.png" className="personalprivate-image3" />
                </div>
                <div className="personalprivate-container10">
                  <span className="personalprivate-text13">{User.profile.address}</span>
                </div>
              </div>
              <div className="personalprivate-container11">
                <span>{User.profile.introduction}</span>
                {IsPrivate ? (
                  // 私人:編輯個人資料
                  <Editprofile />
                ) : null}
              </div>
            </div>
          </div>
        </section>
        {IsPrivate ? (
          // 私人
          <section className="personalprivate-collection">
            <div className="personalprivate-container12">
              <button className="personalprivate-button2 button">個人文章</button>
              <button className="personalprivate-button3 button">收花紀錄</button>
              <button type="button" className="personalprivate-button4 button">
                我的花
              </button>
            </div>
            <FlowerRecord rootClassName="component1-root-class-name"></FlowerRecord>
          </section>
        ) : (
          // 公開
          <section className="personalpublic-collection">
            <div className="personalpublic-container12">
              <button className="personalpublic-button1 button">個人文章</button>
              <button type="button" className="personalpublic-button2 button">
                收藏花
              </button>
            </div>
            <div className="personalpublic-container13">
              <div className="personalpublic-container14">
                <div className="personalpublic-blog">
                  <div className="personalpublic-container15">
                    <BlogPostCard21
                      profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                      rootClassName="rootClassName7"
                    ></BlogPostCard21>
                  </div>
                  <div className="personalpublic-container16">
                    <BlogPostCard21
                      image_src="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
                      profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                      rootClassName="rootClassName8"
                    ></BlogPostCard21>
                  </div>
                  <BlogPostCard21
                    image_src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3J0cmFpdCUyMHdvbWFuJTIwY29sb3J8ZW58MHx8fHwxNjI2NDUwNTU4&amp;ixlib=rb-1.2.1&amp;h=1000"
                    profile_src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                    rootClassName="rootClassName6"
                  ></BlogPostCard21>
                </div>
              </div>
              <div className="personalpublic-container17">
                <div className="personalpublic-container18"></div>
                <div className="personalpublic-container22">
                  <h1>今日一花</h1>
                  <img alt="image" src="/playground_assets/flower11-200h.png" className="personalpublic-image11" />
                  <h1>經典之花：紅玫瑰</h1>
                  <span className="personalpublic-text24">
                    <span>以花為貌、以鳥為聲</span>
                    <br></br>
                    <br></br>
                    <span>喜歡玫瑰花的人浪漫、熱情、性格開朗，對生活積極主動。</span>
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}
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
    const Articles = await apiArticleGetUserAllArticle(createrData.address);
    return { props: { createrData, Articles: Articles.data } };
  } catch {
    return { props: { createrData, Articles: [] } };
  }
};
