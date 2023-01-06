import React from 'react'
import { Button, Stack, Typography, useTheme } from '@mui/material'
import { grey, indigo } from '@mui/material/colors';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import { logout } from '../../state/features/authSlice';

const Navbar = () => {
    const { user } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <Box p={2} sx={{ backgroundColor: indigo[500], color: grey[200], }} >
            <Container maxWidth={"md"}>
                <Stack direction={"row"} justifyContent="space-between">
                    <Typography variant="h4" fontWeight={"500"} fontFamily={"Rubik"}  >Gitgram</Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Link component={RouterLink} to="/" underline="none" color="inherit" >
                            <Button variant="contained">Feed</Button>
                        </Link>
                        <Link component={RouterLink} to="/create-post" underline="none" color="inherit" >
                            <Button variant="contained">Create Post</Button>
                        </Link>

                        <IconButton onClick={handleLogout}>
                            <LogoutIcon htmlColor='white' />
                        </IconButton>

                        <Avatar src={user ? "http://localhost:8000/uploads/" + user.profilePicture : ""} />

                    </Stack>

                </Stack>
            </Container>
        </Box >
    )
}

export default Navbar 