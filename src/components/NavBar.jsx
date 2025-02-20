import {Link} from 'react-router-dom';

function NavBar(){
    return (
        
    <nav className="underline">
        <ul className="list-none flex gap-5 justify-center p-20 text-white font-InknutAntiqua underline hover:cursor-pointer">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Presentation">Présentation</Link></li>
        <li><Link to ="/Projets">Présentation de projets</Link></li>
        <li><Link to ="/Contact">Contact</Link></li>
        </ul>
    </nav>
    );
}
export default NavBar;