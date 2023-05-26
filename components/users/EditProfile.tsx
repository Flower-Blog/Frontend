import Dialog, { DialogProps } from "@mui/material/Dialog";
import { useState } from "react";
import { useSelector } from "react-redux";

import { _apiCheckJwt, apiUserEditProfile } from "@/components/api";

export default function Editprofile() {
  // TODO: Handle funtion
  const [name, setName] = useState(""); // 使用者名稱
  const [email, setemail] = useState(""); // 電子信箱
  const [introduction, setIntroduction] = useState(""); // 個人簡介
  {
    /* FIXME: 記得刪除，因為未使用不能commit */
  }
  {
    introduction;
  }
  const User = useSelector((state: any) => state.User);
  async function EditProfile() {
    let jwt = "";
    await _apiCheckJwt().then((res: any) => (jwt = res.data.jwt));
    const data = { name, email, introduction };
    apiUserEditProfile(jwt, data)
      .then(() => {
        console.log("成功更改");
        // setalertEditSucess(true)
      })
      .catch(() => {
        console.log("失敗更改");
        // setalertEditFail(true)
      });
    setOpen(false);
  }

  // TODO: UI funtion
  const [open, setOpen] = useState(false);
  const [maxWidth] = useState<DialogProps["maxWidth"]>("lg");
  return (
    <>
      <button className="personalprivate-button1 button" onClick={() => setOpen(true)}>
        編輯個人資料
      </button>
      <Dialog
        maxWidth={maxWidth}
        className="w-full"
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="component6-container01">
          <div className="component6-container02">
            <h1 className="component6-text">編輯個人資料</h1>
          </div>
          <div className="component6-container03">
            <h1>背景：</h1>
            <img
              src={User.profile.backgroundPhoto}
              loading="eager"
              className="component6-image"
              alt="background not fund"
            />
          </div>
          <div className="component6-container04">
            <div className="component6-container05">
              <h1>頭貼：</h1>
            </div>
            <img alt="user_photo not fund" src={User.profile.picture} className="component6-image1" />
          </div>
          <div className="component6-container06">
            <h1>信箱：</h1>
            <input
              type="text"
              placeholder={User.profile.email}
              onChange={e => setemail(e.target.value)}
              className="input"
            />
          </div>
          <div className="component6-container07">
            <h1>名稱：</h1>
            <input
              type="text"
              placeholder={User.profile.name}
              onChange={e => setName(e.target.value)}
              className="input"
            />
          </div>
          <div className="component6-container08">
            <h1>自介：</h1>
            <textarea
              placeholder={User.profile.introduction}
              onChange={e => setIntroduction(e.target.value)}
              className="component6-textarea textarea"
            ></textarea>
          </div>
          <div className="component6-container09">
            <button className="component6-button button" onClick={() => setOpen(false)}>
              取消
            </button>
            <button className="component6-button1 button" onClick={EditProfile}>
              儲存
            </button>
          </div>
        </div>
      </Dialog>
      <style jsx>
        {`
          .component6-container {
            width: 100%;
            height: 877px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .component6-container01 {
            width: 938px;
            height: 846px;
            display: flex;
            box-shadow: 10px 10px 0px 0px #100e0e;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: #a1c1e6;
          }
          .component6-container02 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .component6-text {
            text-align: center;
          }
          .component6-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: flex-start;
          }
          .component6-image {
            width: 747px;
            height: 107px;
            object-fit: cover;
          }
          .component6-container04 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: flex-start;
          }
          .component6-container05 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .component6-image1 {
            width: 100px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .component6-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .component6-container07 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .component6-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
          }
          .component6-textarea {
            width: 770px;
            height: 84px;
          }
          .component6-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .component6-button {
            font-style: normal;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
          }
          .component6-button1 {
            width: 86px;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 800;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            background-color: #537cb5;
          }
        `}
      </style>
    </>
  );
}
