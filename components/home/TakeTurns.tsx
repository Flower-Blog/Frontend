import PropTypes from "prop-types";
import React from "react";

const TakeTurns = (props: any) => {
  return (
    <>
      <div className={`firstpart-container ${props.rootClassName} `}>
        <div className="firstpart-content">
          <div className="firstpart-main">
            <div className="firstpart-heading">
              <h2 className="firstpart-header">{props.Header}</h2>
            </div>
            <button className="firstpart-view button">
              <img alt={props.pastedImage_alt} src={props.pastedImage_src} className="firstpart-pasted-image" />
              <span className="firstpart-text">{props.text}</span>
            </button>
            <div className="firstpart-container1"></div>
          </div>
        </div>
        <div className="firstpart-content1">
          <div className="firstpart-main1">
            <div className="firstpart-heading1">
              <h2 className="firstpart-header1">{props.Header1}</h2>
            </div>
            <div className="firstpart-container2"></div>
          </div>
        </div>
      </div>
      <style>
        {`
          .firstpart-container {
            width: 100%;
            height: 562px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .firstpart-content {
            gap: var(--dl-space-space-twounits);
            width: 1179px;
            display: none;
            overflow: hidden;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-color: #ff7f66;
          }
          .firstpart-main {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .firstpart-heading {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .firstpart-header {
            width: 966px;
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 108px;
          }
          .firstpart-view {
            width: 165px;
            height: 68px;
            display: flex;
            flex-direction: row;
            background-color: #ffcf77;
          }
          .firstpart-pasted-image {
            width: 44px;
            height: 39px;
          }
          .firstpart-text {
            font-size: 32px;
            align-self: center;
            font-style: normal;
            font-family: Arial Black;
            font-weight: 900;
          }
          .firstpart-container1 {
            flex: 0 0 auto;
            width: 1173px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .firstpart-content1 {
            gap: var(--dl-space-space-twounits);
            width: 1179px;
            display: flex;
            overflow: hidden;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-color: #ff7f66;
          }
          .firstpart-main1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .firstpart-heading1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .firstpart-header1 {
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 108px;
          }
          .firstpart-container2 {
            flex: 0 0 auto;
            width: 1173px;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }

          @media (max-width: 991px) {
            .firstpart-content {
              width: 100%;
            }
            .firstpart-heading {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .firstpart-content1 {
              width: 100%;
            }
            .firstpart-heading1 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .firstpart-content {
              width: 100%;
              padding-top: var(--dl-space-space-threeunits);
            }
            .firstpart-main {
              gap: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .firstpart-heading {
              gap: var(--dl-space-space-unit);
            }
            .firstpart-header {
              font-size: 36px;
              line-height: 43px;
            }
            .firstpart-content1 {
              width: 100%;
              padding-top: var(--dl-space-space-threeunits);
            }
            .firstpart-main1 {
              gap: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .firstpart-heading1 {
              gap: var(--dl-space-space-unit);
            }
            .firstpart-header1 {
              font-size: 36px;
              line-height: 43px;
            }
          }
        `}
      </style>
    </>
  );
};

TakeTurns.defaultProps = {
  Header: "Create your Frist",
  text: "登入",
  pastedImage_alt: "pastedImage",
  rootClassName: "",
  text1: "登入",
  pastedImage_src1:
    "https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c43436a5-27bc-43a8-a484-27fb8cb5d5fa/de9be7ad-3ef2-4d55-b2ec-d0f665ca0e27?org_if_sml=13850",
  pastedImage_src: "/playground_assets/pastedimage-95s-200h.png",
  pastedImage_alt1: "pastedImage",
  Header1: "Create your Articles now",
};

TakeTurns.propTypes = {
  Header: PropTypes.string,
  text: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  pastedImage_src1: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  Header1: PropTypes.string,
};

export default TakeTurns;
