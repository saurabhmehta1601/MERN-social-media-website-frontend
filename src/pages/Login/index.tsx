import { Avatar, Link, Stack, Typography } from '@mui/material'
import { Link as RouterLink, Navigate } from 'react-router-dom'
import Container from "@mui/material/Container"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import React from 'react'
import LoginForm from './LoginForm'
import { useAppSelector } from '../../hooks/redux'

const LoginPage = () => {
  const { token, user } = useAppSelector(state => state.auth)
  if (token && user) return (<Navigate to="/login" />)


  return (
    <Container component="main" maxWidth="xs" >
      <Stack sx={{ marginTop: 8 }} alignItems="center" >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
      </Stack>
      {/* LOGIN FORM */}
      <LoginForm />
      <Stack direction="row" justifyContent="space-between" sx={{ mt: 3 }}>
        <Link component={RouterLink} to="/forget-password"> Forget password?</Link>
        <Link component={RouterLink} to="/signup"> Don't have an account? Sign Up</Link>
      </Stack>

      <Typography variant="body2" textAlign="center" sx={{ mt: 6, mb: 1 }}>
        Copyright &copy; 2021 Gitgram.org
      </Typography>

    </Container >
  )
}

export default LoginPage 