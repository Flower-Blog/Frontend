import Dialog, { DialogProps } from "@mui/material/Dialog";
import React, { useState } from "react";

import { _apiCheckJwt, apiCommentEdit } from "@/components/api";

const Comment = (props: any) => {
  const [contents, setcontents] = useState(props.contents); //留言

  async function EditComment() {
    let jwt = "";
    await _apiCheckJwt().then((res: any) => (jwt = res.data.jwt));
    const data = { contents };
    apiCommentEdit(jwt, props.id, data)
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("fail");
      });
  }
  const [open, setOpen] = useState(false);
  const [maxWidth] = useState<DialogProps["maxWidth"]>("lg");
  return (
    <>
      <button className="button" onClick={() => setOpen(true)}>
        編輯
      </button>
      <Dialog
        maxWidth={maxWidth}
        className="w-full text-xl"
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="mb-1">
          <div className="comment-container1 grid grid-cols-6">
            <div className="col-span-4 flex w-4/5">
              <textarea
                placeholder="輸入留言"
                className="textarea mx-4 w-full"
                onChange={e => setcontents(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <button className="component6-button button" onClick={() => setOpen(false)}>
          取消
        </button>
        <button className="component6-button1 button" onClick={EditComment}>
          儲存
        </button>
      </Dialog>

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
