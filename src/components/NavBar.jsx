import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="w-full">
            {/* - flex-col : empilé verticalement sur mobile
              - md:flex-row : aligné horizontalement sur ordinateur
              - p-6 : padding raisonnable sur mobile
              - md:p-20 : votre padding d'origine pour les grands écrans
            */}
            <ul className="list-none flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center p-6 md:p-20 text-white font-InknutAntiqua">
                <li className="hover:underline transition duration-300 decoration-white underline-offset-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:underline transition duration-300 decoration-white underline-offset-4">
                    <Link to="/Presentation">Présentation</Link>
                </li>
                <li className="hover:underline transition duration-300 decoration-white underline-offset-4">
                    <Link to="/Projets">Présentation de projets</Link>
                </li>
                <li className="hover:underline transition duration-300 decoration-white underline-offset-4">
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;