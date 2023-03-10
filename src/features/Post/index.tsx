// Refernce Card Docs https://mui.com/material-ui/react-card/

import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import FavoriteIcon from "@mui/icons-material/Favorite"
import Collapse from '@mui/material/Collapse'
import { grey, red } from '@mui/material/colors'
import ShareIcon from '@mui/icons-material/Share';
import { styled } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios'
import { useAppSelector } from '../../hooks/redux'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

interface IProps {
    _id: string
    title: string,
    description: string,
    authorName: string,
    authorProfilePicture: string,
    postImage: string,
    postedOn: string,
    liked: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }: any) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Post = ({ _id: postId, authorName, authorProfilePicture, postedOn, title, description, postImage, liked }: IProps) => {
    const { token } = useAppSelector(state => state.auth)
    const [isPostLiked, setIsPostLiked] = React.useState(liked)
    const [isPostExpanded, setIsPostExpanded] = React.useState(false)
    const handleLikeButtonClick = async () => {
        try {
            await axios.patch('http://localhost:8000/posts/toggleIsLiked',
                { postId },
                {
                    headers: {
                        'Content-Type': "application/json",
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            setIsPostLiked(prev => !prev)
        } catch (error) {
            console.log("post like/dislike failed");
        }
    }
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar
                        alt={authorName}
                        src={authorProfilePicture}
                    />
                }
                title={authorName}
                titleTypographyProps={{ variant: "h6" }}
                subheader={postedOn}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            <CardMedia component="img"
                alt="post image"
                src={postImage}
                sx={{ maxHeight: '250px', objectFit: 'contain' }}
            />
            <CardContent>
                <Typography variant="h6" color="text.primary" >
                    {title}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton onClick={handleLikeButtonClick} >
                    <FavoriteIcon sx={{ opacity: 1, color: isPostLiked ? 'red' : grey[500] }} />
                </IconButton>
                <IconButton >
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    sx={{ marginLeft: "auto" }}
                    onClick={() => setIsPostExpanded(prev => !prev)}
                    expand={isPostExpanded}
                    aria-expanded={isPostExpanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>

            </CardActions>

            <Collapse in={isPostExpanded} timeout="auto" unmountOnExit>
                <Typography paragraph p={1} >
                    {description}
                </Typography>
            </Collapse>

        </Card>
    )
}

export default Post 