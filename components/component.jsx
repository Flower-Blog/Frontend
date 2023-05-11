import PropTypes from "prop-types";
import React from "react";

import Flower from "./flower";

const AppComponent = props => {
  return (
    <>
      <div className={`component-container ${props.rootClassName} `}>
        <div className="component-blog">
          <div className="component-container1">
            <Flower rootClassName="flower-root-class-name12"></Flower>
            <Flower rootClassName="flower-root-class-name13"></Flower>
            <Flower rootClassName="flower-root-class-name14"></Flower>
            <Flower rootClassName="flower-root-class-name15"></Flower>
          </div>
          <div className="component-container2">
            <Flower rootClassName="flower-root-class-name16"></Flower>
            <Flower rootClassName="flower-root-class-name17"></Flower>
            <Flower rootClassName="flower-root-class-name18"></Flower>
            <Flower rootClassName="flower-root-class-name19"></Flower>
          </div>
          <div className="component-container3">
            <Flower rootClassName="flower-root-class-name20"></Flower>
            <Flower rootClassName="flower-root-class-name21"></Flower>
            <Flower rootClassName="flower-root-class-name22"></Flower>
            <Flower rootClassName="flower-root-class-name23"></Flower>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .component-container {
            width: 1295px;
            height: 1145px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .component-blog {
            width: 1284px;
            height: 1151px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .component-container1 {
            width: 100%;
            height: 305px;
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
            justify-content: space-between;
          }
          .component-container2 {
            width: 100%;
            height: 305px;
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
            justify-content: space-between;
          }
          .component-container3 {
            width: 100%;
            height: 305px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          @media (max-width: 767px) {
            .component-blog {
              width: 697px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .component-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  );
};

AppComponent.defaultProps = {
  rootClassName: "",
};

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
};

export default AppComponent;
