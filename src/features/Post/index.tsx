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

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
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

const Post = () => {
    const [isPostLiked, setIsPostLiked] = React.useState(true)
    const [isPostExpanded, setIsPostExpanded] = React.useState(false)
    return (
        <Card>
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
            <CardMedia component="img"
                alt="post image"
                src="https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
            <CardContent>
                <Typography variant="h6" color="text.primary" >
                    Git and Github For Beginners
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton onClick={() => setIsPostLiked(prev => !prev)} >
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
                <Typography paragraph p={1}>
                    Git is something everyone knows about
                </Typography>
            </Collapse>

        </Card>
    )
}

export default Post 