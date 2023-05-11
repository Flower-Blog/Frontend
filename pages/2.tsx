import Head from "next/head";
import Image from "next/image";
import React from "react";

const Page3 = () => {
  return (
    <>
      <div className="page3-container">
        <Head>
          <title>Page3 - Flower</title>
          <meta property="og:title" content="Page3 - Flower" />
        </Head>
        <header data-thq="thq-navbar" className="page3-navbar Content">
          <Image
            alt="pastedImage"
            src="/playground_assets/pastedimage-8ml4-200h.png"
            className="page3-pasted-image"
            width={103}
            height={84}
          />
          <div className="page3-container01">
            <img alt="image" src="/playground_assets/211818_search_icon.svg" className="page3-image" />
            <input type="text" placeholder="請輸入關鍵字" className="page3-input input" />
          </div>
          <div data-thq="thq-navbar-nav" data-role="Nav" className="page3-desktop-menu">
            <nav data-thq="thq-navbar-nav-links" data-role="Nav" className="page3-nav">
              <button className="page3-view button">
                <span className="page3-text">創作文章</span>
              </button>
              <button className="page3-view1 button">
                <span className="page3-text01">文件</span>
              </button>
              <div data-thq="thq-dropdown" className="page3-thq-dropdown list-item">
                <div data-thq="thq-dropdown-toggle" className="page3-dropdown-toggle">
                  <button className="page3-view2 button">
                    <img
                      alt="image"
                      src="https://ih1.redbubble.net/image.3114059041.7813/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
                      loading="lazy"
                      className="page3-image1"
                    />
                    <span className="page3-text02">BT21_RJ012525</span>
                  </button>
                  <div data-thq="thq-dropdown-arrow" className="page3-dropdown-arrow"></div>
                </div>
                <ul data-thq="thq-dropdown-list" className="page3-dropdown-list">
                  <li data-thq="thq-dropdown" className="page3-dropdown list-item"></li>
                  <li data-thq="thq-dropdown" className="page3-dropdown1 list-item">
                    <div data-thq="thq-dropdown-toggle" className="page3-dropdown-toggle1">
                      <span className="page3-text03">我的個人主頁</span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="page3-dropdown2 list-item">
                    <div data-thq="thq-dropdown-toggle" className="page3-dropdown-toggle2">
                      <span className="page3-text04">我的錢包</span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="page3-dropdown3 list-item">
                    <div data-thq="thq-dropdown-toggle" className="page3-dropdown-toggle3">
                      <span className="page3-text05">設定</span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="page3-dropdown4 list-item">
                    <div data-thq="thq-dropdown-toggle" className="page3-dropdown-toggle4">
                      <span className="page3-text06">登出</span>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="page3-burger-menu">
            <button className="button page3-button">
              <svg viewBox="0 0 1024 1024" className="page3-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="page3-mobile-menu">
            <div data-thq="thq-mobile-menu-nav" data-role="Nav" className="page3-nav1">
              <div className="page3-container02">
                <span className="page3-logo">Character</span>
                <div data-thq="thq-close-menu" className="page3-menu-close">
                  <svg viewBox="0 0 1024 1024" className="page3-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav data-thq="thq-mobile-menu-nav-links" data-role="Nav" className="page3-nav2">
                <span className="page3-text07">About</span>
                <span className="page3-text08">Features</span>
                <span className="page3-text09">Features</span>
                <span className="page3-text10">Pricing</span>
                <span className="page3-text11">Team</span>
                <span className="page3-text12">Blog</span>
              </nav>
              <div className="page3-container03">
                <button className="page3-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="page3-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="page3-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="page3-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="page3-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="page3-container04">
          <div className="page3-container05">
            <div className="page3-container06">
              <h1 className="page3-text13">標題</h1>
            </div>
            <div className="page3-container07">
              <p className="page3-text14">
                <span>副標</span>
                <br></br>
              </p>
            </div>
            <div className="page3-container08">
              <p className="page3-text17">
                <span className="page3-text18">內文</span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
        <div className="page3-container09">
          <button className="page3-button1 button">返回</button>
          <button className="page3-button2 button">發布</button>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Page3;
