import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/home';
import About from './components/about/about';
import Services from './components/services/services';
import Gallery from './components/gallery/gallery';
import Contact from './components/contact/contact';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default AppRoutes;