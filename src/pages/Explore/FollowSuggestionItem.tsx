import { Avatar, Button, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import Typography from '@mui/material/Typography'
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

    const toggleFollowStatus = () => {

    }

    return (
        <ListItem
            secondaryAction={
                followStatus === "follow" ?
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={toggleFollowStatus}
                    >
                        <Typography variant="body2" fontFamily={"Rubik"} fontWeight="500">
                            Follow
                        </Typography>
                    </Button> :
                    <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        onClick={toggleFollowStatus}
                    >
                        <Typography variant="body2" fontFamily={"Rubik"} fontWeight="500">
                            Following
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
    )
}

export default FollowSuggestionItem