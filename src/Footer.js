import logo from './icons_assets/lemon dessert.jpg'
import { useLinks } from './context/navContext'

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

    return (
     <>
        <img src={logo} alt="LogoFooter" />
        <div>
            <h3>Doormat Navigation</h3>
            <ul>
                {links.map((link) => (
                    <li><a key={link.Name} href={link.URL}>{link.Name}</a></li>
                ))}
            </ul>
        </div>
        <div>
            <h3>Contact</h3>
            <ul>
                {contactLinks.map((link) => (
                    <li><a key={link.Name} href={link.URL}>{link.Name}</a></li>
                ))}
            </ul>
        </div>
        <div>
            <h3>Social Media Links</h3>
            <ul>
                {socialMediaLinks.map((link) => (
                    <li><a key={link.Name} href={link.URL}>{link.Name}</a></li>
                ))}
            </ul>
        </div>
     </>
    )
}

