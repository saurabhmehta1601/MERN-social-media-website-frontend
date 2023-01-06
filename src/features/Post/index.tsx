// Refernce Card Docs https://mui.com/material-ui/react-card/

import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import FavoriteIcon from "@mui/icons-material/Favorite"
import Collapse from '@mui/material/Collapse'
import { red } from '@mui/material/colors'

const Post = () => {
    const [isPostLiked, setIsPostLiked] = React.useState(true)
    const [isPostExpanded, setIsPostExpanded] = React.useState(false)
    return (
        <Card sx={{ padding: 2 }}>
            <CardHeader
                avatar={
                    <Avatar
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    />
                }
                title={"John Doe"}
                titleTypographyProps={{ variant: "h6" }}
                subheader="September 14, 2016"
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Paella dish"
                sx={{
                    width: '100%', height: "275px", objectFit: "contain", objectPosition: "center",
                    borderRadius: "12px"
                }}
            />
            <CardContent >
                <Typography variant="body1" color="text.primary">
                    Git and Github For Beginners
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton onClick={() => setIsPostLiked(prev => !prev)}>
                    <FavoriteIcon htmlColor={isPostLiked ? red[600] : undefined} />
                </IconButton>

            </CardActions>

            <Collapse in={isPostExpanded}></Collapse>
        </Card>
    )
}

export default Post 