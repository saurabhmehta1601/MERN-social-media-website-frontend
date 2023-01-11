import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Post from '../Post'
import { useAppSelector } from '../../hooks/redux'

interface IPost {
    _id: string,
    title: string,
    description: string,
    authorId: string,
    authorName: string,
    authorProfilePicture: string,
    createdAt: string,
    postImage: string,
    liked: boolean
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
                {posts.map(post => (
                    <Post
                        key={post._id}
                        _id={post._id}
                        title={post.title}
                        description={post.description}
                        authorName={post.authorName}
                        postedOn={post.createdAt}
                        liked={post.liked}
                        authorProfilePicture={post.authorProfilePicture}

                        postImage={"http://localhost:8000/uploads/" + post.postImage}
                    />))
                }
            </Stack>
        </Container>
    )
}

export default Feed