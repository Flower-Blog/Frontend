import React from "react";

import Flower from "../flower";

const AllFlowerTypes = (props: any) => {
  return (
    <>
      <div className={`component5-container ${props.rootClassName} `}>
        <div className="component5-blog">
          <div className="component5-container1">
            <Flower rootClassName="flower-root-class-name24"></Flower>
            <Flower image_src="/playground_assets/flower2-200h.png" rootClassName="flower-root-class-name25"></Flower>
            <Flower image_src="/playground_assets/flower3-200h.png" rootClassName="flower-root-class-name27"></Flower>
          </div>
          <div className="component5-container2">
            <Flower rootClassName="flower-root-class-name28"></Flower>
            <Flower rootClassName="flower-root-class-name29"></Flower>
            <Flower rootClassName="flower-root-class-name31"></Flower>
          </div>
          <div className="component5-container3">
            <Flower rootClassName="flower-root-class-name32"></Flower>
            <Flower rootClassName="flower-root-class-name33"></Flower>
            <Flower rootClassName="flower-root-class-name35"></Flower>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .component5-container {
            width: 995px;
            height: 1151px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .component5-blog {
            width: 995px;
            height: 1151px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .component5-container1 {
            width: 100%;
            height: 305px;
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
            justify-content: space-between;
          }
          .component5-container2 {
            width: 100%;
            height: 305px;
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
            justify-content: space-between;
          }
          .component5-container3 {
            width: 100%;
            height: 305px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .component5-root-class-name {
            display: none;
          }
          @media (max-width: 767px) {
            .component5-blog {
              width: 697px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .component5-blog {
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

export default AllFlowerTypes;
