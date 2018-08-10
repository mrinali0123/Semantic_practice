import React from 'react'
import{Card, Image} from 'semantic-ui-react';
import './Card.css';
const CardToDisplay=()=>(
<Card className="mainDisplay">
<Image  src='../../avatar.png' />
    <Card.Content>
        <Card.Header>Humpty Sharma</Card.Header>
        <Card.Description>Humpty is the poor guy running after.......</Card.Description>
    </Card.Content>
</Card>
)
export default CardToDisplay;