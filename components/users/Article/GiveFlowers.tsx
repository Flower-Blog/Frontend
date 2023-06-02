import Dialog, { DialogProps } from "@mui/material/Dialog";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import ErrorAlert from "@/components/alert/Error";
import SucessAlert from "@/components/alert/Success";
import { _apiCheckJwt, apiArticlePostflower, apiUserGetCreaterFlower } from "@/components/api";

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
  const [selectedFlowerName, setSelectedFlowerName] = useState("");
  const [myFlowerCount, setMyFlowerCount] = useState<number[]>([]);

  useEffect(() => {
    fetch("/api/flower/flower")
      .then(res => res.json())
      .then(data => setFlowers(data));
    apiUserGetCreaterFlower(props.username).then((res: any) => {
      setMyFlowerCount(res.data.flowerRecords);
    });
    setSelectedFlowerName("");
  }, [props.username]);

  const handleFlowerClick = (flowerId: number, flowerName: any) => {
    setSelectedFlowerId(flowerId);
    setSelectedFlowerName(flowerName);
  };

  async function handleConfirmClick() {
    let jwt = "";
    await _apiCheckJwt().then((res: any) => (jwt = res.data.jwt));
    const data = { flowerId: selectedFlowerId, articleId: props.id };
    try {
      apiArticlePostflower(jwt, data)
        .then((res: any) => {
          const SuccessMessage = res.data.title; //送花成功
          setSuccessMessage(SuccessMessage);
          setSuccess(true);
        })
        .catch((error: any) => {
          const ErrorMessage = error.response; //你的花不夠
          if (ErrorMessage !== "") {
            setErrorMessage(ErrorMessage.data.errors);
          } else {
            console.log(error.response);
          }
          setError(true);
        });
      setOpen(false);
    } catch {}
  }

  // TODO: UI funtion
  const [open, setOpen] = useState(false);
  const [maxWidth] = useState<DialogProps["maxWidth"]>("md");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  return (
    <>
      <button className="rounded-lg shadow hover:shadow-xl" onClick={() => setOpen(true)}>
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
            <div className="component2-container2 text-xl font-bold">
              <h1 className="component2-text">贈送對象：{props.createname}</h1>
              <h1 className="component2-text1 mt-1">贈送文章：{props.title}</h1>
              <h1 className="component2-text2">選擇一種來贈送花</h1>
            </div>
            <div className="component2-form flex-col">
              <div className="component2-container3">
                <div className="component2-container4">
                  {flowers.map(flower => (
                    <div key={flower.id} className="flex flex-col">
                      <button
                        className="focus:ring-red-500 focus:outline-none focus:ring-4"
                        onClick={() => handleFlowerClick(flower.id, flower.name)}
                      >
                        <img alt="" src={flower.img} className="component3-image" />
                      </button>
                      {myFlowerCount.map((item: any) => (
                        <p key={item.flowerid} className="text-center text-xl font-bold">
                          {item.flowerid === flower.id ? item.flowerCount : null}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="my-2 text-xl font-bold">你選擇了 {selectedFlowerName}</div>
              </div>
              <button className="component2-button button" onClick={handleConfirmClick}>
                送出
              </button>
            </div>
          </div>
        </div>
      </Dialog>
      {success && <SucessAlert message={successMessage} />}
      {error && <ErrorAlert message={errorMessage} />}
      <style>
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
          .component3-image {
            width: 100px;
            height: 80px;
            object-fit: cover;
          }
          .component2-container1 {
            width: 479px;
            height: 100%;
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
            height: 100%;
            display: flex;
            align-self: center;
          }
          .component2-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 80%;
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
