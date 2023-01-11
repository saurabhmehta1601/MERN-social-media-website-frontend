import { List, Container } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../hooks/redux'
import FollowSuggestionItem from './FollowSuggestionItem'

interface IUser {
    _id: string
    firstName: string,
    lastName: string,
    profilePicture: string,
    following: string[]
}

const FollowSuggestionList = () => {
    const [allUsers, setAllUsers] = useState([])
    const { token, user: authUser } = useAppSelector(state => state.auth)
    console.log("all usersa re ", allUsers)

    useEffect(() => {
        const fetchAllUsers = async () => {
            if (authUser) {
                const fetchAllUsersResponse = await axios.get('http://localhost:8000/allusers', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log("fetched users are ", fetchAllUsersResponse.data)

                if (fetchAllUsersResponse.status === 200) {
                    const suggestedUsers = fetchAllUsersResponse.data.filter((user: IUser) => user._id !== authUser._id)
                    setAllUsers(suggestedUsers)
                }

            }
            else {
                console.log("Error fetching users ")
            }

        }
        fetchAllUsers()
    }, [authUser])
    return (
        <Container maxWidth="sm">
            <List>
                {authUser && allUsers.map((user: IUser) => (
                    <FollowSuggestionItem
                        key={user._id} user={user}
                        follows={authUser.following.includes(user._id)}
                    />
                ))}
            </List>
        </Container>
    )
}

export default FollowSuggestionList