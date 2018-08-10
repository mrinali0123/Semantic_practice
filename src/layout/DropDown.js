import React from 'react'
import {Dropdown} from 'semantic-ui-react';

const DropdownSelect =() =>(
<Dropdown item text="Language">
                <Dropdown.Menu>
                    <Dropdown.Item>English1</Dropdown.Item>
                    <Dropdown.Item>English2</Dropdown.Item>
                    <Dropdown.Item>English3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
)
export default DropdownSelect;


