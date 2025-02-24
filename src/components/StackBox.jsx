import logoJavascript from "../assets/imgs/javaScript.png";
import logoDocker from "../assets/imgs/docker.png";
import logoMySLQ from "../assets/imgs/MySql.png"; 
import logoReact from "../assets/imgs/reactJS.png";
import logoNode from "../assets/imgs/nodeJS.png";
import logoNestJS from "../assets/imgs/Nestjs.png"; 
import logoTailwindcss from "../assets/imgs/tailwindcss.png"; 
import logoTypeScript from "../assets/imgs/TypeScript.png";
import logoExpressJS from "../assets/imgs/expressjs.png";

import {motion} from "framer-motion";


const technologies = [
    {
        id: 1, 
        name: "Docker",
        logo: logoDocker,
        description: "c'est une plateforme de conteneurisation, qui permet d'empaqueter ainsi que de déployer l'application avec leurs dépendances"
    }, 
    {
        id: 2, 
        name: "JavaScript", 
        logo: logoJavascript,
        description: "c'est un langage de programmation qui permet de rajouter de l'interactivité aux page web et de créer des applications frontend et backend"
    }, 
    {
        id: 3, 
        name: "React", 
        logo: logoReact,
        description: "c'est une bibliothèque JavaScript permettant de créer des interfaces utilisateurs réactive et modulaire"
    },
    {   
        id: 4, 
        name: "MySQL",
        logo: logoMySLQ,
        description: "C'est un système de gestion de bases de données relationnelle open-source, utilisé pour gérer des données efficacement"
    }, 
    {
        id: 5, 
        name: "NodeJS", 
        logo: logoNode,
        description: "c'est un environnement d'exécution JavaScript côté serveur, qui permet de construire des applications performantes et scalables"
    }, 
    {
        id: 6, 
        name: "NestJS", 
        logo: logoNestJS, 
        description: "c'est un framework NodeJS basé sur TypeScript, qui facilite le développement de l'API ainsi que le développement d'application backend robuste"
    },
    {
        id: 7, 
        name: "TailwindCSS", 
        logo: logoTailwindcss,
        description: "c'est un framework css utilitaire qui permet de créer des interfaces moderne et responsives rapidement"
    },
    {
        id: 8, 
        name: "typeScript",
        logo: logoTypeScript,
        description: "c'est une surcouche de JavaScript qui ajoute un typage statique pour améliorer la maintenabilité et la robustesse du code"
    }, 
    {
        id: 9,
        name: "expressJS",
        logo: logoExpressJS,
        description: "c'est un framework minimaliste de nodeJS permettant de créer rapidement des API Web ainsi que des applications backend"
    }
];

const StackBox = () => {
    return (
        <div className="flex flex-wrap justify-center gap-6 py-10 bg-gray-900">
        {technologies.map((tech) => (
            <motion.div
                key={tech.id}
                className="relative flex flex-col items-center p-4 w-40 h-40 bg-gray-800 rounded-xl shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.1 }}
            >
                <img src={tech.logo} alt={tech.name} className="w-16 h-16 mb-2" />
                <h3 className="text-white font-semibold">{tech.name}</h3>
                <motion.p
                    className="absolute inset-0 flex items-center justify-center text-center text-sm text-gray-300 bg-gray-900 bg-opacity-95 p-4 rounded-xl opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                >
                    {tech.description}
                </motion.p>
            </motion.div>
        ))}
    </div>
    );
};

export default StackBox