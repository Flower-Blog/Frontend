import Dialog, { DialogProps } from "@mui/material/Dialog";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import ErrorAlert from "@/components/alert/Error";
import SuccessAlert from "@/components/alert/Success";
import { _apiCheckJwt, apiAutGethEmail, apiUserEditProfile, apiUserGetEmail } from "@/components/api";
import { setLogin } from "@/store/UserSlice";

export default function Editprofile() {
  // TODO: Handle funtion
  const router = useRouter();
  const dispatch = useDispatch();
  const User = useSelector((state: any) => state.User);
  const [name, setName] = useState(User.profile.name); // 使用者名稱
  const [email, setemail] = useState(User.profile.email); // 電子信箱
  const [verificationCode, setverificationCode] = useState(""); //驗證碼
  const [IsverificationCode, setIsverificationCode] = useState(true); //驗證碼
  const [introduction, setIntroduction] = useState(User.profile.introduction); // 個人簡介
  const [backgroundPhoto, setbackgroundPhoto] = useState<File | null>(User.profile.backgroundPhoto); // 背景圖
  const [picture, setpicture] = useState<File | null>(User.profile.picture); // 頭像
  const [editemail, seteditemail] = useState(false); // 更改電子信箱
  async function EditProfile() {
    if (IsverificationCode) {
      const formData = new FormData();
      if (backgroundPhoto) formData.append("backgroundPhoto", backgroundPhoto);
      if (picture) formData.append("picture", picture);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("introduction", introduction);
      let jwt = "";
      await _apiCheckJwt().then((res: any) => (jwt = res.data.jwt));
      const data = [{ name, email, introduction, backgroundPhoto, picture }];
      apiUserEditProfile(jwt, data[0])
        .then(() => {
          console.log("成功更改");
          dispatch(setLogin(JSON.stringify(data))); // 更新 Redux Store 中的使用者
          //FIXME: 回到個人頁面是更改後的使用者資料
          router.push(`/${name}`);
        })
        .catch((error: any) => {
          console.log(error);
          console.log("失敗更改");
        });
      setOpen(false);
    }
  }

  function sendVerificationCode() {
    //先檢查信箱
    apiUserGetEmail(email)
      .then(() => {
        //確認無誤後發送信箱
        setSuccess(true);
        console.log("信箱確認");
      })
      .catch((error: any) => {
        if (error.response && error.response.data.error) {
          const errorMess = error.response.data.error;
          setError(true);
          console.log(errorMess);
        }
      });
  }

  function checkVerificationCode() {
    //確認驗證碼是否正確
    if (verificationCode.length == 6) {
      apiAutGethEmail(email, verificationCode)
        .then(() => {
          setIsverificationCode(true);
          setSuccess(true);
          console.log("驗證碼正確");
        })
        .catch((error: any) => {
          console.log(error);
          setIsverificationCode(false);
          setError(true);
          console.log("驗證碼錯誤");
        });
    }
  }

  //TODO: 處理圖像
  const [previewPicture, setPreviewPicture] = useState(User.profile.picture);
  function pictureChange(event: any) {
    const file = event.target.files && event.target.files[0];
    const reader = new FileReader();
    if (file == null) {
      return "pic is null.";
    }
    // 設置 picture
    setpicture(file);

    reader.readAsDataURL(file);
    // 當文件讀取完成時
    reader.onload = () => {
      // 將 Base64 字符串設置為圖像 URL
      setPreviewPicture(User.profile.backgroundPhoto);
    };
  }
  const [previewBackgroundPhoto, setPreviewBackgroundPhoto] = useState(User.profile.backgroundPhoto);
  function backgroundChange(event: any) {
    const file = event.target.files && event.target.files[0];
    const reader = new FileReader();
    if (file == null) {
      return "pic is null.";
    }

    // 設置 backgroundPhoto
    setbackgroundPhoto(file);
    reader.readAsDataURL(file);
    // 當文件讀取完成時
    reader.onload = () => {
      // 將 Base64 字符串設置為圖像 URL
      const log = reader.result;
      setPreviewBackgroundPhoto(log as string);
    };
  }

  // TODO: UI funtion
  const [open, setOpen] = useState(false);
  const [maxWidth] = useState<DialogProps["maxWidth"]>("lg");
  const [success, setSuccess] = useState(false);
  const [Error, setError] = useState(false);
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
            <label htmlFor="backgroundInput" className="custom-file-input">
              <span className="button">更换背景</span>
              <input type="file" id="backgroundInput" onChange={backgroundChange} className="hidden" />
            </label>
            {previewBackgroundPhoto && (
              <img
                src={previewBackgroundPhoto}
                loading="eager"
                className="component6-image mx-2"
                alt="background not fund"
              />
            )}
          </div>
          <div className="component6-container04">
            <label htmlFor="pictureInput" className="custom-file-input mx-2">
              <span className="button">更换頭像</span>
              <input type="file" id="pictureInput" onChange={pictureChange} className="hidden" />
            </label>
            {previewPicture && (
              <img src={previewPicture} loading="eager" className="component6-image1 mx-2" alt="user_photo not fund" />
            )}
          </div>
          <div className="component6-container06">
            {editemail ? (
              <>
                <h1>信箱：</h1>
                <input
                  type="text"
                  placeholder="輸入信箱"
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
              </>
            ) : (
              <>
                <button className="button" onClick={() => seteditemail(true)}>
                  點擊編輯信箱
                </button>
                <input
                  type="text"
                  placeholder="輸入信箱"
                  value={email}
                  onChange={e => setemail(e.target.value)}
                  className="ml-6"
                  disabled={true}
                />
              </>
            )}
          </div>
          <div className="component6-container07">
            <h1>名稱：</h1>
            <input
              type="text"
              placeholder="輸入名稱"
              value={name}
              onChange={e => setName(e.target.value)}
              className="input"
            />
          </div>
          <div className="component6-container08">
            <h1>自介：</h1>
            <textarea
              placeholder="輸入自介"
              value={introduction}
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
      {success && <SuccessAlert message={`信箱和驗證碼正確 `} />}
      {Error && <ErrorAlert message={`信箱和驗證碼錯誤`} />}
      <style>
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
