import React from "react"
import { Header,Segment,Image } from 'semantic-ui-react'
import './Header.css'

const Logo= () =>(
    <Segment inverted>
    <Header as='h1' inverted  size="large" textAlign="center" >
    <Image src='../../mailchimp.png'/>
    LOGO</Header>
    </Segment>
)
export default Logo;