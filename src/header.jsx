import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Watch Around</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
            <Navbar.Collapse>
                <Nav> 
                    <NavItem eventKey={1} href="##">
                        Sign In 
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Register
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;