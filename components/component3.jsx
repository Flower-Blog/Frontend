import PropTypes from "prop-types";
import React from "react";

const Component3 = props => {
  return (
    <>
      <div className="component3-container">
        <div className="component3-container1">
          <div className="component3-container2">
            <h1 className="component3-text">{props.heading1}</h1>
            <h1 className="component3-text1">{props.heading}</h1>
          </div>
          <form className="component3-form">
            <div className="component3-container3">
              <div className="component3-container4">
                <div className="component3-container5">
                  <img alt={props.image_alt1} src={props.image_src1} className="component3-image" />
                  <img alt={props.image_alt2} src={props.image_src2} className="component3-image1" />
                  <img alt={props.image_alt3} src={props.image_src3} className="component3-image2" />
                </div>
                <div className="component3-container6">
                  <img alt={props.image_alt11} src={props.image_src11} className="component3-image3" />
                  <img alt={props.image_alt21} src={props.image_src21} className="component3-image4" />
                  <img alt={props.image_alt31} src={props.image_src31} className="component3-image5" />
                </div>
                <div className="component3-container7">
                  <img alt={props.image_alt12} src={props.image_src12} className="component3-image6" />
                  <img alt={props.image_alt22} src={props.image_src22} className="component3-image7" />
                  <img alt={props.image_alt32} src={props.image_src32} className="component3-image8" />
                </div>
              </div>
              <div className="component3-container8">
                <button className="component3-button button">
                  <span className="component3-text2">{props.text1}</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .component3-container {
            width: 100%;
            height: 594px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .component3-container1 {
            width: 479px;
            height: auto;
            display: flex;
            box-shadow: 10px 10px 0px 0px #8c8585;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 3px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-color: #ffcf77;
          }
          .component3-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            text-align: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .component3-text {
            width: 100%;
            margin-top: 10px;
            text-align: center;
            padding-left: 0px;
          }
          .component3-text1 {
            width: 100%;
            height: 38px;
            margin-top: 10px;
            text-align: center;
            margin-bottom: 0;
          }
          .component3-form {
            width: 100%;
            height: 347px;
            display: flex;
            align-self: center;
          }
          .component3-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .component3-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .component3-container5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .component3-image {
            width: 100px;
            object-fit: cover;
          }
          .component3-image1 {
            width: 100px;
            object-fit: cover;
          }
          .component3-image2 {
            width: 100px;
            object-fit: cover;
          }
          .component3-container6 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .component3-image3 {
            width: 100px;
            object-fit: cover;
          }
          .component3-image4 {
            width: 100px;
            object-fit: cover;
          }
          .component3-image5 {
            width: 100px;
            object-fit: cover;
          }
          .component3-container7 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .component3-image6 {
            width: 100px;
            object-fit: cover;
          }
          .component3-image7 {
            width: 100px;
            object-fit: cover;
          }
          .component3-image8 {
            width: 100px;
            object-fit: cover;
          }
          .component3-container8 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .component3-button {
            width: 94px;
            align-self: center;
            background-color: var(--dl-color-threefish-orange);
          }
          .component3-text2 {
            width: 100%;
            font-style: normal;
            font-weight: 800;
          }
        `}
      </style>
    </>
  );
};

Component3.defaultProps = {
  image_alt12: "image",
  image_src32: "/playground_assets/flower3-200h.png",
  image_src11: "/playground_assets/flower2-200h.png",
  image_alt32: "image",
  image_alt3: "image",
  image_alt22: "image",
  image_alt21: "image",
  heading: "選擇一種",
  image_src12: "/playground_assets/flower2-200h.png",
  image_src2: "/playground_assets/flower11-200h.png",
  image_src31: "/playground_assets/flower3-200h.png",
  image_alt1: "image",
  heading2: "贈送文章：我的狗狗",
  text1: "確認",
  image_src22: "/playground_assets/flower11-200h.png",
  image_alt2: "image",
  heading1: "選擇第一朵自己的花",
  image_alt31: "image",
  image_alt11: "image",
  image_src1: "/playground_assets/flower2-200h.png",
  image_src3: "/playground_assets/flower3-200h.png",
  image_src21: "/playground_assets/flower11-200h.png",
};

Component3.propTypes = {
  image_alt12: PropTypes.string,
  image_src32: PropTypes.string,
  image_src11: PropTypes.string,
  image_alt32: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt22: PropTypes.string,
  image_alt21: PropTypes.string,
  heading: PropTypes.string,
  image_src12: PropTypes.string,
  image_src2: PropTypes.string,
  image_src31: PropTypes.string,
  image_alt1: PropTypes.string,
  heading2: PropTypes.string,
  text1: PropTypes.string,
  image_src22: PropTypes.string,
  image_alt2: PropTypes.string,
  heading1: PropTypes.string,
  image_alt31: PropTypes.string,
  image_alt11: PropTypes.string,
  image_src1: PropTypes.string,
  image_src3: PropTypes.string,
  image_src21: PropTypes.string,
};

export default Component3;
