import logo from './icons_assets/Logo.svg'
import { useLinks } from './context/navContext';



function Nav(){
    const links = useLinks();
    return (
        <nav class="gridParent">
            <img src={logo} alt="logo" class="nav1 segment" />
            <ul class="nav2">
                {links.map((link) => (
                    <li><a key={link.Name} href={link.URL}>{link.Name}</a></li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;