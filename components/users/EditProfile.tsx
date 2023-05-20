import PropTypes from "prop-types";
import React from "react";

const Component6 = (props: any) => {
  return (
    <>
      <div className="component6-container">
        <div className="component6-container01">
          <div className="component6-container02">
            <h1 className="component6-text">{props.heading5}</h1>
          </div>
          <div className="component6-container03">
            <h1>{props.heading31}</h1>
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-bf3c8bcab5d50299e00facb2df498451-lq"
              loading="eager"
              className="component6-image"
              alt=""
            />
          </div>
          <div className="component6-container04">
            <div className="component6-container05">
              <h1>{props.heading3}</h1>
            </div>
            <img
              alt="image"
              src="https://ih1.redbubble.net/image.3114059041.7813/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
              className="component6-image1"
            />
          </div>
          <div className="component6-container06">
            <h1>{props.heading}</h1>
            <input type="text" placeholder={props.textinput_placeholder} className="input" />
          </div>
          <div className="component6-container07">
            <h1>{props.heading6}</h1>
            <input type="text" placeholder={props.textinput_placeholder1} className="input" />
          </div>
          <div className="component6-container08">
            <h1>{props.heading1}</h1>
            <textarea placeholder={props.textarea_placeholder} className="component6-textarea textarea"></textarea>
          </div>
          <div className="component6-container09">
            <button className="component6-button button">{props.button1}</button>
            <button className="component6-button1 button">{props.button}</button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .component6-container {
            width: 100%;
            height: 877px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .component6-container01 {
            width: 938px;
            height: 846px;
            display: flex;
            box-shadow: 10px 10px 0px 0px #100e0e;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: #a1c1e6;
          }
          .component6-container02 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .component6-text {
            text-align: center;
          }
          .component6-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: flex-start;
          }
          .component6-image {
            width: 747px;
            height: 107px;
            object-fit: cover;
          }
          .component6-container04 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: flex-start;
          }
          .component6-container05 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .component6-image1 {
            width: 100px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .component6-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .component6-container07 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .component6-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
          }
          .component6-textarea {
            width: 770px;
            height: 84px;
          }
          .component6-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .component6-button {
            font-style: normal;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
          }
          .component6-button1 {
            width: 86px;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 800;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            background-color: #537cb5;
          }
        `}
      </style>
    </>
  );
};

Component6.defaultProps = {
  image_src4: "",
  text: "Text",
  heading5: "編輯個人資料",
  image_alt2: "image",
  heading4: "Heading",
  heading1: "自介：",
  button1: "取消",
  button: "儲存",
  image_src1: "https://play.teleporthq.io/static/svg/default-img.svg",
  textinput_placeholder1: "BT21_RJ012525",
  textarea_placeholder1: "RJ喜歡做菜也喜歡享受美食。 用蓬鬆的毛髮和一顆溫暖的心撫慰每個人。",
  heading3: "頭貼：",
  textinput_placeholder: "BT21_RJ012@gmail.com",
  image_src3: "https://play.teleporthq.io/static/svg/default-img.svg",
  heading6: "名稱：",
  heading11: "自介：",
  heading2: "Heading",
  image_src31: "https://play.teleporthq.io/static/svg/default-img.svg",
  image_alt31: "image",
  image_alt1: "image",
  heading31: "背景：",
  textarea_placeholder: "RJ喜歡做菜也喜歡享受美食。 用蓬鬆的毛髮和一顆溫暖的心撫慰每個人。",
  image_src2: "https://play.teleporthq.io/static/svg/default-img.svg",
  image_alt3: "image",
  image_alt: "image",
  heading: "信箱：",
  image_src: "https://qph.cf2.quoracdn.net/main-qimg-bf3c8bcab5d50299e00facb2df498451-lq",
};

Component6.propTypes = {
  image_src4: PropTypes.string,
  text: PropTypes.string,
  heading5: PropTypes.string,
  image_alt2: PropTypes.string,
  heading4: PropTypes.string,
  heading1: PropTypes.string,
  button1: PropTypes.string,
  button: PropTypes.string,
  image_src1: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  textarea_placeholder1: PropTypes.string,
  heading3: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  image_src3: PropTypes.string,
  heading6: PropTypes.string,
  heading11: PropTypes.string,
  heading2: PropTypes.string,
  image_src31: PropTypes.string,
  image_alt31: PropTypes.string,
  image_alt1: PropTypes.string,
  heading31: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
};

export default Component6;
