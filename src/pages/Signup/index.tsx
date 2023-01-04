import { Avatar, Box, Grid, Button, Link, Stack, TextField, Typography, useTheme } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Container from "@mui/material/Container"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import React from 'react'

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
        <Stack component="form" sx={{ mt: 4 }} spacing={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField label="First Name"
                fullWidth id="email"
                name="email"
                autoComplete='email'
                required={true}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField label="Last Name"
                fullWidth id="email"
                name="email"
                autoComplete='email'
                required={true}
              />
            </Grid>

          </Grid>
          <TextField
            label="Email Address"
            type="email"
            fullWidth
            required={true} />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required={true} />
          <TextField
            label="location"
            fullWidth
            required={true} />
          <TextField
            label="occupation"
            fullWidth
            required={true} />

        </Stack>
      </Stack>
      <Button variant="contained" fullWidth sx={{ mt: 6 }}> Sign Up</Button>
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