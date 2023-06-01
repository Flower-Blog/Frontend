import React from "react";

export default function Flower(props: any) {
  return (
    <>
      <div className="flower-container">
        <div className="flower-container1">
          {props.flowerCount == 0 ? (
            <img alt="花" src={props.flowerPic} className="flower-image grayscale" />
          ) : (
            <img alt="花" src={props.flowerPic} className="flower-image" />
          )}
          <h1 className="flower-text text-lg font-bold">5/{props.flowerCount}</h1>
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
}
