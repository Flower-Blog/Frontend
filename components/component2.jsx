import PropTypes from "prop-types";
import React from "react";

const Component2 = props => {
  return (
    <>
      <div className="component2-container">
        <div className="component2-container1">
          <div className="component2-container2">
            <h1 className="component2-text">{props.heading1}</h1>
            <h1 className="component2-text1">{props.heading2}</h1>
            <h1 className="component2-text2">{props.heading}</h1>
          </div>
          <form className="component2-form">
            <div className="component2-container3">
              <div className="component2-container4">
                <img alt={props.image_alt1} src={props.image_src1} className="component2-image" />
                <img alt={props.image_alt2} src={props.image_src2} className="component2-image1" />
                <img alt={props.image_alt3} src={props.image_src3} className="component2-image2" />
              </div>
              <button className="component2-button button">
                <span className="component2-text3">{props.text1}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .component2-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .component2-container1 {
            width: 479px;
            height: 319px;
            display: flex;
            box-shadow: 10px 10px 0px 0px #8c8585;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 3px;
            flex-direction: column;
            background-color: #ffcf77;
          }
          .component2-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            text-align: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .component2-text {
            width: 100%;
            margin-top: 10px;
            text-align: left;
            padding-left: var(--dl-space-space-halfunit);
          }
          .component2-text1 {
            width: 100%;
            text-align: left;
            padding-left: var(--dl-space-space-halfunit);
          }
          .component2-text2 {
            width: 100%;
            height: 38px;
            margin-top: 10px;
            text-align: center;
            margin-bottom: 0;
          }
          .component2-form {
            width: 100%;
            height: 347px;
            display: flex;
            align-self: center;
          }
          .component2-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
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
          .component2-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .component2-image {
            width: 100px;
            object-fit: cover;
          }
          .component2-image1 {
            width: 100px;
            object-fit: cover;
          }
          .component2-image2 {
            width: 100px;
            object-fit: cover;
          }
          .component2-button {
            width: 94px;
            align-self: center;
            background-color: var(--dl-color-threefish-orange);
          }
          .component2-text3 {
            width: 100%;
            font-style: normal;
            font-weight: 800;
          }
        `}
      </style>
    </>
  );
};

Component2.defaultProps = {
  button: "發送驗證碼\n",
  heading2: "贈送文章：我的狗狗",
  textinput_placeholder1: "填入驗證碼",
  image_alt: "image",
  text: "0x4202043D9ff98a4e8C64b075dBF4Cb3eE5EfF528",
  heading1: "贈送對象：BT21_RJ012525",
  heading: "選擇一種來贈送花",
  image_alt2: "image",
  image_src2: "/playground_assets/flower11-400h.png",
  image_alt3: "image",
  image_src3: "/playground_assets/flower3-400h.png",
  image_src1: "/playground_assets/flower2-400h.png",
  image_alt1: "image",
  image_src: "9df73fca-96b0-4d6b-b080-4471a4352ebb",
  textinput_placeholder: "填入信箱",
  text1: "送出",
};

Component2.propTypes = {
  button: PropTypes.string,
  heading2: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src3: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text1: PropTypes.string,
};

export default Component2;
