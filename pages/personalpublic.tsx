// import DangerousHTML from "dangerous-html/react";
import Head from "next/head";
import Image from "next/image";
import React from "react";

import BlogPostCard21 from "../components/blog-post-card21";

const Personalpublic = () => {
  return (
    <>
      <div className="personalpublic-container">
        <Head>
          <title>personalpublic - Flower</title>
          <meta property="og:title" content="personalpublic - Flower" />
        </Head>
        <header data-thq="thq-navbar" className="personalpublic-navbar Content">
          <Image
            alt="pastedImage"
            src="/playground_assets/pastedimage-8ml4-200h.png"
            className="personalpublic-pasted-image"
            width={103}
            height={84}
          />
          <div className="personalpublic-container01">
            <img alt="image" src="/playground_assets/211818_search_icon.svg" className="personalpublic-image" />
            <input type="text" placeholder="請輸入關鍵字" className="personalpublic-input input" />
          </div>
          <div data-thq="thq-navbar-nav" data-role="Nav" className="personalpublic-desktop-menu">
            <nav data-thq="thq-navbar-nav-links" data-role="Nav" className="personalpublic-nav">
              <button className="personalpublic-view button">
                <span className="personalpublic-text">創作文章</span>
              </button>
              <div data-thq="thq-dropdown" className="personalpublic-thq-dropdown list-item">
                <div data-thq="thq-dropdown-toggle" className="personalpublic-dropdown-toggle">
                  <button className="personalpublic-view1 button">
                    <img
                      alt="image"
                      src="https://ih1.redbubble.net/image.3114059041.7813/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
                      loading="lazy"
                      className="personalpublic-image01"
                    />
                    <span className="personalpublic-text01">BT21_RJ012525</span>
                  </button>
                  <div data-thq="thq-dropdown-arrow" className="personalpublic-dropdown-arrow"></div>
                </div>
                <ul data-thq="thq-dropdown-list" className="personalpublic-dropdown-list">
                  <li data-thq="thq-dropdown" className="personalpublic-dropdown list-item"></li>
                  <li data-thq="thq-dropdown" className="personalpublic-dropdown1 list-item">
                    <div data-thq="thq-dropdown-toggle" className="personalpublic-dropdown-toggle1">
                      <span className="personalpublic-text02">我的個人主頁</span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="personalpublic-dropdown2 list-item">
                    <div data-thq="thq-dropdown-toggle" className="personalpublic-dropdown-toggle2">
                      <span className="personalpublic-text03">我的錢包</span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="personalpublic-dropdown3 list-item">
                    <div data-thq="thq-dropdown-toggle" className="personalpublic-dropdown-toggle3">
                      <span className="personalpublic-text04">設定</span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="personalpublic-dropdown4 list-item">
                    <div data-thq="thq-dropdown-toggle" className="personalpublic-dropdown-toggle4">
                      <span className="personalpublic-text05">登出</span>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="personalpublic-burger-menu">
            <button className="button personalpublic-button">
              <svg viewBox="0 0 1024 1024" className="personalpublic-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="personalpublic-mobile-menu">
            <div data-thq="thq-mobile-menu-nav" data-role="Nav" className="personalpublic-nav1">
              <div className="personalpublic-container02">
                <span className="personalpublic-logo">Character</span>
                <div data-thq="thq-close-menu" className="personalpublic-menu-close">
                  <svg viewBox="0 0 1024 1024" className="personalpublic-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav data-thq="thq-mobile-menu-nav-links" data-role="Nav" className="personalpublic-nav2">
                <span className="personalpublic-text06">About</span>
                <span className="personalpublic-text07">Features</span>
                <span className="personalpublic-text08">Features</span>
                <span className="personalpublic-text09">Pricing</span>
                <span className="personalpublic-text10">Team</span>
                <span className="personalpublic-text11">Blog</span>
              </nav>
              <div className="personalpublic-container03">
                <button className="personalpublic-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="personalpublic-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="personalpublic-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="personalpublic-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="personalpublic-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <section className="personalpublic-description">
          <div className="personalpublic-container04">
            <div className="personalpublic-container05">
              <div className="personalpublic-container06">
                <img
                  alt="image"
                  src="https://ih1.redbubble.net/image.3114059041.7813/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
                  loading="lazy"
                  className="personalpublic-image02"
                />
              </div>
            </div>
            <div className="personalpublic-container07">
              <div className="personalpublic-container08">
                <div className="personalpublic-container09">
                  <span className="personalpublic-text12">BT21_RJ012525</span>
                  <img alt="image" src="/playground_assets/flower11-200h.png" className="personalpublic-image03" />
                </div>
                <div className="personalpublic-container10">
                  <img
                    alt="image"
                    src="/playground_assets/pastedimage-95s-200h.png"
                    className="personalpublic-image04"
                  />
                  <span className="personalpublic-text13">0x4202043D9ff98a4e8C64b075dBF4Cb3eE5EfF528</span>
                </div>
              </div>
              <div className="personalpublic-container11">
                <span>
                  <span> RJ喜歡做菜也喜歡享受美食。</span>
                  <br></br>
                  <span>用蓬鬆的毛髮和一顆溫暖的心撫慰每個人。</span>
                </span>
              </div>
            </div>
          </div>
        </section>
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
        <footer className="personalpublic-footer">
          <div className="personalpublic-main">
            <div className="personalpublic-branding">
              <div className="personalpublic-heading">
                <h2 className="personalpublic-logo1">Character</h2>
                <p className="personalpublic-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore.
                </p>
              </div>
              <div className="personalpublic-socials">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="personalpublic-twitter social button"
                >
                  <img alt="image" src="/playground_assets/twitter.svg" className="personalpublic-image12" />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="personalpublic-discord social button"
                >
                  <img alt="image" src="/playground_assets/discord.svg" className="personalpublic-image13" />
                </a>
              </div>
            </div>
            <div className="personalpublic-links">
              <div className="personalpublic-list">
                <h3 className="personalpublic-heading1">Site</h3>
                <div className="personalpublic-items">
                  <button className="personalpublic-link button-clean button">About</button>
                  <button className="personalpublic-link1 button-clean button">Collection</button>
                  <button className="personalpublic-link2 button-clean button">Roadmap</button>
                  <button className="personalpublic-link3 button-clean button">Features</button>
                </div>
              </div>
              <div className="personalpublic-list1">
                <h3 className="personalpublic-heading2">Company</h3>
                <div className="personalpublic-items1">
                  <button className="personalpublic-link4 button-clean button">Team</button>
                  <button className="personalpublic-link5 button-clean button">Press</button>
                  <button className="personalpublic-link6 button-clean button">Terms</button>
                  <button className="personalpublic-link7 button-clean button">Limitations</button>
                  <button className="personalpublic-link8 button-clean button">Licenses</button>
                </div>
              </div>
            </div>
            <div className="personalpublic-socials1">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="personalpublic-twitter1 social button"
              >
                <img alt="image" src="/playground_assets/twitter.svg" className="personalpublic-image14" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="personalpublic-discord1 social button"
              >
                <img alt="image" src="/playground_assets/discord.svg" className="personalpublic-image15" />
              </a>
            </div>
          </div>
          <span className="personalpublic-copyright">© 2022 Character. All Rights Reserved.</span>
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
        <div className="personalpublic-container23"></div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Personalpublic;
