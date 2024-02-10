import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './container/home';
import About from './container/about';

function AppRoutes() {
    return (  
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;