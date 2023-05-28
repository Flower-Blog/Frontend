import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  profile: {
    id: number;
    name: string;
    address: string;
    email: string;
    introduction: string;
    picture: string;
    backgroundPhoto: string;
    login: boolean;
  };
}

const initialState: UserState = {
  profile: {
    id: 0,
    name: "",
    address: "",
    email: "",
    introduction: "",
    picture: "",
    backgroundPhoto: "",
    login: false,
  },
};

const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setLogin(state, action) {
      const updatedProfile = JSON.parse(action.payload);
      console.log("updatedProfileupdatedProfile", updatedProfile);
      updatedProfile[0].login = true;
      state.profile = updatedProfile[0];
    },
    setLogout(state) {
      state.profile = initialState.profile;
    },
  },
});

export const { setLogin, setLogout } = UserSlice.actions;
export default UserSlice.reducer;
