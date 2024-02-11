import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Logo from '../../assets/logo.svg';

const Header = () => {
    const location = useLocation();

    const navItems = useMemo(() => [
        { name: 'HOME', href: '/', path: '/' },
        { name: 'ABOUT', href: '/about-us', path: '/about-us' },
        { name: 'SERVICES', href: '/services', path: '/services' },
        { name: 'GALLERY', href: '/gallery', path: '/gallery' },
        { name: 'CONTACT US', href: '/contact', path: '/contact' },
    ], []);

    const isActive = (path) => location.pathname === path;

    return (
        <Navbar bg="transparent" expand="lg" className="container">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={Logo} alt="Proficient Constructions" width="100" height="auto" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {navItems.map((item) => (
                            <Nav.Link as={Link} to={item.href} key={item.name} className={isActive(item.path) ? 'active' : ''}>
                                {item.name}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <Nav>
                        <Nav.Link href="tel:+12048698505" className="d-lg-none">204-869-8505</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="d-none d-lg-flex">
                    <Button variant="outline-info" href="tel:+12048698505">204-869-8505</Button>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
