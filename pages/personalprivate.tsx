// import DangerousHTML from "dangerous-html/react";
import Head from "next/head";
import Image from "next/image";
import React from "react";

import Component1 from "../components/component1";

const Personalprivate = () => {
  return (
    <>
      <div className="personalprivate-container">
        <Head>
          <title>personalprivate - Flower</title>
          <meta property="og:title" content="personalprivate - Flower" />
        </Head>
        <header data-thq="thq-navbar" className="personalprivate-navbar Content">
          <Image
            alt="pastedImage"
            src="/playground_assets/pastedimage-8ml4-200h.png"
            className="personalprivate-pasted-image"
            width={103}
            height={84}
          />
          <div className="personalprivate-container01">
            <img alt="image" src="/playground_assets/211818_search_icon.svg" className="personalprivate-image" />
            <input type="text" placeholder="請輸入關鍵字" className="personalprivate-input input" />
          </div>
          <div data-thq="thq-navbar-nav" data-role="Nav" className="personalprivate-desktop-menu">
            <nav data-thq="thq-navbar-nav-links" data-role="Nav" className="personalprivate-nav">
              <button className="personalprivate-view button">
                <span className="personalprivate-text">創作文章</span>
              </button>
              <div data-thq="thq-dropdown" className="personalprivate-thq-dropdown list-item">
                <div data-thq="thq-dropdown-toggle" className="personalprivate-dropdown-toggle">
                  <button className="personalprivate-view1 button">
                    <img
                      alt="image"
                      src="https://ih1.redbubble.net/image.3114059041.7813/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
                      loading="lazy"
                      className="personalprivate-image1"
                    />
                    <span className="personalprivate-text01">BT21_RJ012525</span>
                  </button>
                  <div data-thq="thq-dropdown-arrow" className="personalprivate-dropdown-arrow"></div>
                </div>
                <ul data-thq="thq-dropdown-list" className="personalprivate-dropdown-list">
                  <li data-thq="thq-dropdown" className="personalprivate-dropdown list-item"></li>
                  <li data-thq="thq-dropdown" className="personalprivate-dropdown1 list-item">
                    <div data-thq="thq-dropdown-toggle" className="personalprivate-dropdown-toggle1">
                      <span className="personalprivate-text02">我的個人主頁</span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="personalprivate-dropdown2 list-item">
                    <div data-thq="thq-dropdown-toggle" className="personalprivate-dropdown-toggle2">
                      <span className="personalprivate-text03">我的錢包</span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="personalprivate-dropdown3 list-item">
                    <div data-thq="thq-dropdown-toggle" className="personalprivate-dropdown-toggle3">
                      <span className="personalprivate-text04">設定</span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="personalprivate-dropdown4 list-item">
                    <div data-thq="thq-dropdown-toggle" className="personalprivate-dropdown-toggle4">
                      <span className="personalprivate-text05">登出</span>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="personalprivate-burger-menu">
            <button className="button personalprivate-button">
              <svg viewBox="0 0 1024 1024" className="personalprivate-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="personalprivate-mobile-menu">
            <div data-thq="thq-mobile-menu-nav" data-role="Nav" className="personalprivate-nav1">
              <div className="personalprivate-container02">
                <span className="personalprivate-logo">Character</span>
                <div data-thq="thq-close-menu" className="personalprivate-menu-close">
                  <svg viewBox="0 0 1024 1024" className="personalprivate-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav data-thq="thq-mobile-menu-nav-links" data-role="Nav" className="personalprivate-nav2">
                <span className="personalprivate-text06">About</span>
                <span className="personalprivate-text07">Features</span>
                <span className="personalprivate-text08">Features</span>
                <span className="personalprivate-text09">Pricing</span>
                <span className="personalprivate-text10">Team</span>
                <span className="personalprivate-text11">Blog</span>
              </nav>
              <div className="personalprivate-container03">
                <button className="personalprivate-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="personalprivate-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="personalprivate-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="personalprivate-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="personalprivate-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
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
                <button className="personalprivate-button1 button">編輯個人資料</button>
              </div>
            </div>
          </div>
        </section>
        <section className="personalprivate-collection">
          <div className="personalprivate-container12">
            <button className="personalprivate-button2 button">個人文章</button>
            <button className="personalprivate-button3 button">收花紀錄</button>
            <button type="button" className="personalprivate-button4 button">
              我的花
            </button>
          </div>
          <Component1 rootClassName="component1-root-class-name"></Component1>
        </section>
        <section className="personalprivate-collection1"></section>
        <footer className="personalprivate-footer">
          <div className="personalprivate-main">
            <div className="personalprivate-branding">
              <div className="personalprivate-heading">
                <h2 className="personalprivate-logo1">Character</h2>
                <p className="personalprivate-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore.
                </p>
              </div>
              <div className="personalprivate-socials">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="personalprivate-twitter social button"
                >
                  <img alt="image" src="/playground_assets/twitter.svg" className="personalprivate-image5" />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="personalprivate-discord social button"
                >
                  <img alt="image" src="/playground_assets/discord.svg" className="personalprivate-image6" />
                </a>
              </div>
            </div>
            <div className="personalprivate-links">
              <div className="personalprivate-list">
                <h3 className="personalprivate-heading1">Site</h3>
                <div className="personalprivate-items">
                  <button className="personalprivate-link button-clean button">About</button>
                  <button className="personalprivate-link1 button-clean button">Collection</button>
                  <button className="personalprivate-link2 button-clean button">Roadmap</button>
                  <button className="personalprivate-link3 button-clean button">Features</button>
                </div>
              </div>
              <div className="personalprivate-list1">
                <h3 className="personalprivate-heading2">Company</h3>
                <div className="personalprivate-items1">
                  <button className="personalprivate-link4 button-clean button">Team</button>
                  <button className="personalprivate-link5 button-clean button">Press</button>
                  <button className="personalprivate-link6 button-clean button">Terms</button>
                  <button className="personalprivate-link7 button-clean button">Limitations</button>
                  <button className="personalprivate-link8 button-clean button">Licenses</button>
                </div>
              </div>
            </div>
            <div className="personalprivate-socials1">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="personalprivate-twitter1 social button"
              >
                <img alt="image" src="/playground_assets/twitter.svg" className="personalprivate-image7" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="personalprivate-discord1 social button"
              >
                <img alt="image" src="/playground_assets/discord.svg" className="personalprivate-image8" />
              </a>
            </div>
          </div>
          <span className="personalprivate-copyright">© 2022 Character. All Rights Reserved.</span>
        </footer>
        <div>
          {/* <DangerousHTML
            html={`<script>
 /*
  Accordion - Code Embed
  
  const accordionContainers = document.querySelectorAll("[data-role="accordion-container"]"); // All accordion containers
  const accordionContents = document.querySelectorAll("[data-role="accordion-content"]"); // All accordion content
  const accordionIconsClosed = document.querySelectorAll("[data-role="accordion-icon-closed"]"); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll("[data-role="accordion-icon-open"]"); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
          ></DangerousHTML> */}
        </div>
        <div className="personalprivate-container13"></div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Personalprivate;
