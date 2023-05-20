import Head from "next/head";
import React from "react";

import SigngleArticle from "@/components/SigngleArticle";

import TakeTurns from "./../components/home/TakeTurns";

export default function Home() {
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
                <SigngleArticle
                  profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                  rootClassName="rootClassName3"
                ></SigngleArticle>
              </div>
            </div>
            <div className="home-container08">
              <div className="home-container09">
                <h1>推薦最佳使用者</h1>
                <ul className="list">
                  <li className="list-item">
                    <div className="home-container10">
                      <img
                        alt="image"
                        src="https://ih1.redbubble.net/image.3114059041.7813/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
                        loading="lazy"
                        className="home-image03"
                      />
                      <span>BT21_RJ012525</span>
                      <img alt="image" src="/playground_assets/flower11-200h.png" className="home-image04" />
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="home-container11">
                      <img
                        alt="image"
                        src="https://pbs.twimg.com/ext_tw_video_thumb/1148064582071545858/pu/img/-asywjIzDbmCV3WS.jpg:large"
                        loading="lazy"
                        className="home-image05"
                      />
                      <span>BT21_CHIMMY2569825</span>
                      <img alt="image" src="/playground_assets/flower2-200h.png" className="home-image06" />
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="home-container12">
                      <img
                        alt="image"
                        src="https://img-shoplineapp-com.s3.amazonaws.com/media/image_clips/5bd68b58627c770015f73b73/large.jpg?1540787029"
                        loading="lazy"
                        className="home-image07"
                      />
                      <span>BT21_KOYA01125625</span>
                      <img alt="image" src="/playground_assets/flower3-200h.png" className="home-image08" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="home-container13">
                <h1>今日一花</h1>
                <img alt="image" src="/playground_assets/flower11-200h.png" className="home-image09" />
                <h1>經典之花：紅玫瑰</h1>
                <span className="home-text26">
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
}
