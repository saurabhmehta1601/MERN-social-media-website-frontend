import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  friends: string[];
  following: string[];
  profilePicture: string;
}

interface IState {
  token: string | null;
  user: IUser | null;
  posts: {
    id: string;
    title: string;
  }[];
}

const initialState: IState = {
  token: null,
  user: null,
  posts: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; user: IUser }>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user in null , cannot set friends on user");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
  },
});

export default authSlice.reducer;
export const { login, logout, setFriends, setPosts } = authSlice.actions;
