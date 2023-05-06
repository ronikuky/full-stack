import React from 'react'
import { Card, CardActionArea, } from '@mui/material'
import CardHead from './CardHead';
import CardBody from './CardBody';
import CardActionBar from './CardActionBar';

const CardComponent = ({card, onDelete, onEdit, onLike}) => {

    return (
        <Card sx={{ minWidth: 300, maxWidth: 350 }}>
            <CardActionArea>
                <CardHead image={card.image} />
                <CardBody card={card} />
            </CardActionArea>
            <CardActionBar 
            cardId={card._id}
            onLike ={onLike}
            onDelete ={onDelete}
            onEdit ={onEdit} 
            />
        </Card>
    )
}

export default CardComponent