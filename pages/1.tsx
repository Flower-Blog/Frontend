import Head from "next/head";
import Image from "next/image";
import React from "react";

import Comment from "../components/comment";
import Comments1 from "../components/comments1";

const Page1 = () => {
  return (
    <>
      <div className="page1-container">
        <Head>
          <title>Page1 - Flower</title>
          <meta property="og:title" content="Page1 - Flower" />
        </Head>
        <header data-thq="thq-navbar" className="page1-navbar Content">
          <Image
            alt="pastedImage"
            src="/playground_assets/pastedimage-8ml4-200h.png"
            className="page1-pasted-image"
            width={103}
            height={84}
          />
          <div className="page1-container01">
            <img alt="image" src="/playground_assets/211818_search_icon.svg" className="page1-image" />
            <input type="text" placeholder="請輸入關鍵字" className="page1-input input" />
          </div>
          <div data-thq="thq-navbar-nav" data-role="Nav" className="page1-desktop-menu">
            <nav data-thq="thq-navbar-nav-links" data-role="Nav" className="page1-nav">
              <button className="page1-view button">
                <span className="page1-text">創作文章</span>
              </button>
              <button className="page1-view1 button">
                <span className="page1-text01">文件</span>
              </button>
              <div data-thq="thq-dropdown" className="page1-thq-dropdown list-item">
                <div data-thq="thq-dropdown-toggle" className="page1-dropdown-toggle">
                  <button className="page1-view2 button">
                    <img
                      alt="image"
                      src="https://ih1.redbubble.net/image.3114059041.7813/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
                      loading="lazy"
                      className="page1-image1"
                    />
                    <span className="page1-text02">BT21_RJ012525</span>
                  </button>
                  <div data-thq="thq-dropdown-arrow" className="page1-dropdown-arrow"></div>
                </div>
                <ul data-thq="thq-dropdown-list" className="page1-dropdown-list">
                  <li data-thq="thq-dropdown" className="page1-dropdown list-item"></li>
                  <li data-thq="thq-dropdown" className="page1-dropdown1 list-item">
                    <div data-thq="thq-dropdown-toggle" className="page1-dropdown-toggle1">
                      <span className="page1-text03">我的個人主頁</span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="page1-dropdown2 list-item">
                    <div data-thq="thq-dropdown-toggle" className="page1-dropdown-toggle2">
                      <span className="page1-text04">我的錢包</span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="page1-dropdown3 list-item">
                    <div data-thq="thq-dropdown-toggle" className="page1-dropdown-toggle3">
                      <span className="page1-text05">設定</span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="page1-dropdown4 list-item">
                    <div data-thq="thq-dropdown-toggle" className="page1-dropdown-toggle4">
                      <span className="page1-text06">登出</span>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="page1-burger-menu">
            <button className="button page1-button">
              <svg viewBox="0 0 1024 1024" className="page1-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="page1-mobile-menu">
            <div data-thq="thq-mobile-menu-nav" data-role="Nav" className="page1-nav1">
              <div className="page1-container02">
                <span className="page1-logo">Character</span>
                <div data-thq="thq-close-menu" className="page1-menu-close">
                  <svg viewBox="0 0 1024 1024" className="page1-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav data-thq="thq-mobile-menu-nav-links" data-role="Nav" className="page1-nav2">
                <span className="page1-text07">About</span>
                <span className="page1-text08">Features</span>
                <span className="page1-text09">Features</span>
                <span className="page1-text10">Pricing</span>
                <span className="page1-text11">Team</span>
                <span className="page1-text12">Blog</span>
              </nav>
              <div className="page1-container03">
                <button className="page1-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="page1-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="page1-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="page1-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="page1-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="page1-container04">
          <div className="page1-container05">
            <div className="page1-container06">
              <h1 className="page1-text13">養狗狗前 VS 養狗狗後</h1>
            </div>
            <div className="page1-container07">
              <div className="page1-container08">
                <img
                  alt="image"
                  src="https://ih1.redbubble.net/image.3114059041.7813/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
                  loading="lazy"
                  className="page1-image2"
                />
              </div>
              <div className="page1-container09">
                <h1 className="page1-text14">BT21_RJ012525</h1>
                <span>2023/04/03 17:52</span>
              </div>
            </div>
            <div className="page1-container10">
              <p className="page1-text16">
                <span>相信各位養寵物的都知道 養寵物前與養寵物後一定有差別</span>
                <br></br>
                <span>今天我就分享5個我的 養狗狗前 VS 養狗狗後 心得、區別</span>
                <br></br>
              </p>
              <p className="page1-text21">
                <span>廢話不多說進入正題</span>
                <br></br>
                <br></br>
                <span>1. 我媽媽的態度</span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <span>2. 狗狗體態變化</span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <span>3. 我的總花費</span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <span>4. 我的生活</span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <span>5. 家裡環境</span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <span>總結 還是很愛很愛我家的狗狗啦</span>
                <br></br>
                <span>為我家多添加了一味</span>
                <br></br>
                <span>每天生活中也多了一點樂趣</span>
                <br></br>
              </p>
            </div>
            <div className="page1-comment">
              <div className="page1-container11">
                <Image
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-p02-200h.png"
                  className="page1-pasted-image1"
                  width={38}
                  height={35}
                />
                <div className="page1-container12">
                  <img alt="image" src="/playground_assets/flower1-200h.png" className="page1-image3" />
                  <span>12</span>
                </div>
              </div>
              <Comment rootClassName="comment-root-class-name"></Comment>
              <Comments1 rootClassName="comments1-root-class-name"></Comments1>
              <Comments1
                text="真的我家也是"
                image_src="https://ih1.redbubble.net/image.3114059041.7813/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
                rootClassName="comments1-root-class-name2"
              ></Comments1>
              <Comments1
                text="同意"
                image_src="https://img-shoplineapp-com.s3.amazonaws.com/media/image_clips/5bd68b58627c770015f73b73/large.jpg?1540787029"
                rootClassName="comments1-root-class-name1"
              ></Comments1>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Page1;
