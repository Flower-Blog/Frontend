import Dialog, { DialogProps } from "@mui/material/Dialog";
import { useState } from "react";
import { useSelector } from "react-redux";

import { _apiCheckJwt, apiAutGethEmail, apiUserEditProfile, apiUserGetEmail } from "@/components/api";

export default function Editprofile() {
  // TODO: Handle funtion
  const [name, setName] = useState(""); // 使用者名稱
  const [email, setemail] = useState(""); // 電子信箱
  const [verificationCode, setverificationCode] = useState("");
  const [introduction, setIntroduction] = useState(""); // 個人簡介
  const [backgroundPhoto, setbackgroundPhoto] = useState(""); // 背景圖
  const [picture, setpicture] = useState(""); // 頭像
  const User = useSelector((state: any) => state.User);
  async function EditProfile() {
    let jwt = "";
    await _apiCheckJwt().then((res: any) => (jwt = res.data.jwt));
    const data = { name, email, introduction, backgroundPhoto, picture };
    console.log(data);
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

  function sendVerificationCode() {
    //先檢查信箱
    apiUserGetEmail(email)
      .then(() => {
        //確認無誤後發送信箱
        //需要alert
        console.log("信箱確認");
      })
      .catch((error: any) => {
        if (error.response && error.response.data.error) {
          const errorMess = error.response.data.error;
          console.log(errorMess);
        }
      });
  }

  function checkVerificationCode() {
    //確認驗證碼是否正確
    if (verificationCode.length == 6) {
      apiAutGethEmail(email, verificationCode)
        .then(() => {
          //需要alert
          console.log("驗證碼正確");
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }

  //TODO: 處理圖像
  const [previewPicture, setPreviewPicture] = useState(User.profile.picture);
  function pictureChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];

    // 讀取文件
    // console.log("取得 file 資料");
    console.log("filepppppppppp", file);

    const reader = new FileReader();
    if (file == null) {
      return "pic is null.";
    }
    reader.readAsDataURL(file);
    // 當文件讀取完成時
    reader.onload = () => {
      // 將 Base64 字符串設置為圖像 URL
      const log = reader.result;
      setpicture(log as string);
      setPreviewPicture(log as string);
    };
  }
  const [previewBackgroundPhoto, setPreviewBackgroundPhoto] = useState(User.profile.backgroundPhoto);
  function backgroundChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];

    // 讀取文件
    // console.log("取得 file 資料");
    console.log("filefilefilefilefilefile", file);

    const reader = new FileReader();
    if (file == null) {
      return "pic is null.";
    }
    reader.readAsDataURL(file);
    // 當文件讀取完成時
    reader.onload = () => {
      // 將 Base64 字符串設置為圖像 URL
      const log = reader.result;
      setbackgroundPhoto(log as string);
      // console.log("backgroundPhoto", backgroundPhoto);
      setPreviewBackgroundPhoto(log as string);
    };
  }

  // TODO: UI funtion
  const [open, setOpen] = useState(false);
  const [maxWidth] = useState<DialogProps["maxWidth"]>("lg");
  //ErrorMessage
  // const [errorVerificationCode, setErrorVerificationCode] = useState(false);
  return (
    <>
      <button className="personalprivate-button1 button" onClick={() => setOpen(true)}>
        編輯個人資料
      </button>
      <Dialog
        maxWidth={maxWidth}
        className="w-full text-xl"
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="component6-container01">
          <div className="component6-container02">
            <h1 className="text-4xl font-bold">編輯個人資料</h1>
          </div>
          <div className="component6-container03">
            <label htmlFor="backgroundInput" className="custom-file-input mx-2">
              <span className="button-text cursor-pointer rounded bg-blue-500 py-2 px-4 text-white">更换背景</span>
              <input type="file" id="backgroundInput" onChange={backgroundChange} className="hidden" />
              {/* <input type="file" onChange={(result: any) => setbackgroundPhoto(result.info.url)} /> */}
            </label>
            {previewBackgroundPhoto && (
              <img
                src={previewBackgroundPhoto}
                loading="eager"
                className="component6-image"
                alt="background not fund"
              />
            )}
          </div>
          <div className="component6-container04">
            <label htmlFor="pictureInput" className="custom-file-input mx-2">
              <span className="button-text cursor-pointer rounded bg-blue-500 py-2 px-4 text-white">更换背景</span>
              <input type="file" id="pictureInput" onChange={pictureChange} className="hidden" />
              {/* <input type="file" onChange={(result: any) => setpicture(result.info.url)} /> */}
            </label>
            {previewPicture && (
              <img src={previewPicture} loading="eager" className="component6-image1" alt="user_photo not fund" />
            )}
            {/* <img
              alt="user_photo not fund"
              src={User.profile.picture}
              //onChange={e => setpicture(e.target.value)}
              className="component6-image1"
            /> */}
          </div>
          <div className="component6-container06">
            <h1>信箱：</h1>
            <input
              type="text"
              placeholder={User.profile.email}
              value={email}
              onChange={e => setemail(e.target.value)}
              className="input"
            />
            <button className="page2-button button mx-2" onClick={sendVerificationCode} color="primary">
              發送驗證碼
            </button>
            <h1 className="ml-4">驗證碼：</h1>
            <input
              id="myInput"
              type="text"
              placeholder="輸入六碼"
              onInput={checkVerificationCode}
              max="6"
              value={verificationCode}
              onChange={e => setverificationCode(e.target.value)}
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
