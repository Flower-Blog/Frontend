import { Alert } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

import ErrorAlert from "@/components/alert/Error";
import SucessAlert from "@/components/alert/Success";
import { _apiCheckJwt, apiArticleEdit } from "@/components/api";

export default function EditArticle() {
  const router = useRouter();
  const { name, id, title, subStandard, contents } = router.query;
  const [editTitle, seteditTitle] = useState(""); // 標題
  const [editSubStandard, seteditSubStandard] = useState(""); // 副標
  const [editContents, seteditContents] = useState(""); //內文

  async function editArticle(articleId: any) {
    let jwt = "";
    await _apiCheckJwt().then((res: any) => (jwt = res.data.jwt));
    const data = { title: editTitle, subStandard: editSubStandard, contents: editContents };
    apiArticleEdit(jwt, articleId, data)
      .then(() => {
        setSuccess(true);
        <Alert>編輯文章成功</Alert>;
        console.log("編輯文章成功");
        router.push(`/${name}/${editTitle}`); //回到個人頁面
        // setalertSucessAlert(true);
      })
      .catch(() => {
        setError(true);
        <Alert>編輯文章成功</Alert>;
        console.log("編輯文章失敗");
        // setalertErrorAlert(true);
      });
    {
      success && <SucessAlert message={`編輯成功`} />;
    }
    {
      Error && <ErrorAlert message={`編輯失敗`} />;
    }
  }

  const [success, setSuccess] = useState(false);
  const [Error, setError] = useState(false);

  return (
    <>
      <div className="page3-container">
        <div className="border-gray-200 m-2 h-full rounded-lg border bg-beige p-1">
          <div className="h-full">
            <textarea
              id="editor"
              className="text-gray-800 w-full border-0 bg-beige px-2 text-6xl focus:outline-none"
              placeholder="標題"
              onChange={e => seteditTitle(e.target.value)}
            >
              {title}
            </textarea>
            <textarea
              id="editor"
              className="text-gray-800 w-full border-0 bg-beige px-2 text-3xl focus:outline-none"
              placeholder="副標題"
              onChange={e => seteditSubStandard(e.target.value)}
            >
              {subStandard}
            </textarea>
            <textarea
              id="editor"
              rows={25}
              className="text-gray-800 m-0 h-full w-full bg-beige px-2 text-lg focus:outline-none"
              placeholder="內文"
              onChange={e => seteditContents(e.target.value)}
            >
              {contents}
            </textarea>
          </div>
        </div>
        <div className="page3-container09">
          {/* <button className="page3-button1 button">返回</button> */}
          <button className="page3-button2 button" onClick={() => editArticle(id)}>
            編輯
          </button>
        </div>
      </div>
    </>
  );
}
