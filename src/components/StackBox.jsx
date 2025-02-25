import { motion } from "framer-motion";
import logoJavascript from "../assets/imgs/javaScript.png";
import logoDocker from "../assets/imgs/docker.png";
import logoMySQL from "../assets/imgs/MySql.png";
import logoReact from "../assets/imgs/reactJS.png";
import logoNode from "../assets/imgs/nodeJS.png";
import logoNestJS from "../assets/imgs/Nestjs.png";
import logoTailwindcss from "../assets/imgs/tailwindcss.png";
import logoTypeScript from "../assets/imgs/TypeScript.png";
import logoExpressJS from "../assets/imgs/expressjs.png";

// Liste des technologies
const technologies = [
    { id: 1, name: "Docker", logo: logoDocker, description: "C'est une plateforme de conteneurisation qui permet d'empaqueter et de déployer des applications avec leurs dépendances." },
    { id: 2, name: "JavaScript", logo: logoJavascript, description: "C'est un langage de programmation qui permet d'ajouter de l'interactivité aux pages web et de créer des applications frontend et backend." },
    { id: 3, name: "React", logo: logoReact, description: "C'est une bibliothèque JavaScript permettant de créer des interfaces utilisateurs réactives et modulaires." },
    { id: 4, name: "MySQL", logo: logoMySQL, description: "C'est un système de gestion de bases de données relationnelles open-source, utilisé pour gérer des données efficacement." },
    { id: 5, name: "NodeJS", logo: logoNode, description: "C'est un environnement d'exécution JavaScript côté serveur, qui permet de construire des applications performantes et scalables." },
    { id: 6, name: "NestJS", logo: logoNestJS, description: "C'est un framework NodeJS basé sur TypeScript, qui facilite le développement d'API et d'applications backend robustes." },
    { id: 7, name: "TailwindCSS", logo: logoTailwindcss, description: "C'est un framework CSS utilitaire qui permet de créer rapidement des interfaces modernes et responsives." },
    { id: 8, name: "TypeScript", logo: logoTypeScript, description: "C'est une surcouche de JavaScript qui ajoute un typage statique pour améliorer la maintenabilité et la robustesse du code." },
    { id: 9, name: "ExpressJS", logo: logoExpressJS, description: "C'est un framework minimaliste de NodeJS permettant de créer rapidement des API Web et des applications backend." }
];

const StackBox = () => {
    return (
        <div className="flex flex-wrap justify-center gap-6 py-10 bg-gray-900">
            {technologies.map((tech) => (
                <motion.div
                    key={tech.id}
                    className="relative flex flex-col items-center p-4 w-44 h-44 bg-gray-800 rounded-xl shadow-lg transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                >
                    {/* Image du logo avec fond blanc */}
                    <div className="w-16 h-16 flex items-center justify-center bg-white p-2 rounded-md shadow-md">
                        <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
                    </div>

                    {/* Nom de la technologie */}
                    <h3 className="text-white font-semibold mt-2">{tech.name}</h3>

                    {/* Description avec effet flou en arrière-plan */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center text-center text-white text-sm md:text-base bg-gray-900 bg-opacity-90 p-6 rounded-xl opacity-0 transition-opacity duration-300 backdrop-blur-lg"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                    >
                        <p className="leading-snug">{tech.description}</p>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};

export default StackBox;
