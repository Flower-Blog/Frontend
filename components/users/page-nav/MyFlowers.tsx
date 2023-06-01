import React, { useEffect, useState } from "react";

import { apiUserGetCreaterFlower } from "@/components/api";
import Flower from "@/components/Flower";

interface Flower {
  id: number;
  name: string;
  language: string;
  img: string;
}

export default function MyFlowers(props: any) {
  // TODO: Handle funtion
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [myFlower, setMyFlower] = useState<object[]>([]);

  useEffect(() => {
    fetch("/api/flower/flower")
      .then(res => res.json())
      .then(data => setFlowers(data));
    apiUserGetCreaterFlower(props.username).then((res: any) => {
      setMyFlower(res.data.flowerRecords);
    });
  }, [props.username]);

  return (
    <>
      <div className={`component-container ${props.rootClassName} `}>
        <div className="component-blog">
          <div className="grid grid-cols-4 gap-10">
            {myFlower.map((myFlower: any, index: any) => (
              <Flower key={index} flowerCount={myFlower.flowerCount} flowerPic={flowers[index].img} />
            ))}
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
}
