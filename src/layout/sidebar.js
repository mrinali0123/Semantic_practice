import React,{Component} from 'react'
import {Button ,Header, Menu,Icon,Segment,Sidebar, Image} from 'semantic-ui-react'

export default class SideBar extends Component{
    state= {visible:false}
    handleButtonClick=()=>{
        this.setState({visible:!this.state.visible})
    }

    handleSidebarHide =() =>{
        this.setState({ visible:false})
    }
    render(){
        const {visible} =this.state
        return(
            <div>
                <Button onClick={this.handleButtonClick} >MENU </Button>

                <Sidebar.Pushable as={Segment}>
                <Sidebar
                as={Menu}
                animation="overlay"
                icon='labeled'
                inverted
                vertical 
                visible={visible}
                onHide={this.handleSidebarHide}
                width='thin'>
                    <Menu.Item as='a'><Icon name="home" inverted color='blue'/>Home</Menu.Item>
                    <Menu.Item as='a'><Icon name="qq"/>About Us</Menu.Item>
                    <Menu.Item as='a'><Icon name="clipboard list"/>List</Menu.Item>
                    <Menu.Item as='a'><Icon name="phone volume"/>Contact US</Menu.Item>
                </Sidebar>
                <Sidebar.Pusher dimmed={visible}>
                    <Segment basic>
                    <Header as='h3'textAlign='center' size='large'>MailChimps</Header>
                    <Image src='../../mailchimp-pro.png' centered/>
                    </Segment>
                </Sidebar.Pusher>
                </Sidebar.Pushable> 
            </div>
        )
    }
}