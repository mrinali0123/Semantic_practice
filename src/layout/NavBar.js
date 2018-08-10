import React from 'react'
import { Menu } from 'semantic-ui-react';
import DropdownSelect from './DropDown';
import logo from '../logo.svg';

const NavBar = () => (
    <Menu>
        <Menu.Menu>
            <Menu.Item>Semantic Ui<img src={logo} className="App-logo" alt="logo" />
            </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position="right">
            <Menu.Item>
                Sign Up
                </Menu.Item>
            <Menu.Item>
                LOgin
                </Menu.Item>
            <DropdownSelect/>
        </Menu.Menu>
    </Menu>
)
export default NavBar;