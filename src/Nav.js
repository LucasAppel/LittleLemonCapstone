import logo from './icons_assets/Logo.svg'
import { useLinks } from './context/navContext';
import React from 'react';
import { Link } from 'react-router-dom';



function Nav(){
    const links = useLinks();
    return (
        <nav className="gridParent">
            <img src={logo} alt="logo" className="nav1 segment" />
            <ul className="nav2">
                {links.map((link) => (
                    <li key={"header_" + link.Name}><Link to={link.URL}>{link.Name}</Link></li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;