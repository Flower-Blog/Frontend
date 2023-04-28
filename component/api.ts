import axios from "axios";

// TODO: 內部API

// const _articleRequest = axios.create({
//   baseURL: "/api/article",
// });
// const _authRequest = axios.create({
//   baseURL: "/api/auth",
// });
// const _userRequest = axios.create({
//   baseURL: "/api/user",
// });

//Auth
// export const _apiAuthLogin = (jwt: any) => _authRequest.post("/login",jwt);
// export const _apiAuthLogout = () => _authRequest("/logout");

// //user
// export const _apiCheckJwt = () => _userRequest.get("/jwt");

// TODO: 後端API

//API Header
const config = { headers: { "Content-Type": "application/json" } };

//Article

const articleRequest = axios.create({
  baseURL: "http://${process.env.NEXT_PUBLIC_API}/articles",
});
//Auth
const authRequest = axios.create({
  baseURL: "http://${process.env.NEXT_PUBLIC_API}/auth",
});
//User
const userRequest = axios.create({
  baseURL: "http://${process.env.NEXT_PUBLIC_API}/user",
});

//article 相關
export const apiArticleGetAll = () => articleRequest.get("/", config); //取得所有文章
export const apiArticlePost = (jwt: string, data: any) =>
  articleRequest.post("/", data, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  }); //新增個人文章

export const apiArticleGet = (id: number) => articleRequest.get(`/${id}`, config); //取得單一文章
export const apiArticleGetOnesAll = (address: string) => articleRequest.get(`/user/${address}`, config); //取得個人所有文章

//auth 相關
export const apiAuthLogin = (data: any) => authRequest.post("/login", data, config); //登入驗證
export const apiAuthIsUser = (address: string) => authRequest.get(`/login/${address}`, config); //確定是否為使用者
export const apiAuthEmailCheck = (email: string, verificationCode: number) =>
  authRequest.get(`/register/${email}/${verificationCode}`, config); //確定電子郵件驗證碼是否正確

//user 相關
export const apiUserSelf = (jwt: string) =>
  userRequest.get("/", {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  }); //獲取自身資料
export const apiUserGet = (username: string) => userRequest.get(`/${username}`, config); //獲取特定使用者資料
export const apiUserEdit = (jwt: string, data: any, address: string) =>
  userRequest.patch(`/${address}`, data, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  }); //編輯自身使用者資料
export const apiUserRegister = (data: any) => userRequest.post("/register", data, config); //使用者註冊
export const apiUserEmailCheck = (email: string) => userRequest.get(`/register/email/${email}`, config); //確認電子郵件是否使用過
export const apiUserNameCheck = (name: string) => userRequest.get(`/register/name/${name}`, config); //確認使用者名稱是否使用過
