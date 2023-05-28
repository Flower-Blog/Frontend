import { _apiCheckJwt, apiUserGetUserData } from "@/components/api";

export const LoginFunction = async () => {
  const res = await _apiCheckJwt();
  // console.log("res", res.data);
  const jwt = res.data.jwt;
  if (jwt != null) {
    try {
      const response = await apiUserGetUserData(jwt);
      // console.log("respose", response);
      return JSON.stringify(response.data.userdata);
    } catch (error) {
      // console.log("error", error);
      return null;
    }
  } else return null;
};
