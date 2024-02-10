import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './container/home';
import About from './container/about';
import Services from './container/services';
import Gallery from './container/gallery';
import Contact from './container/contact';

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