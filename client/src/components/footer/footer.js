import React from 'react';
import Logo from '../../assets/logo.svg';
import './footer.css'

const Footer = () => {
    return (
        <div class="card mb-3">
            <div class="card-body">
                <div class="card-title">
                    <h5>Proficient Construction</h5>
                    <img src={Logo} alt="Proficient Constructions" width="100" height="100%" />
                </div>
                
                <div class="contact-info">
                    <p>Contact Information:</p>
                    <ul>
                        <li>Phone: 401-115-4576</li>
                        <li>Email: ProficientConstruction@gmail.com</li>
                        <li>Hours of Operation: Mon - Fri: 8 AM - 8 PM</li>
                    </ul>
                </div>
                <div class="areas-covered">
                    <p>Areas Covered:</p>
                    <ul>
                        <li>Calgary</li>
                        <li>Airdrie</li>
                        <li>Okotoks</li>
                        <li>Surrounding Areas</li>
                    </ul>
                </div>
            </div>
            <div class="card-footer bg-transparent">© 2024 Proficient Construction Ltd</div>
        </div>
    )
}
export default Footer;