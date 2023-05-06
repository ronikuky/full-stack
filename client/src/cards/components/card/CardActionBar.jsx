import { Box, CardActions, IconButton } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CallIcon from '@mui/icons-material/Call';
import GradeSharpIcon from '@mui/icons-material/GradeSharp';

const CardActionBar = ({cardId, onDelete, onEdit, onLike}) => {
  return (
    <>
      <CardActions sx={{ pt: 0, justifyContent: "space-between" }}>
                <Box>
                    <IconButton onClick={() => onDelete(cardId)} aria-label='DeleteIcon'><DeleteIcon /></IconButton>
                    <IconButton onClick={() => onEdit(cardId)} aria-label='edit'> <EditIcon /></IconButton>
                </Box>
                <Box>
                    <IconButton aria-label='call'> <CallIcon /></IconButton>
                    <IconButton onClick={() => onLike(cardId)} aria-label='favorit'><GradeSharpIcon /> </IconButton>

                </Box>
            </CardActions>
    </>
  )
}


export default CardActionBar