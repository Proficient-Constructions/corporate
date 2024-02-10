import React, { useEffect, useState, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';


const Header = () => {
    const location = useLocation();
    const [currentNav, setCurrentNav] = useState('');

    const navItems = useMemo(()=>[
        { name: 'HOME', href: '/', path: '/' },
        { name: 'ABOUT', href: '/about-us', path: '/about-us' },
        { name: 'SERVICES', href: '/services', path: '/services' },
        { name: 'GALLERY', href: '/gallery', path: '/gallery' },
        { name: 'CONTACT US', href: '/contact', path: '/contact' },
    ], []);

    useEffect(() => {
        const currentItem = navItems.find(item => item.path === location.pathname);
        if (currentItem) {
            setCurrentNav(currentItem.name);
        }
        else {
            setCurrentNav('HOME');
        }

    }, [location, navItems]);

    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        <img src={Logo} alt="Proficient Constructions" width="100" height="auto" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {navItems.map((item) => (
                                <li className="nav-item" key={item.name}>
                                    <Link
                                        className={`nav-link ${currentNav === item.name ? 'active' : ''}`}
                                        to={item.href}
                                        onClick={() => setCurrentNav(item.name)}
                                        aria-current={currentNav === item.name ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Header;