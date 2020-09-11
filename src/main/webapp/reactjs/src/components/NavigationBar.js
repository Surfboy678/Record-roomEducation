import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


class NavigationBar extends React.Component{
    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="">Ewidencja sal</Navbar.Brand>
                <Nav className="mr-auto">
      <Nav.Link href="#">Dodaj salę</Nav.Link>
      <Nav.Link href="#features">Lista sal</Nav.Link>
    </Nav>
            </Navbar>    
        );
    }

}

export default NavigationBar;