import React, { useState } from 'react'
import { Avatar, Button, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useAppSelector } from '../../hooks/redux'

interface IUser {
    _id: string
    firstName: string,
    lastName: string,
    profilePicture: string,
    following: string[]
}

interface IProps {
    user: IUser
    follows: boolean
}

const FollowSuggestionItem = ({ user, follows }: IProps) => {
    const { user: authUser } = useAppSelector(state => state.auth)
    console.log("user is", user)

    const [isFollowing, setIsFollowing] = useState(follows)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const followUser = async () => {

    }

    const unfollowUser = async () => {

    }

    return (<>
        {
            <ListItem
                secondaryAction={
                    isFollowing ?
                        <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            onClick={unfollowUser}
                        >
                            <Typography variant="body2" fontFamily={"Rubik"} fontWeight="500">
                                Following
                            </Typography>
                        </Button>
                        :
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={followUser}
                        >
                            <Typography variant="body2" fontFamily={"Rubik"} fontWeight="500" >
                                Follow
                            </Typography>
                        </Button>
                }
            >
                <ListItemButton>
                    <ListItemAvatar >
                        <Avatar
                            alt={user.firstName + " " + user.lastName}
                            src={"http://localhost:8000/uploads/" + user.profilePicture}
                        />
                    </ListItemAvatar>
                    <ListItemText>
                        {user.firstName} {user.lastName}
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        }
    </>
    )
}

export default FollowSuggestionItem