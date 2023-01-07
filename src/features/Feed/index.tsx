import React from 'react'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Post from '../Post'

const Feed = () => {
    return (
        <Container maxWidth="sm" sx={{ p: 2 }}>
            <Stack spacing={2}>
                <Post
                    title="Rise of entrepreneurship"
                    description="Entrepreneurship is the process of designing, launching and running a new business, which is often initially a small business. The people who create these businesses are called entrepreneurs. Entrepreneurs are important because they drive innovation and economic growth."
                    authorName='Samuel Johnson'
                    postedOn='Jauary 7, 2023'

                    authorProfilePicture='https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'

                    postImage='https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                />
            </Stack>
        </Container>
    )
}

export default Feed