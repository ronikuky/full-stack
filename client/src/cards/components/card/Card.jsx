import React from 'react'
import { Box, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CallIcon from '@mui/icons-material/Call';
import GradeSharpIcon from '@mui/icons-material/GradeSharp';

const CardComponent = () => {
    return (
        <Card sx={{ minWidth: 300, maxWidth: 350 }}>
            <CardActionArea>
                {/* header */}
                <CardMedia component="img" height="200" alt="Card Image" image='assets/images/computer.jpg'>
                </CardMedia>
                {/* body */}
                <CardContent>
                    <CardHeader title="Title" subheader="subtitle" sx={{ p: 0, mb: 1 }}>
                    </CardHeader>
                    <Divider></Divider>
                    <Box>
                        <Typography variant="body2" color={"text.secondary"}>
                            <Typography fontWeight={700} component="span">
                                Phone:
                            </Typography>
                            <Typography component="span">054-3390501</Typography>
                        </Typography>
                        <Typography variant="body2" color={"text.secondary"}>
                            <Typography fontWeight={700} component="span">
                                address:
                            </Typography>
                            <Typography component="span">Haifa</Typography>
                        </Typography>
                        <Typography variant="body2" color={"text.secondary"}>
                            <Typography fontWeight={700} component="span">
                                Card Number:
                            </Typography>
                            <Typography component="span">78568</Typography>
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
            {/* footer */}
            <CardActions sx={{ pt: 0, justifyContent: "space-between" }}>
                <Box>
                    <IconButton aria-label='DeleteIcon'><DeleteIcon /></IconButton>
                    <IconButton aria-label='edit'> <EditIcon /></IconButton>
                </Box>
                <Box>
                    <IconButton aria-label='call'> <CallIcon /></IconButton>
                    <IconButton aria-label='favorit'><GradeSharpIcon /> </IconButton>

                </Box>
            </CardActions>
        </Card>
    )
}

export default CardComponent