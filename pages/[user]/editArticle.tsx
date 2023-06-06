import { useRouter } from "next/router";
import React, { useState } from "react";

import ErrorAlert from "@/components/alert/Error";
import SucessAlert from "@/components/alert/Success";
import { _apiCheckJwt, apiArticleEdit } from "@/components/api";

export default function EditArticle() {
  const router = useRouter();
  const { name, id, title, subStandard, contents } = router.query;
  const [editTitle, seteditTitle] = useState(title); // 標題
  const [editSubStandard, seteditSubStandard] = useState(subStandard); // 副標
  const [editContents, seteditContents] = useState(contents); //內文

  async function editArticle(articleId: any) {
    let jwt = "";
    await _apiCheckJwt().then((res: any) => (jwt = res.data.jwt));
    const data = { title: editTitle, subStandard: editSubStandard, contents: editContents };
    apiArticleEdit(jwt, articleId, data)
      .then(() => {
        setSuccess(true);
        router.push(`/${name}`); //回到個人頁面
      })
      .catch(() => {
        setError(true);
      });
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
          <button className="page3-button2 button" onClick={() => editArticle(id)}>
            編輯
          </button>
        </div>
      </div>
      {success && <SucessAlert message={`編輯成功`} />}
      {Error && <ErrorAlert message={`編輯失敗`} />}
    </>
  );
}
