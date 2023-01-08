import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Post from '../Post'
import { useAppSelector } from '../../hooks/redux'

interface IPost {
    id: string,
    title: string,
    description: string,
    authorId: string,
    authorName: string,
    authorProfilePicture: string,
    createdAt: string,
    postImage: string
}

const Feed = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    const { token } = useAppSelector(state => state.auth)

    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch('http://localhost:8000/posts/feed', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (res.status === 200) {
                const data = await res.json()
                setPosts(data)
            }
        }
        getPosts()
    }, [])
    return (
        <Container maxWidth="sm" sx={{ p: 2 }}>
            <Stack spacing={2}>
                {/* <Post
                    title="Rise of entrepreneurship"
                    description="Entrepreneurship is the process of designing, launching and running a new business, which is often initially a small business. The people who create these businesses are called entrepreneurs. Entrepreneurs are important because they drive innovation and economic growth."
                    authorName='Samuel Johnson'
                    postedOn='Jauary 7, 2023'

                    authorProfilePicture='https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'

                    postImage='https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                /> */}

                {posts.map(post => (<Post
                    title={post.title}
                    description={post.description}
                    authorName={post.authorName}
                    postedOn={post.createdAt}

                    authorProfilePicture={post.authorProfilePicture}

                    postImage={ "http://localhost:8000/uploads/" + post.postImage}
                />))}
            </Stack>
        </Container>
    )
}

export default Feed