import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Container } from 'react-bootstrap';
import '../styles/navbar.css';


export default class NavbarComp extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" variant="dark" className='navbar'>
                <Container>
                    <Navbar.Brand><h1 className='name'> Aisha Lugg </h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='nav'>
                            <Nav.Link><Link to="/" className='navLink'>Home</Link></Nav.Link>
                            <Nav.Link><Link to="/projects" className='navLink' >Projects</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}