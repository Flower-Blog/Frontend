import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Comment {
  id: number;
  contents: string;
  createdAt: string;
  likes: number;
}

interface CommentState {
  comments: Comment[];
}

const initialState: CommentState = {
  comments: [],
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment(state, action: PayloadAction<Comment>) {
      state.comments.push(action.payload);
    },
    setComments(state, action: PayloadAction<Comment[]>) {
      state.comments = action.payload;
    },
  },
});

export const { addComment, setComments } = commentSlice.actions;
export default commentSlice.reducer;
