import Head from "next/head";
import Image from "next/image";
import React from "react";

import Component4 from "../components/component4";
import Component5 from "../components/component5";

const Page = () => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - Flower</title>
          <meta property="og:title" content="Page - Flower" />
        </Head>
        <header data-thq="thq-navbar" className="page-navbar Content">
          <Image
            alt="pastedImage"
            src="/playground_assets/pastedimage-8ml4-200h.png"
            className="page-pasted-image"
            width={103}
            height={84}
          />
          <div className="page-container1">
            <img alt="image" src="/playground_assets/211818_search_icon.svg" className="page-image" />
            <input type="text" placeholder="請輸入關鍵字" className="page-input input" />
          </div>
          <div data-thq="thq-navbar-nav" data-role="Nav" className="page-desktop-menu">
            <nav data-thq="thq-navbar-nav-links" data-role="Nav" className="page-nav">
              <button className="page-view button">
                <span className="page-text">創作文章</span>
              </button>
              <button className="page-view1 button">
                <span className="page-text01">文件</span>
              </button>
              <div data-thq="thq-dropdown" className="page-thq-dropdown list-item">
                <div data-thq="thq-dropdown-toggle" className="page-dropdown-toggle">
                  <button className="page-view2 button">
                    <img
                      alt="image"
                      src="https://ih1.redbubble.net/image.3114059041.7813/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
                      loading="lazy"
                      className="page-image1"
                    />
                    <span className="page-text02">BT21_RJ012525</span>
                  </button>
                  <div data-thq="thq-dropdown-arrow" className="page-dropdown-arrow"></div>
                </div>
                <ul data-thq="thq-dropdown-list" className="page-dropdown-list">
                  <li data-thq="thq-dropdown" className="page-dropdown list-item"></li>
                  <li data-thq="thq-dropdown" className="page-dropdown1 list-item">
                    <div data-thq="thq-dropdown-toggle" className="page-dropdown-toggle1">
                      <span className="page-text03">我的個人主頁</span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="page-dropdown2 list-item">
                    <div data-thq="thq-dropdown-toggle" className="page-dropdown-toggle2">
                      <span className="page-text04">我的錢包</span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="page-dropdown3 list-item"></li>
                  <li data-thq="thq-dropdown" className="page-dropdown4 list-item">
                    <div data-thq="thq-dropdown-toggle" className="page-dropdown-toggle3">
                      <span className="page-text05">登出</span>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="page-burger-menu">
            <button className="button page-button">
              <svg viewBox="0 0 1024 1024" className="page-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="page-mobile-menu">
            <div data-thq="thq-mobile-menu-nav" data-role="Nav" className="page-nav1">
              <div className="page-container2">
                <span className="page-logo">Character</span>
                <div data-thq="thq-close-menu" className="page-menu-close">
                  <svg viewBox="0 0 1024 1024" className="page-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav data-thq="thq-mobile-menu-nav-links" data-role="Nav" className="page-nav2">
                <span className="page-text06">About</span>
                <span className="page-text07">Features</span>
                <span className="page-text08">Features</span>
                <span className="page-text09">Pricing</span>
                <span className="page-text10">Team</span>
                <span className="page-text11">Blog</span>
              </nav>
              <div className="page-container3">
                <button className="page-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="page-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="page-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="page-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="page-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="page-container4">
          <div className="page-container5">
            <button className="page-button1 button">使用者記錄</button>
            <button className="page-button2 button">花總類</button>
          </div>
          <div className="page-container6">
            <Component4 rootClassName="component4-root-class-name"></Component4>
            <Component5 rootClassName="component5-root-class-name"></Component5>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Page;
