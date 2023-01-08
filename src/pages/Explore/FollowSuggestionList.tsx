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
}

const FollowSuggestionList = () => {
    const [allUsers, setAllUsers] = useState([])
    const { token } = useAppSelector(state => state.auth)

    useEffect(() => {
        const fetchAllUsers = async () => {
            const fetchAllUsersResponse = await axios.get('http://localhost:8000/allusers', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (fetchAllUsersResponse.status === 200) {
                setAllUsers(fetchAllUsersResponse.data)
            }
            else {
                console.log("Error fetching users ")
            }

        }
        fetchAllUsers()
    }, [])
    return (
        <Container maxWidth="sm">
            <List>
                {allUsers.map((user: IUser) => (
                    <FollowSuggestionItem followStatus='follow' user={user} />
                ))}
            </List>
        </Container>
    )
}

export default FollowSuggestionList