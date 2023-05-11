import PropTypes from "prop-types";
import React from "react";

const Comments1 = props => {
  return (
    <>
      <div className={`comments1-container ${props.rootClassName} `}>
        <div className="comments1-container1">
          <div className="comments1-container2">
            <div className="comments1-container3">
              <img alt={props.image_alt} src={props.image_src} loading="lazy" className="comments1-image" />
              <div className="comments1-container4">
                <span className="comments1-text">{props.text}</span>
              </div>
              <button className="comments1-button button">{props.button}</button>
            </div>
            <div className="comments1-container5">
              <span>{props.text2}</span>
              <div className="comments1-container6">
                <img alt={props.pastedImage_alt} src={props.pastedImage_src} className="comments1-pasted-image" />
                <span className="comments1-text2">{props.text1}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .comments1-container {
            width: 100%;
            height: 138px;
            display: flex;
            position: relative;
            align-items: center;
            margin-bottom: 10px;
            flex-direction: column;
          }
          .comments1-container1 {
            width: 1074px;
            height: 133px;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 5px 5px 0px 0px #131212;
            align-items: center;
            justify-content: space-between;
            background-color: var(--dl-color-threefish-bll);
          }
          .comments1-container2 {
            flex: 0 0 auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .comments1-container3 {
            width: 100%;
            height: 85px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .comments1-image {
            width: 50px;
            height: 50px;
            margin-top: 0px;
            object-fit: cover;
            margin-right: 10px;
            border-radius: var(--dl-radius-radius-round);
          }
          .comments1-container4 {
            width: 898px;
            height: 65px;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 2px;
            padding-left: var(--dl-space-space-halfunit);
            background-color: #ffffff;
          }
          .comments1-text {
            text-align: center;
          }
          .comments1-button {
            margin-left: var(--dl-space-space-unit);
            background-color: #ff9077;
          }
          .comments1-container5 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .comments1-container6 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: 10px;
          }
          .comments1-pasted-image {
            width: 20px;
            height: 20px;
          }
          .comments1-text2 {
            height: auto;
          }
        `}
      </style>
    </>
  );
};

Comments1.defaultProps = {
  pastedImage_src: "/playground_assets/pastedimage-uw-200h.png",
  button: "讚",
  rootClassName: "",
  text2: "202304/04 17:15",
  pastedImage_alt: "pastedImage",
  image_src: "https://pbs.twimg.com/ext_tw_video_thumb/1148064582071545858/pu/img/-asywjIzDbmCV3WS.jpg:large",
  text: "笑死，我家狗狗也差不多",
  text1: "12",
  image_alt: "image",
};

Comments1.propTypes = {
  pastedImage_src: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
};

export default Comments1;
