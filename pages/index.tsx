import Head from "next/head";
import React from "react";

import BlogPostCard21 from "@/components/blog-post-card21";

import Firstpart from "./../components/firstpart";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Flower</title>
          <meta property="og:title" content="Flower" />
        </Head>
        <div className="home-content">
          <Firstpart rootClassName="firstpart-root-class-name"></Firstpart>
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
                <BlogPostCard21
                  profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                  rootClassName="rootClassName3"
                ></BlogPostCard21>
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
        <section className="home-collection1"></section>
        <footer className="home-footer">
          <div className="home-main">
            <div className="home-branding">
              <div className="home-heading">
                <h2 className="home-logo1">Character</h2>
                <p className="home-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore.
                </p>
              </div>
              <div className="home-socials">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-twitter social button"
                >
                  <img alt="image" src="/playground_assets/twitter.svg" className="home-image10" />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-discord social button"
                >
                  <img alt="image" src="/playground_assets/discord.svg" className="home-image11" />
                </a>
              </div>
            </div>
            <div className="home-links">
              <div className="home-list">
                <h3 className="home-heading1">Site</h3>
                <div className="home-items">
                  <button className="home-link button-clean button">About</button>
                  <button className="home-link1 button-clean button">Collection</button>
                  <button className="home-link2 button-clean button">Roadmap</button>
                  <button className="home-link3 button-clean button">Features</button>
                </div>
              </div>
              <div className="home-list1">
                <h3 className="home-heading2">Company</h3>
                <div className="home-items1">
                  <button className="home-link4 button-clean button">Team</button>
                  <button className="home-link5 button-clean button">Press</button>
                  <button className="home-link6 button-clean button">Terms</button>
                  <button className="home-link7 button-clean button">Limitations</button>
                  <button className="home-link8 button-clean button">Licenses</button>
                </div>
              </div>
            </div>
            <div className="home-socials1">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-twitter1 social button"
              >
                <img alt="image" src="/playground_assets/twitter.svg" className="home-image12" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-discord1 social button"
              >
                <img alt="image" src="/playground_assets/discord.svg" className="home-image13" />
              </a>
            </div>
          </div>
          <span className="home-copyright">© 2022 Character. All Rights Reserved.</span>
        </footer>
        <div className="home-container14"></div>
      </div>
      <style jsx>{``}</style>
    </>
    //   )
    // }

    // export default Home
  );
}
