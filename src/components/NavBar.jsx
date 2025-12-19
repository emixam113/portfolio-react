import {Link} from 'react-router-dom';

function NavBar(){
    return (
        
    <nav className="">
        <ul className="list-none flex gap-5 justify-center p-20 text-white font-InknutAntiqua  hover:cursor-pointer">
        <li className="hover:underline transition duration-300"><Link to="/">Home</Link></li>
        <li className="hover:underline transition duration-300"><Link to="/Presentation">Présentation</Link></li>
        <li className="hover:underline transition duration-300"><Link to ="/Projets">Présentation de projets</Link></li>
        <li className="hover:underline transition duration-300"><Link to ="/Contact">Contact</Link></li>
        </ul>
    </nav>
    );
}
export default NavBar;