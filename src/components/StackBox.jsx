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
    { id: 1, name: "Docker", logo: logoDocker, description: "C'est une plateforme de conteneurisation qui permet d'empaqueter et de déployer des applications avec leurs dépendances." },
    { id: 2, name: "JavaScript", logo: logoJavascript, description: "C'est un langage de programmation qui permet d'ajouter de l'interactivité aux pages web et de créer des applications frontend et backend." },
    { id: 3, name: "React", logo: logoReact, description: "C'est une bibliothèque JavaScript permettant de créer des interfaces utilisateurs réactives et modulaires." },
    { id: 4, name: "MySQL", logo: logoMySQL, description: "C'est un système de gestion de bases de données relationnelles open-source, utilisé pour gérer des données efficacement." },
    { id: 5, name: "NodeJS", logo: logoNode, description: "C'est un environnement d'exécution JavaScript côté serveur, qui permet de construire des applications performantes et scalables." },
    { id: 6, name: "NestJS", logo: logoNestJS, description: "C'est un framework NodeJS basé sur TypeScript, qui facilite le développement d'API et d'applications backend robustes." },
    { id: 7, name: "TailwindCSS", logo: logoTailwindcss, description: "C'est un framework CSS utilitaire qui permet de créer rapidement des interfaces modernes et responsives." },
    { id: 8, name: "TypeScript", logo: logoTypeScript, description: "C'est une surcouche de JavaScript qui ajoute un typage statique pour améliorer la maintenabilité et la robustesse du code." },
    { id: 9, name: "ExpressJS", logo: logoExpressJS, description: "C'est un framework minimaliste de NodeJS permettant de créer rapidement des API Web et des applications backend." },
    { id: 10, name: "postgresSQL", logo: logopostgresSQL, description: "C'est un système de base de données open source, très stable qui prend en charge différentes fonctions de SQL." },
];

export default function StackBox() {
    const [selectedTech, setSelectedTech] = useState(null);

    return (
        <>
            {/* - gap-4 sur mobile / gap-6 sur PC
                - px-2 pour éviter que les cartes touchent les bords de l'écran
            */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 py-6 md:py-10 px-2">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={tech.id}
                        /* w-36 h-36 sur mobile pour que ça tienne à deux sur une ligne, w-44 sur PC */
                        className="flex flex-col items-center justify-center p-3 md:p-4 w-36 h-36 md:w-44 md:h-44 bg-white text-gray-900 rounded-xl shadow-lg cursor-pointer"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedTech(tech)}
                    >
                        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gray-100 p-2 rounded-md shadow-md">
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="font-semibold mt-3 text-xs md:text-sm text-center font-InknutAntiqua uppercase tracking-tighter md:tracking-normal">
                            {tech.name}
                        </h3>
                    </motion.div>
                ))}
            </div>

            {/* Modale */}
            <AnimatePresence>
                {selectedTech && (
                    <>
                        {/* Fond flouté */}
                        <motion.div
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedTech(null)}
                        />

                        {/* Contenu de la modale */}
                        <motion.div
                            role="dialog"
                            /* w-[90%] est parfait pour le mobile */
                            className="fixed z-50 top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-emerald-700 text-white rounded-2xl p-6 md:p-8 shadow-2xl font-InknutAntiqua border border-white/20"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h2 className="text-xl md:text-2xl font-bold border-b-2 border-white/30 pb-1">
                                    {selectedTech.name}
                                </h2>
                                <button
                                    className="bg-white/10 hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition"
                                    onClick={() => setSelectedTech(null)}
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="flex flex-col items-center gap-6">
                                <div className="bg-white p-3 rounded-xl shadow-inner">
                                    <img
                                        src={selectedTech.logo}
                                        alt={selectedTech.name}
                                        className="w-16 h-16 md:w-20 md:h-20 object-contain"
                                    />
                                </div>
                                <p className="text-center text-sm md:text-base leading-relaxed italic">
                                    "{selectedTech.description}"
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}