// import DangerousHTML from "dangerous-html/react";
import Head from "next/head";
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
