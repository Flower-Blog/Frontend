import { configureStore } from "@reduxjs/toolkit";

import CommentSlice from "./CommentSlice";
import CreaterSlice from "./CreaterSlice";
import UserSlice from "./UserSlice";

export const store = configureStore({
  reducer: {
    User: UserSlice,
    Creater: CreaterSlice,
    Comment: CommentSlice,
  },
});
