import { _apiCheckJwt, apiUserGetUserData } from "@/components/api";

export const LoginFunction = async () => {
  const res = await _apiCheckJwt();
  const jwt = res.data.jwt;
  if (jwt != null) {
    try {
      const response = await apiUserGetUserData(jwt);
      return JSON.stringify(response.data.userdata);
    } catch (error) {
      return null;
    }
  } else return null;
};
