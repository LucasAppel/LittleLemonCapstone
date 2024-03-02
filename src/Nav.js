import logo from './icons_assets/Logo.svg'
import { useLinks } from './context/navContext';



function Nav(){
    const links = useLinks();
    return (
        <>
        <img src={logo} alt="logo"/>
        <ul>
            {links.map((link) => (
                <li><a key={link.Name} href={link.URL}>{link.Name}</a></li>
            ))}
        </ul>
        </>
    )
}

export default Nav;