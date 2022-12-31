import { createSlice } from "@reduxjs/toolkit";

interface IState {
  displayMode: "light" | "dark";
  authToken: string | null;
  user: null | {
    id: string;
    firstName: string;
    lastName: string;
    friends: string[];
  };
  posts: {
    id: string;
    title: string;
  }[];
}

const initialState: IState = {
  displayMode: "light",
  authToken: null,
  user: null,
  posts: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleDisplayMode: (state) => {
      state.displayMode = state.displayMode === "light" ? "dark" : "light";
    },
    login: (state, action) => {
      state.authToken = action.payload.authToken;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.user = null;
      state.authToken = null;
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
export const { login, logout, toggleDisplayMode, setFriends, setPosts } =
  authSlice.actions;
