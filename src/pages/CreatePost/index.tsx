import React from "react"
import { Avatar, Stack, Typography } from '@mui/material'
import Container from "@mui/material/Container"
import CreateIcon from '@mui/icons-material/Create'
import CreatePostForm from './CreatePostForm'

const CreatePostPage = () => {

  return (
    <Container component="main" maxWidth="xs" >
      <Stack sx={{ marginTop: 8 }} alignItems="center">
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <CreateIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Post
        </Typography>
      </Stack>
      {/* CRAEATE POST FORM */}
      <CreatePostForm />
      <Typography variant="body2" textAlign="center" sx={{ mt: 3, mb: 1 }}>
        Copyright &copy; 2021 Gitgram.org
      </Typography>
    </Container >
  )
}

export default CreatePostPage