import React from 'react'
import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
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
import PostAddIcon from '@mui/icons-material/PostAdd';
import ExploreIcon from '@mui/icons-material/Explore';

const Navbar = () => {
    const { user } = useAppSelector(state => state.auth)
    const theme = useTheme()
    const isNonMobileScreen = useMediaQuery(theme.breakpoints.up('sm'))

    const dispatch = useAppDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <Box p={2} sx={{ backgroundColor: indigo[500], color: grey[200], }} >
            <Container maxWidth={"md"}>
                <Stack direction={"row"} justifyContent="space-between">
                    <Typography variant="h4" fontWeight={"500"} fontFamily={"Rubik"}  >
                        <Link component={RouterLink} to="/" underline='none' color={"white"}>
                            Gitgram
                        </Link>
                    </Typography>

                    <Stack direction="row" spacing={1} alignItems="center">
                        <Stack direction="row" spacing={1} mr={3}>
                            <Link component={RouterLink} to="/explore" underline="none" color="inherit" >
                                <IconButton >
                                    <ExploreIcon htmlColor='white'
                                        fontSize={isNonMobileScreen ? 'large' : 'medium'}
                                    />
                                </IconButton>
                            </Link>
                            <Link component={RouterLink} to="/create-post" underline="none" color="inherit" >
                                <IconButton >
                                    <PostAddIcon htmlColor='white'
                                        fontSize={isNonMobileScreen ? 'large' : 'medium'}
                                    />
                                </IconButton>
                            </Link>

                            <IconButton onClick={handleLogout}>
                                <LogoutIcon htmlColor='white'
                                    fontSize={isNonMobileScreen ? 'large' : 'medium'}
                                />
                            </IconButton>

                        </Stack>

                        <Avatar
                            src={user ? "http://localhost:8000/uploads/" + user.profilePicture : ""}
                            alt={user ? user.firstName + " " + user.lastName : ""}
                        />

                    </Stack>

                </Stack>
            </Container>
        </Box >
    )
}

export default Navbar 