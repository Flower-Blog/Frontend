import Head from "next/head";
import React from "react";

const Page2 = () => {
  return (
    <>
      <div className="page2-container">
        <Head>
          <title>Page2 - Flower</title>
          <meta property="og:title" content="Page2 - Flower" />
        </Head>
        <div className="page2-container01">
          <img alt="image" src="/playground_assets/group%20110571.svg" className="page2-image" />
          <img alt="image" src="/playground_assets/group%20110561.svg" className="page2-image1" />
        </div>
        <div className="page2-container02">
          <div className="page2-container03">
            <h1 className="page2-text">註冊</h1>
          </div>
          <div className="page2-container04">
            <span>0x4202043D9ff98a4e8C64b075dBF4Cb3eE5EfF528</span>
          </div>
          <form className="page2-form">
            <div className="page2-container05">
              <input type="text" placeholder="填入信箱" className="page2-textinput input" />
              <div className="page2-container06">
                <input type="text" placeholder="填入驗證碼" className="input" />
                <button className="page2-button button">發送驗證碼</button>
              </div>
              <button className="page2-button1 button">
                <span className="page2-text2"> 下一步</span>
              </button>
            </div>
          </form>
        </div>
        <div className="page2-container07">
          <div className="page2-container08">
            <h1 className="page2-text3">註冊</h1>
          </div>
          <form className="page2-form1">
            <div className="page2-container09">
              <div className="page2-container10">
                <label className="page2-text4">名稱:</label>
                <input
                  type="text"
                  placeholder="B2D7EEF9-22E4-4865-9645-B70136C1FE5D"
                  className="page2-textinput2 input"
                />
              </div>
              <button className="page2-button2 button">
                <span className="page2-text5"> 註冊</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page2;
