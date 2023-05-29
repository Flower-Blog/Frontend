// import ErrorAlert from "@/components/alert/Error";
// import SucessAlert from "@/components/alert/Sucess";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// 送花api import { apiArticlePostflower } from "./api";
// import { useSelector } from "react-redux";

interface Flower {
  id: number;
  name: string;
  language: string;
  img: string;
}

export default function GiveFlowers(props: any) {
  // TODO: Handle funtion
  // const Creater = useSelector((state: any) => state.Creater);
  // const User = useSelector((state: any) => state.User);
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [selectedFlowerId, setSelectedFlowerId] = useState<number>(0);

  useEffect(() => {
    fetch("/api/flower/flower")
      .then(res => res.json())
      .then(data => setFlowers(data));
  }, []);

  const handleFlowerClick = (flowerId: number) => {
    setSelectedFlowerId(flowerId);
  };

  const handleConfirmClick = () => {
    setOpen(false);
  };

  // TODO: UI funtion
  const [open, setOpen] = useState(false);
  const [maxWidth] = useState<DialogProps["maxWidth"]>("md");
  // const [flowerId, setflowerId] = useState(0);
  // const [success, setSuccess] = useState(false);
  // const [error, setFailure] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>
        <Image
          alt="pastedImage"
          src="/playground_assets/pastedimage-p02-200h.png"
          className="page1-pasted-image1"
          width={38}
          height={35}
        />
      </button>
      <Dialog
        maxWidth={maxWidth}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-title"
        className="fixed h-screen w-screen "
      >
        <div className="component2-container">
          <div className="component2-container1">
            <div className="component2-container2">
              <h1 className="component2-text">贈送對象：{props.createname}</h1>
              <h1 className="component2-text1">贈送文章：{props.title}</h1>
              <h1 className="component2-text2">選擇一種來贈送花</h1>
            </div>
            <div className="component2-form">
              <div className="component2-container3">
                <div className="component2-container4">
                  {flowers.map(flower => (
                    <button
                      className="focus:ring-red-500 focus:outline-none focus:ring-4"
                      key={flower.id}
                      onClick={() => handleFlowerClick(flower.id)}
                    >
                      <img alt="" src={flower.img} className="component3-image" />
                    </button>
                  ))}
                </div>
                你選擇了 {selectedFlowerId}
              </div>
              <button className="component2-button button" onClick={handleConfirmClick}>
                送出
              </button>
            </div>
          </div>
        </div>
      </Dialog>
      <style jsx>
        {`
          .component2-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .component2-container1 {
            width: 479px;
            height: 319px;
            display: flex;
            box-shadow: 10px 10px 0px 0px #8c8585;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 3px;
            flex-direction: column;
            background-color: #ffcf77;
          }
          .component2-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            text-align: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .component2-text {
            width: 100%;
            margin-top: 10px;
            text-align: left;
            padding-left: var(--dl-space-space-halfunit);
          }
          .component2-text1 {
            width: 100%;
            text-align: left;
            padding-left: var(--dl-space-space-halfunit);
          }
          .component2-text2 {
            width: 100%;
            height: 38px;
            margin-top: 10px;
            text-align: center;
            margin-bottom: 0;
          }
          .component2-form {
            width: 100%;
            height: 347px;
            display: flex;
            align-self: center;
          }
          .component2-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .component2-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .component2-image {
            width: 100px;
            object-fit: cover;
          }
          .component2-image1 {
            width: 100px;
            object-fit: cover;
          }
          .component2-image2 {
            width: 100px;
            object-fit: cover;
          }
          .component2-button {
            width: 94px;
            align-self: center;
            background-color: var(--dl-color-threefish-orange);
          }
          .component2-text3 {
            width: 100%;
            font-style: normal;
            font-weight: 800;
          }
        `}
      </style>
    </>
  );
}

// export const getServerSideProps = async (context: any) => {
//   const url = context.req.url.substring(1);
//   let createrData = { id: 0, name: "", address: "", email: "", picture: "", backgroundPhoto: "" };

//   // 查詢創作者資料
//   await apiUserGetCreaterData(url)
//     .then(res => {
//       createrData = res.data.userdata;
//     })
//     .catch(() => {
//       // 找不到使用者
//       return {
//         notFound: true,
//       };
//     });
//   try {
//     const NewArticles = await apiArticleGetUserAllNewArticle(createrData.address);
//     const HotArticles = await apiArticleGetUserAllHotArticle(createrData.address);
//     return { props: { createrData, HotArticles: HotArticles.data.articles, NewArticles: NewArticles.data.articles } };
//   } catch {
//     return { props: { createrData, HotArticles: null, NewArticles: null } };
//   }
// };
