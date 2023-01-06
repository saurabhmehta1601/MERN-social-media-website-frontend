import React from 'react'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Post from '../Post'

const Feed = () => {
    return (
        <Container maxWidth="xs" sx={{ p: 2 }}>
            <Stack spacing={2}>
                <Post />
                <Post />
                <Post />
            </Stack>
        </Container>
    )
}

export default Feed