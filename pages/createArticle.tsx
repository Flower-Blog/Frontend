import { useRouter } from "next/router";
import React, { useState } from "react";

import { _apiCheckJwt, apiArticleCreate, apiUserGetUserData } from "@/components/api";

export default function CreateArticle() {
  const router = useRouter();
  const [title, settitle] = useState(""); // 標題
  const [subStandard, setsubStandard] = useState(""); // 副標
  const [contents, setcontents] = useState(""); //內文

  async function createArticle() {
    let jwt = "";
    let name = "";
    await _apiCheckJwt().then((res: any) => (jwt = res.data.jwt));
    apiUserGetUserData(jwt).then((res: any) => (name = res.data.userdata[0].name));
    const data = { title, subStandard, contents };
    apiArticleCreate(jwt, data)
      .then(() => {
        router.push(`/${name}`); //回到個人頁面
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
        <div className="border-gray-200 m-2 h-full rounded-lg border bg-beige p-1">
          <div className="h-full">
            <textarea
              id="editor"
              className="text-gray-800 w-full border-0 bg-beige px-2 text-6xl focus:outline-none"
              placeholder="標題"
              onChange={e => settitle(e.target.value)}
            ></textarea>
            <textarea
              id="editor"
              className="text-gray-800 w-full border-0 bg-beige px-2 text-3xl focus:outline-none"
              placeholder="副標題"
              onChange={e => setsubStandard(e.target.value)}
            ></textarea>
            <textarea
              id="editor"
              rows={25}
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
