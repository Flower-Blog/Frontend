import { title } from "process";
import React, { useEffect, useState } from "react";

import { _apiCheckJwt, apiUserGetUserData } from "@/components/api";

interface receiveFlowersRecords {
  name: string;
  flowerId: number;
  createdAt: string;
}

const FlowerRecord = (props: any) => {
  // TODO: Handle funcion
  const [receiveFlowersRecords, setreceiveFlowersRecords] = useState<receiveFlowersRecords[]>([]);
  const [flowerPic, setflowerPic] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resJwt = await _apiCheckJwt();
        const jwt = resJwt.data.jwt;
        const resUserData = await apiUserGetUserData(jwt);
        const data = resUserData.data.receiveFlowersRecords;
        // const title = resUserData.data.receiveFlowersRecords.article.title;
        setreceiveFlowersRecords(data);
        // 在這裡處理獲取到的資料
      } catch (error) {
        // 在這裡處理錯誤
      }
    };

    fetchData();
  }, []);

  console.log(receiveFlowersRecords);

  for (let i = 0; i < receiveFlowersRecords.length; i++) {
    flowerimg(receiveFlowersRecords[i].flowerId);
  }

  function flowerimg(id: any) {
    if (id === 1) {
      setflowerPic("1rose");
    } else if (id === 2) {
      setflowerPic("2sunflower");
    } else if (id === 3) {
      setflowerPic("3tulip");
    } else if (id === 4) {
    } else if (id === 5) {
    } else {
      setflowerPic("defaultFlower");
    }
  }

  return (
    <>
      <div className={`component1-container ${props.rootClassName} `}>
        {/* {receiveFlowersRecords.article.title} */}
        {receiveFlowersRecords.map((record, index) => (
          <div key={index} className="component1-container1">
            <h1 className="component1-text">
              {record.name} 對 {title} 喜歡並贈送一朵
            </h1>
            <img alt="花" src={flowerPic} className="component1-image" />
          </div>
        ))}
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

export default FlowerRecord;
