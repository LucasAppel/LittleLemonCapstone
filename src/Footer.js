import logo from './icons_assets/Logo.svg'
import { useLinks } from './context/navContext'
import { Link } from 'react-router-dom';
import React from 'react';

export default function Footer(){
    const links = useLinks();
    const contactLinks = [
        {
            Name: "Adress",
            URL: "www.google.de"
        },
        {
            Name: "Phone",
            URL: "www.google.de"
        },
        {
            Name: "Email",
            URL: "www.google.de"
        }
    ];
    const socialMediaLinks = [
        {
            Name: "Adress",
            URL: "www.google.de"
        },
        {
            Name: "Phone",
            URL: "www.google.de"
        },
        {
            Name: "Email",
            URL: "www.google.de"
        }
    ];

    const generateLink = (link) => (
        <li><Link key={link.Name} to={link.URL}>{link.Name}</Link></li>
    )

    return (
     <footer className="gridParent">
        <img src={logo} alt="LogoFooter" className="segment footer1"/>
        <nav className="segment footer2">
            <h3>Doormat Navigation</h3>
            <ul>
                {links.map(generateLink)}
            </ul>
        </nav>
        <nav className="segment footer3">
            <h3>Contact</h3>
            <ul>
                {contactLinks.map(generateLink)}
            </ul>
        </nav>
        <nav className="segment footer4">
            <h3>Social Media Links</h3>
            <ul>
                {socialMediaLinks.map(generateLink)}
            </ul>
        </nav>
     </footer>
    )
}

