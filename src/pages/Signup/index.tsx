import { Avatar, Box, Grid, Button, Link, Stack, TextField, Typography, useTheme } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Container from "@mui/material/Container"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import React from 'react'
import SignupForm from './SignupForm'

const LoginPage = () => {
  const theme = useTheme()
  return (
    <Container component="main" maxWidth="xs" >
      <Stack sx={{ marginTop: 8 }} alignItems="center">
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
      </Stack>
      <Stack>
        {/* SIGN UP FORM */}
        <SignupForm />
      </Stack>
      <Box sx={{ mt: 3 }}>
        <Link component={RouterLink} to="/login" > Already have an account? Sign in .</Link>
      </Box>
      <Typography variant="body2" textAlign="center" sx={{ mt: 3, mb: 1 }}>
        Copyright &copy; 2021 Gitgram.org
      </Typography>
    </Container >
  )
}

export default LoginPage 