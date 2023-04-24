import './App.css';
import React from 'react';
import { Navbar,Nav} from 'react-bootstrap';

function BottomNav(){
    return (
        <Navbar fixed='bottom'>
            <Nav className = 'w-100 justify-content-around'> 
                <Nav.Item>
                    <Nav.Link href='#'>
                        Home
                    </Nav.Link>
                    <Nav.Link href='#'>
                        Buy
                    </Nav.Link>
                    <Nav.Link href='#'>
                        Settings
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}

export default BottomNav;