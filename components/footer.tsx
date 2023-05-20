import React from "react";

const footer = () => {
  return (
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
  );
};

export default footer;
