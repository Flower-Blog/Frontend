import Dialog from "@mui/material/Dialog";
import React, { useEffect, useState } from "react";

import Login from "./Login";

interface Flower {
  id: number;
  name: string;
  language: string;
  img: string;
}

function Component3() {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedFlowerId, setSelectedFlowerId] = useState<number | null>(null);
  useEffect(() => {
    fetch("/api/flower/flower")
      .then(res => res.json())
      .then(data => setFlowers(data));
  }, []);

  const handleFlowerClick = (flowerId: number) => {
    setSelectedFlowerId(flowerId);
  };

  const handleConfirmClick = () => {
    if (selectedFlowerId !== null) {
      setOpen(false);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <div className="component3-container">
          <div className="component3-container1">
            <div className="component3-container2">
              <h1 className="w-full text-center text-3xl font-bold">選擇第一朵自己的花</h1>
              <h1 className="w-full text-center text-2xl font-bold">選擇一種</h1>
            </div>
            <form className="component3-form">
              <div className="component3-container3">
                <div className="component3-container5">
                  {flowers.map(flower => (
                    <div key={flower.id} onClick={() => handleFlowerClick(flower.id)}>
                      <img alt="" src={flower.img} className="component3-image" />
                    </div>
                  ))}
                </div>
                <div className="component3-container8">
                  <button className="component3-button button" onClick={handleConfirmClick}>
                    <span className="component3-text2">確認</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Dialog>
      {selectedFlowerId !== null && <Login flowerId={selectedFlowerId} />}
      <style jsx>
        {`
          .component3-container {
            width: 100%;
            height: 594px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .component3-container1 {
            width: 479px;
            height: auto;
            display: flex;
            box-shadow: 10px 10px 0px 0px #8c8585;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 3px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-color: #ffcf77;
          }
          .component3-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            text-align: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .component3-text {
            width: 100%;
            margin-top: 10px;
            text-align: center;
            padding-left: 0px;
          }
          .component3-form {
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
          }
          .component3-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
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
          .component3-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .component3-container5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .component3-image {
            width: 100px;
            object-fit: cover;
          }
          .component3-image1 {
            width: 100px;
            object-fit: cover;
          }
          .component3-image2 {
            width: 100px;
            object-fit: cover;
          }
          .component3-container6 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .component3-image3 {
            width: 100px;
            object-fit: cover;
          }
          .component3-image4 {
            width: 100px;
            object-fit: cover;
          }
          .component3-image5 {
            width: 100px;
            object-fit: cover;
          }
          .component3-container7 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .component3-image6 {
            width: 100px;
            object-fit: cover;
          }
          .component3-image7 {
            width: 100px;
            object-fit: cover;
          }
          .component3-image8 {
            width: 100px;
            object-fit: cover;
          }
          .component3-container8 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .component3-button {
            width: 94px;
            align-self: center;
            background-color: var(--dl-color-threefish-orange);
          }
          .component3-text2 {
            width: 100%;
            font-style: normal;
            font-weight: 800;
          }
        `}
      </style>
    </>
  );
}

export default Component3;
