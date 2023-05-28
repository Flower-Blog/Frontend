import PropTypes from "prop-types";
import React from "react";

const FlowerRecord = (props: any) => {
  return (
    <>
      <div className={`component1-container ${props.rootClassName} `}>
        <div className="component1-container1">
          <h1 className="component1-text">{props.heading}</h1>
          <img alt={props.image_alt} src={props.image_src} className="component1-image" />
        </div>
        <div className="component1-container2">
          <h1 className="component1-text1">{props.heading2}</h1>
          <img alt={props.image_alt2} src={props.image_src2} className="component1-image1" />
        </div>
        <div className="component1-container3">
          <h1 className="component1-text2">{props.heading1}</h1>
          <img alt={props.image_alt1} src={props.image_src1} className="component1-image2" />
        </div>
      </div>
      <style jsx>
        {`
          .component1-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 10px;
            flex-direction: column;
            padding-bottom: 10px;
            justify-content: flex-start;
          }
          .component1-container1 {
            width: 964px;
            height: 121px;
            display: flex;
            box-shadow: 5px 5px 0px 0px #0c0b0b;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 2px;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: #f9f1e1;
          }
          .component1-text {
            width: 721px;
            height: 34px;
            text-align: center;
          }
          .component1-image {
            width: 80px;
            height: 80px;
            object-fit: cover;
          }
          .component1-container2 {
            width: 867px;
            height: 121px;
            display: flex;
            box-shadow: 5px 5px 0px 0px #0c0b0b;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 2px;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: #f9f1e1;
          }
          .component1-text1 {
            width: 649px;
            height: 41px;
            text-align: center;
          }
          .component1-image1 {
            width: 80px;
            height: 80px;
            object-fit: cover;
          }
          .component1-container3 {
            width: 1021px;
            height: 121px;
            display: flex;
            box-shadow: 5px 5px 0px 0px #0c0b0b;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 2px;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: #f9f1e1;
          }
          .component1-text2 {
            width: 868px;
            height: 42px;
            text-align: center;
          }
          .component1-image2 {
            width: 80px;
            height: 80px;
            object-fit: cover;
          }
        `}
      </style>
    </>
  );
};

FlowerRecord.defaultProps = {
  heading: "BT21_RJ015263 對 我家狗狗 喜歡並贈送一朵",
  rootClassName: "",
  heading2: "BT21_RJ015263 對 花語 喜歡並贈送一朵",
  image_alt: "image",
  heading1: "BT21_RJ015263 對 做個人部落格(Day1) 喜歡並贈送一朵",
  image_alt2: "image",
  image_src2: "/playground_assets/flower1-200h.png",
  image_src: "/playground_assets/flower1-200h.png",
  image_src1: "/playground_assets/flower1-200h.png",
  image_alt1: "image",
};

FlowerRecord.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  heading2: PropTypes.string,
  image_alt: PropTypes.string,
  heading1: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src2: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
};

export default FlowerRecord;
