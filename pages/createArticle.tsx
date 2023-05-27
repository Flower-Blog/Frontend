import Head from "next/head";
import React, { useState } from "react";

import { _apiCheckJwt, apiArticleCreate } from "@/components/api";

export default function CreateArticle() {
  const [title, settitle] = useState(""); // 標題
  const [subStandard, setsubStandard] = useState(""); // 副標
  const [contents, setcontents] = useState(""); //內文

  async function createArticle() {
    let jwt = "";
    await _apiCheckJwt().then((res: any) => (jwt = res.data.jwt));
    const data = { title, subStandard, contents };
    apiArticleCreate(jwt, data)
      .then(() => {
        //新增 alert
        console.log("成功創建文章");
        // setalertEditSucess(true)
      })
      .catch(() => {
        //新增 alert
        console.log("失敗創建文章");
        // setalertEditFail(true)
      });
  }
  return (
    <>
      <div className="page3-container">
        <Head>
          <title>Page3 - Flower</title>
          <meta property="og:title" content="Page3 - Flower" />
        </Head>
        <div className="page3-container04 p-1">
          <div className="h-full">
            <textarea
              id="editor"
              className="text-gray-800 h-auto w-full border-0 bg-beige px-2 text-6xl focus:outline-none"
              placeholder="標題"
              onChange={e => settitle(e.target.value)}
            ></textarea>
            <textarea
              id="editor"
              className="text-gray-800 h-auto w-full border-0 bg-beige px-2 text-3xl focus:outline-none"
              placeholder="副標題"
              onChange={e => setsubStandard(e.target.value)}
            ></textarea>
            <textarea
              id="editor"
              className="text-gray-800 m-0 h-full w-full bg-beige px-2 text-lg focus:outline-none"
              placeholder="內文"
              onChange={e => setcontents(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="page3-container09">
          {/* <button className="page3-button1 button">返回</button> */}
          <button className="page3-button2 button" onClick={createArticle}>
            發布
          </button>
        </div>
      </div>
    </>
  );
}
