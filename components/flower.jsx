import PropTypes from "prop-types";
import React from "react";

const Flower = props => {
  return (
    <>
      <div className={`flower-container ${props.rootClassName} `}>
        <div className="flower-container1">
          <img alt={props.image_alt} src="/playground_assets/flower1-300h.png" className="flower-image" />
          <h1 className="flower-text">{props.heading}</h1>
        </div>
      </div>
      <style jsx>
        {`
          .flower-container {
            width: 250px;
            height: 290px;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-danger-700);
          }
          .flower-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            box-shadow: 10px 10px 0px 0px #0a0a0a;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .flower-image {
            width: 100%;
            height: 260px;
            object-fit: cover;
          }
          .flower-text {
            width: 100%;
            height: 39px;
            align-self: center;
            text-align: center;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: #ffffff;
          }
        `}
      </style>
    </>
  );
};

Flower.defaultProps = {
  text: "以花為貌、以鳥為聲喜歡玫瑰花的人浪漫、熱情、性格開朗，對生活積極主動。",
  image_src: "https://play.teleporthq.io/static/svg/default-img.svg",
  heading: "紅玫瑰5/5",
  rootClassName: "",
  image_alt: "image",
};

Flower.propTypes = {
  text: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
};

export default Flower;
