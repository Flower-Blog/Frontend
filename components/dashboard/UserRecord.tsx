import PropTypes from "prop-types";
import React from "react";

const UserRecord = (props: any) => {
  return (
    <>
      <div className={`component4-container ${props.rootClassName} `}>
        <div className="component4-container1">
          <div className="component4-container2">
            <button className="component4-button button">{props.button}</button>
            <button className="component4-button1 button">{props.button1}</button>
          </div>
          <div className="component4-container3">
            <div className="component4-container4">
              <img alt={props.image_alt} src={props.image_src} className="component4-image" />
              <h1 className="component4-text">{props.heading}</h1>
              <span>{props.text1}</span>
            </div>
            <div className="component4-container5">
              <img alt={props.image_alt1} src={props.image_src1} className="component4-image1" />
              <h1 className="component4-text2">{props.heading1}</h1>
              <span>{props.text}</span>
            </div>
            <div className="component4-container6">
              <img alt={props.image_alt2} src={props.image_src2} className="component4-image2" />
              <h1 className="component4-text4">{props.heading11}</h1>
              <span>{props.text2}</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .component4-container {
            width: 995px;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .component4-container1 {
            flex: 0 0 auto;
            width: 995px;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .component4-container2 {
            width: 100%;
            height: 107px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .component4-button {
            width: 208px;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
          .component4-button1 {
            width: 208px;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
          .component4-container3 {
            width: 100%;
            height: 369px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .component4-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 0px 0px #1d1c1c;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-left: 0px;
            padding-top: var(--dl-space-space-halfunit);
            margin-right: 0px;
            padding-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #ff9066;
          }
          .component4-image {
            width: 50px;
            height: 55px;
            object-fit: cover;
            margin-right: 10px;
          }
          .component4-text {
            margin-right: 20px;
          }
          .component4-container5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            box-shadow: 5px 5px 0px 0px #1d1c1c;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            padding-top: 10px;
            padding-left: 10px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: 10px;
            padding-bottom: 10px;
            background-color: #ff9066;
          }
          .component4-image1 {
            width: 50px;
            height: 55px;
            object-fit: cover;
            margin-right: 10px;
          }
          .component4-text2 {
            margin-right: 20px;
          }
          .component4-container6 {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            box-shadow: 5px 5px 0px 0px #1d1c1c;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            padding-top: 10px;
            padding-left: 10px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: 10px;
            padding-bottom: 10px;
            background-color: #ff9066;
          }
          .component4-image2 {
            width: 50px;
            height: 55px;
            object-fit: cover;
            margin-right: 10px;
          }
          .component4-text4 {
            margin-right: 20px;
          }
        `}
      </style>
    </>
  );
};

UserRecord.defaultProps = {
  image_alt1: "image",
  text1: "linr1456@gmail.com",
  button: "總使用者人數：110",
  image_alt2: "image",
  heading1: "dc780be7",
  image_src: "/playground_assets/group%20110571.svg",
  text2: "tedd@gmasil.com",
  rootClassName: "",
  text: "dv125@gmail.com",
  button1: "今日加入使用者：5",
  image_src2: "/playground_assets/group%20110571.svg",
  image_src1: "/playground_assets/group%20110561.svg",
  heading11: "59e8e39d",
  heading: "917D5D8",
  image_alt: "image",
};

UserRecord.propTypes = {
  image_alt1: PropTypes.string,
  text1: PropTypes.string,
  button: PropTypes.string,
  image_alt2: PropTypes.string,
  heading1: PropTypes.string,
  image_src: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  button1: PropTypes.string,
  image_src2: PropTypes.string,
  image_src1: PropTypes.string,
  heading11: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
};

export default UserRecord;
