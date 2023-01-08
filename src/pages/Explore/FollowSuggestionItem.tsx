import { Avatar, Button, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

interface IUser {
    _id: string
    firstName: string,
    lastName: string,
    profilePicture: string,
}

interface IProps {
    followStatus: "follow" | "following",
    user: IUser
}

const FollowSuggestionItem = ({ followStatus, user }: IProps) => {
    return (
        <ListItem
            secondaryAction={
                followStatus === "follow" ?
                    <Button variant="contained" color="primary" size="small"> Follow </Button> :
                    <Button variant="outlined" color="primary" size="small">Following</Button>
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
    )
}

export default FollowSuggestionItem