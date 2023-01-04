import { Avatar, Box, Button, Checkbox, FormControlLabel, Link, Stack, TextField, Typography, useTheme } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Container from "@mui/material/Container"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import React from 'react'

const LoginPage = () => {
  const theme = useTheme()
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
      <Stack>
        <Stack component="form" sx={{ mt: 4 }} spacing={4}>
          <TextField label="Email Address"
            fullWidth id="email"
            name="email"
            autoComplete='email'
            required={true}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required={true} />
        </Stack>
      </Stack>
      <FormControlLabel label="Remember me"
        control={<Checkbox value="remember" />}
        sx={{ mt: 3 }}
      />
      <Button variant="contained" fullWidth sx={{ mt: 1 }}> Sign In</Button>
      <Stack direction="row" justifyContent="space-between" sx={{ mt: 3 }}>
        <Link component={RouterLink} to="/forget-password"> Forget password?</Link>
        <Link component={RouterLink} to="/signup"> Don't have an account? Sign Up</Link>
      </Stack>
    </Container >
  )
}

export default LoginPage 