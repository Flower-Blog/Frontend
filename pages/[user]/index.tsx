import Head from "next/head";
import React from "react";

import BlogPostCard21 from "@/components/SigngleArticle";
import FlowerRecord from "@/components/users/page-nav/FlowerRecord";

const userindex = () => {
  return (
    <>
      <div className="personalprivate-container">
        <Head>
          <title>personalprivate - Flower</title>
          <meta property="og:title" content="personalprivate - Flower" />
        </Head>
        <section className="personalprivate-description">
          <div className="personalprivate-container04">
            <div className="personalprivate-container05">
              <div className="personalprivate-container06">
                <img
                  alt="image"
                  src="https://ih1.redbubble.net/image.3114059041.7813/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
                  loading="lazy"
                  className="personalprivate-image2"
                />
              </div>
            </div>
            <div className="personalprivate-container07">
              <div className="personalprivate-container08">
                <div className="personalprivate-container09">
                  <span className="personalprivate-text12">BT21_RJ012525</span>
                  <img alt="image" src="/playground_assets/flower11-200h.png" className="personalprivate-image3" />
                </div>
                <div className="personalprivate-container10">
                  <img
                    alt="image"
                    src="/playground_assets/pastedimage-95s-200h.png"
                    className="personalprivate-image4"
                  />
                  <span className="personalprivate-text13">0x4202043D9ff98a4e8C64b075dBF4Cb3eE5EfF528</span>
                </div>
              </div>
              <div className="personalprivate-container11">
                <span>
                  <span> RJ喜歡做菜也喜歡享受美食。</span>
                  <br></br>
                  <span>用蓬鬆的毛髮和一顆溫暖的心撫慰每個人。</span>
                </span>
                {/* 私人:編輯個人資料 */}
                <button className="personalprivate-button1 button">編輯個人資料</button>
              </div>
            </div>
          </div>
        </section>
        {/* 私人 */}
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
        {/* 公開 */}
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
              <div className="personalpublic-container18">
                <h1>推薦最佳使用者</h1>
                <ul className="list">
                  <li className="list-item">
                    <div className="personalpublic-container19">
                      <img
                        alt="image"
                        src="https://ih1.redbubble.net/image.3114059041.7813/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
                        loading="lazy"
                        className="personalpublic-image05"
                      />
                      <span>BT21_RJ012525</span>
                      <img alt="image" src="/playground_assets/flower11-200h.png" className="personalpublic-image06" />
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="personalpublic-container20">
                      <img
                        alt="image"
                        src="https://pbs.twimg.com/ext_tw_video_thumb/1148064582071545858/pu/img/-asywjIzDbmCV3WS.jpg:large"
                        loading="lazy"
                        className="personalpublic-image07"
                      />
                      <span>BT21_CHIMMY2569825</span>
                      <img alt="image" src="/playground_assets/flower2-200h.png" className="personalpublic-image08" />
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="personalpublic-container21">
                      <img
                        alt="image"
                        src="https://img-shoplineapp-com.s3.amazonaws.com/media/image_clips/5bd68b58627c770015f73b73/large.jpg?1540787029"
                        loading="lazy"
                        className="personalpublic-image09"
                      />
                      <span>BT21_KOYA01125625</span>
                      <img alt="image" src="/playground_assets/flower3-200h.png" className="personalpublic-image10" />
                    </div>
                  </li>
                </ul>
              </div>
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
      </div>
    </>
  );
};

export default userindex;
