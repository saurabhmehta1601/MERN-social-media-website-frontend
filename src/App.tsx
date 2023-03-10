import React from "react"
import { CssBaseline } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import SignupPage from "./pages/Signup"
import ProfilePage from "./pages/Profile"
import CreatePostPage from "./pages/CreatePost"
import ExplorePage from "./pages/Explore"

function App() {

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/create-post" element={<CreatePostPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
