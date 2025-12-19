import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoJavascript from "../assets/imgs/javaScript.png";
import logoDocker from "../assets/imgs/docker.png";
import logoMySQL from "../assets/imgs/MySql.png";
import logoReact from "../assets/imgs/reactJS.png";
import logoNode from "../assets/imgs/nodeJS.png";
import logoNestJS from "../assets/imgs/Nestjs.png";
import logoTailwindcss from "../assets/imgs/tailwindcss.png";
import logoTypeScript from "../assets/imgs/TypeScript.png";
import logoExpressJS from "../assets/imgs/expressjs.png";
import logopostgresSQL from "../assets/imgs/postgresSQL.png";

const technologies = [
    {
        id: 1,
        name: "Docker",
        logo: logoDocker,
        description:
            "C'est une plateforme de conteneurisation qui permet d'empaqueter et de déployer des applications avec leurs dépendances.",
    },
    {
        id: 2,
        name: "JavaScript",
        logo: logoJavascript,
        description:
            "C'est un langage de programmation qui permet d'ajouter de l'interactivité aux pages web et de créer des applications frontend et backend.",
    },
    {
        id: 3,
        name: "React",
        logo: logoReact,
        description:
            "C'est une bibliothèque JavaScript permettant de créer des interfaces utilisateurs réactives et modulaires.",
    },
    {
        id: 4,
        name: "MySQL",
        logo: logoMySQL,
        description:
            "C'est un système de gestion de bases de données relationnelles open-source, utilisé pour gérer des données efficacement.",
    },
    {
        id: 5,
        name: "NodeJS",
        logo: logoNode,
        description:
            "C'est un environnement d'exécution JavaScript côté serveur, qui permet de construire des applications performantes et scalables.",
    },
    {
        id: 6,
        name: "NestJS",
        logo: logoNestJS,
        description:
            "C'est un framework NodeJS basé sur TypeScript, qui facilite le développement d'API et d'applications backend robustes.",
    },
    {
        id: 7,
        name: "TailwindCSS",
        logo: logoTailwindcss,
        description:
            "C'est un framework CSS utilitaire qui permet de créer rapidement des interfaces modernes et responsives.",
    },
    {
        id: 8,
        name: "TypeScript",
        logo: logoTypeScript,
        description:
            "C'est une surcouche de JavaScript qui ajoute un typage statique pour améliorer la maintenabilité et la robustesse du code.",
    },
    {
        id: 9,
        name: "ExpressJS",
        logo: logoExpressJS,
        description:
            "C'est un framework minimaliste de NodeJS permettant de créer rapidement des API Web et des applications backend.",
    },
    {
        id: 10,
        name: "postgresSQL",
        logo: logopostgresSQL,
        description: "C'est un système de base de données open source, très stable qui prends en charge différentes fonctions de SQL comme les clés étrangères, les sous-requêtes, ainsi que les différentes fonctions définit par l'utilisateur."
    },

];

export default function StackBox () {
    const [selectedTech, setSelectedTech] = useState(null);

    return (
        <>
            <div className="flex flex-wrap justify-center gap-6 py-10 ">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={tech.id}
                        className="flex flex-col items-center p-4 w-44 h-44 bg-white text-gray-900 rounded-xl shadow-lg cursor-pointer"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedTech(tech)}
                    >
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 p-2 rounded-md shadow-md">
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className="w-12 h-12 object-contain"
                            />
                        </div>
                        <h3 className="font-semibold mt-2 text-center font-InknutAntiqua">{tech.name}</h3>
                    </motion.div>
                ))}
            </div>

            {/* Modale */}
            <AnimatePresence>
                {selectedTech && (
                    <>
                        {/* Fond flouté */}
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedTech(null)}
                        />

                        {/* Contenu de la modale */}
                        <motion.div
                            role="dialog"
                            className="fixed z-50 top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white rounded-xl p-6 shadow-2xl font-InknutAntiqua"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold">{selectedTech.name}</h2>
                                <button
                                    className="text-white text-xl font-bold hover:text-red-400 transition"
                                    onClick={() => setSelectedTech(null)}
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <img
                                    src={selectedTech.logo}
                                    alt={selectedTech.name}
                                    className="w-16 h-16 object-contain bg-white p-2 rounded-md shadow-md"
                                />
                                <p className="text-center text-sm leading-relaxed">
                                    {selectedTech.description}
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};


