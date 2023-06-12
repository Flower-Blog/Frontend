import { useRouter } from "next/router";
import React, { useState } from "react";

import { _apiCheckJwt, apiCommentCreate } from "@/components/api";

const Comment = (props: any) => {
  const [contents, setContents] = useState("");
  const router = useRouter();

  async function createComment() {
    let jwt = "";
    await _apiCheckJwt().then((res: any) => (jwt = res.data.jwt));
    const data = { articleId: props.articleId, contents };

    apiCommentCreate(jwt, data)
      .then(() => {
        console.log("success");
        setContents(""); // 清空输入框
        router.reload(); // 重新加载页面
      })
      .catch(() => {
        console.log("fail");
      });
  }

  return (
    <>
      <div className="mb-1">
        <div className="comment-container1 grid grid-cols-6">
          {props.picture !== "" && props.name !== "" ? (
            <>
              <div className="col-span-1">
                <img alt="not found pic" src={props.picture} loading="lazy" className="comment-image" />
                <p className="text-center">{props.name}</p>
              </div>
              <div className="col-span-4 flex w-4/5">
                <textarea
                  placeholder="輸入留言"
                  className="comment-textarea mx-4 w-full"
                  value={contents}
                  onChange={e => setContents(e.target.value)}
                ></textarea>
              </div>
              <button className="comment-button button col-span-1 px-2" onClick={createComment}>
                留言
              </button>
            </>
          ) : (
            <>
              <p className="w-full text-center text-3xl font-bold">加入我們就可以搶先留言!</p>
            </>
          )}
        </div>
      </div>
      <style>
        {`
          .comment-container {
            width: 100%;
            height: 106px;
            display: flex;
            position: relative;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .comment-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 5px 5px 0px 0px #131212;
            align-items: center;
            justify-content: space-between;
            background-color: var(--dl-color-threefish-blue);
          }
          .comment-image {
            width: 50px;
            height: 50px;
            margin-top: 0px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .comment-textarea {
            width: 100%;
          }
          .comment-button {
            margin-left: var(--dl-space-space-unit);
          }
        `}
      </style>
    </>
  );
};

export default Comment;
