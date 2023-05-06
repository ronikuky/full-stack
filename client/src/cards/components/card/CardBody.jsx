import { Box, CardContent, CardHeader, Divider, Typography } from '@mui/material'
import React from 'react'

const CardBody = ({card}) => {


const {city, street, houseNumber}= card.address;

  return (
    <>
     <CardContent>
                    <CardHeader title="Title" subheader="subtitle" sx={{ p: 0, mb: 1 }}>
                    </CardHeader>
                    <Divider></Divider>
                    <Box>
                        <Typography variant="body2" color={"text.secondary"}>
                            <Typography fontWeight={700} component="span">
                                Phone:
                            </Typography>
                            <Typography component="span">{card.phone}</Typography>
                        </Typography>
                        <Typography variant="body2" color={"text.secondary"}>
                            <Typography fontWeight={700} component="span">
                                address:
                            </Typography>
                            <Typography component="span">{city} {street} {houseNumber}</Typography>
                        </Typography>
                        <Typography variant="body2" color={"text.secondary"}>
                            <Typography fontWeight={700} component="span">
                                Card Number:
                            </Typography>
                            <Typography component="span">{card.bizNumber}</Typography>
                        </Typography>
                    </Box>
                </CardContent>
    
    </>
  )
}


export default CardBody