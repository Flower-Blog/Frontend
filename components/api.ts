import axios from "axios";
import https from "https";

// TODO: 內部API

// Auth相關的 api
const _authRequest = axios.create({
  baseURL: "/api/auth",
});
const _userRequest = axios.create({
  baseURL: "/api/user",
});

// Auth相關的 api
export const _apiAuthLogin = (jwt: any) => _authRequest.post("/login", jwt); // 將jwt塞進cookie
export const _apiAuthLogout = () => _authRequest.post("/logout"); // 將jwt從cookie移除

// User相關的 api
export const _apiCheckJwt = () => _userRequest.get("/jwt"); // 從cookie中撈看看是否有jwt

// API Header設定
const config = {
  headers: { "Content-Type": "application/json" },
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
};

// TODO: 後端API

// Admin相關的 api
const adminRequest = axios.create({
  baseURL: `https://${process.env.NEXT_PUBLIC_API}/admin`,
});
// Article相關的 api
const articleRequest = axios.create({
  baseURL: `https://${process.env.NEXT_PUBLIC_API}/articles`,
});
// Auth相關的 api
const authRequest = axios.create({
  baseURL: `https://${process.env.NEXT_PUBLIC_API}/auth`,
});
// Comment 相關的 api
const commentRequest = axios.create({
  baseURL: `https://${process.env.NEXT_PUBLIC_API}/comment`,
});
// User相關的 api
const userRequest = axios.create({
  baseURL: `https://${process.env.NEXT_PUBLIC_API}/user`,
});

// TODO: User 相關的 api

// 獲取自身資料(需攜帶 Token)
export const apiUserGetUserData = (jwt: string) =>
  userRequest.get("/", {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

// 編輯自身使用者資料
export const apiUserEditProfile = (jwt: string, data: any) =>
  userRequest.patch("/", data, {
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "multipart/form-data",
    },
  });

// 獲取特定使用者
export const apiUserGetCreaterData = (name: any) => userRequest.get(`/${name}`, config);

// 使用者註冊
export const apiUserRegister = (data: any) => userRequest.post("/register", data, config);

// 確認電子郵件是否使用過-註冊
export const apiUserGetEmail = (email: any) => userRequest.get(`/register/email/${email}`, config);

// 確認使用者名稱是否使用過-註冊
export const apiUserGetName = (name: any) => userRequest.get(`/register/name/${name}`, config);

// 創作者收藏花
export const apiUserGetCreaterFlower = (name: any) => userRequest.get(`/flower/${name}`, config);

// TODO: Auth相關的 api

// 登入驗證
export const apiAuthTakeToken = (data: any) => authRequest.post("/login", data, config);

// 確認是否為使用者
export const apiAuthTakeNonce = (address: any) => authRequest.get(`/login/${address}`, config);

// 確認電子郵件驗證碼是否正確
export const apiAutGethEmail = (email: any, verificationCode: any) =>
  authRequest.get(`/register/${email}/${verificationCode}`, config);

// TODO: Article相關的 api

// 取得所有文章(最新)
export const apiArticleGetAllNewArticle = () => articleRequest.get("/new", config);

// 取得所有文章(最熱門)
export const apiArticleGetAllHotArticle = () => articleRequest.get("/hot", config);

// 創建個人文章
export const apiArticleCreate = (jwt: string, data: any) =>
  articleRequest.post("/", data, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

// 取得個人所有文章(最新)
export const apiArticleGetUserAllNewArticle = (address: any) => articleRequest.get(`/user/${address}/new`, config);

// 取得個人所有文章(最熱門)
export const apiArticleGetUserAllHotArticle = (address: any) => articleRequest.get(`/user/${address}/hot`, config);

// 取得單一文章
export const apiArticleGetArticle = (id: any) => articleRequest.get(`/${id}`, config);

// 編輯個人文章
export const apiArticleEdit = (jwt: string, id: string, data: any) =>
  articleRequest.patch(`/${id}`, data, {
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "multipart/form-data",
    },
  });

// 刪除個人文章
export const apiArticleDelete = (jwt: string, id: string) =>
  articleRequest.delete(`/${id}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

// 送花
export const apiArticlePostflower = (jwt: string) =>
  articleRequest.post(`/flower`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

// TODO: Comment相關的 api

// 新增留言
export const apiCommentCreate = (jwt: string, data: any) =>
  commentRequest.post("/", data, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

// 編輯留言
export const apiCommentEdit = (jwt: string, id: string, data: any) =>
  commentRequest.patch(`/${id}`, data, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

// 刪除個人留言
export const apiCommentDelete = (jwt: string, id: string) =>
  commentRequest.delete(`/${id}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

// 留言按讚
export const apiCommentGetlike = (id: any) => commentRequest.get(`/${id}/like`, config);

//TODO: Admin 相關的 api

//使用者記錄(最新)
export const apiAdminGetUsers = (jwt: string) =>
  adminRequest.get(`/user`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

//花總類
export const apiAdminGetFlowers = (jwt: string) =>
  adminRequest.get(`/flowers`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
