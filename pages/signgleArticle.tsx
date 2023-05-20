import Head from "next/head";
import Image from "next/image";
import React from "react";

import Comment from "../components/comment";
import Comments1 from "../components/comments1";

const Page1 = () => {
  return (
    <>
      <div className="page1-container">
        <Head>
          <title>Page1 - Flower</title>
          <meta property="og:title" content="Page1 - Flower" />
        </Head>
        <div className="page1-container04">
          <div className="page1-container05">
            <div className="page1-container06">
              <h1 className="page1-text13">養狗狗前 VS 養狗狗後</h1>
            </div>
            <div className="page1-container07">
              <div className="page1-container08">
                <img
                  alt="image"
                  src="https://ih1.redbubble.net/image.3114059041.7813/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
                  loading="lazy"
                  className="page1-image2"
                />
              </div>
              <div className="page1-container09">
                <h1 className="page1-text14">BT21_RJ012525</h1>
                <span>2023/04/03 17:52</span>
              </div>
            </div>
            <div className="page1-container10">
              <p className="page1-text16">
                <span>相信各位養寵物的都知道 養寵物前與養寵物後一定有差別</span>
                <br></br>
                <span>今天我就分享5個我的 養狗狗前 VS 養狗狗後 心得、區別</span>
                <br></br>
              </p>
              <p className="page1-text21">
                <span>廢話不多說進入正題</span>
                <br></br>
                <br></br>
                <span>1. 我媽媽的態度</span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <span>2. 狗狗體態變化</span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <span>3. 我的總花費</span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <span>4. 我的生活</span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <span>5. 家裡環境</span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <span>總結 還是很愛很愛我家的狗狗啦</span>
                <br></br>
                <span>為我家多添加了一味</span>
                <br></br>
                <span>每天生活中也多了一點樂趣</span>
                <br></br>
              </p>
            </div>
            <div className="page1-comment">
              <div className="page1-container11">
                <Image
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-p02-200h.png"
                  className="page1-pasted-image1"
                  width={38}
                  height={35}
                />
                <div className="page1-container12">
                  <img alt="image" src="/playground_assets/flower1-200h.png" className="page1-image3" />
                  <span>12</span>
                </div>
              </div>
              <Comment rootClassName="comment-root-class-name"></Comment>
              <Comments1 rootClassName="comments1-root-class-name"></Comments1>
              <Comments1
                text="真的我家也是"
                image_src="https://ih1.redbubble.net/image.3114059041.7813/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
                rootClassName="comments1-root-class-name2"
              ></Comments1>
              <Comments1
                text="同意"
                image_src="https://img-shoplineapp-com.s3.amazonaws.com/media/image_clips/5bd68b58627c770015f73b73/large.jpg?1540787029"
                rootClassName="comments1-root-class-name1"
              ></Comments1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
