import React from 'react'
import { IconButton, Stack, Typography } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const state = useSelector(state => state)
    console.log("state in navbar ", state)
    return (
        <Stack p={2} direction="row" justifyContent="space-between">
            <Typography variant="h5" >Gitgram</Typography>
            <Stack direction="row" spacing={2} alignItems="center">
                <IconButton aria-label="create post"  >
                    <AddBoxIcon htmlColor='black' color="primary" fontSize='large' />
                </IconButton>
            </Stack>
        </Stack >
    )
}

export default Navbar 