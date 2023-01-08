import { Typography, Container } from '@mui/material'
import { } from '@mui/system'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../features/Navbar'
import { useAppSelector } from '../../hooks/redux'
import FollowSuggestionList from './FollowSuggestionList'

const ExplorePage = () => {
    const { token, user } = useAppSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (!token || !user) {
            navigate("/login")
        }
    }, [])

    return (<>
        <Navbar />
        <Container maxWidth="md">
            <Typography variant='h4' p={3} fontFamily={"Rubik"} fontWeight="500">
                Follow Suggestions
            </Typography>
            <FollowSuggestionList />
        </Container>
    </>)
}

export default ExplorePage