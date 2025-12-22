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
    { id: 2, name: "JavaScript", logo: logoJavascript, description: "C'est un langage de programmation qui permet d'ajouter de l'interactivité aux pages web." },
    { id: 3, name: "React", logo: logoReact, description: "C'est une bibliothèque JavaScript permettant de créer des interfaces utilisateurs réactives." },
    { id: 4, name: "MySQL", logo: logoMySQL, description: "Système de gestion de bases de données relationnelles open-source." },
    { id: 5, name: "NodeJS", logo: logoNode, description: "Environnement d'exécution JavaScript côté serveur." },
    { id: 6, name: "NestJS", logo: logoNestJS, description: "Framework NodeJS basé sur TypeScript." },
    { id: 7, name: "TailwindCSS", logo: logoTailwindcss, description: "Framework CSS utilitaire pour des interfaces modernes." },
    { id: 8, name: "TypeScript", logo: logoTypeScript, description: "Surcouche de JavaScript qui ajoute un typage statique." },
    { id: 9, name: "ExpressJS", logo: logoExpressJS, description: "Framework minimaliste de NodeJS pour créer des API." },
    { id: 10, name: "postgresSQL", logo: logopostgresSQL, description: "Système de base de données open source stable prenant en charge les fonctions SQL avancées." },
];

export default function StackBox() {
    const [selectedTech, setSelectedTech] = useState(null);

    return (
        <>
            {/* Grille des icônes de technologies */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 py-10 px-4">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={tech.id}
                        className="flex flex-col items-center justify-center p-3 md:p-4 w-36 h-36 md:w-44 md:h-44 bg-white text-gray-900 rounded-xl shadow-lg cursor-pointer"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedTech(tech)}
                    >
                        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gray-100 p-2 rounded-md shadow-md">
                            <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
                        </div>
                        <h3 className="font-semibold mt-3 text-center text-xs md:text-sm font-InknutAntiqua uppercase">
                            {tech.name}
                        </h3>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedTech && (
                    <>
                        {/* Overlay sombre */}
                        <motion.div
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedTech(null)}
                        />

                        {/* Modale corrigée : Centrage forcé avec w-[90%] et transform-none */}
                        <motion.div
                            role="dialog"
                            className="fixed z-50 top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white rounded-2xl p-6 shadow-2xl font-InknutAntiqua border border-white/20 flex flex-col items-center"
                            initial={{ scale: 0.8, opacity: 0, x: "-50%", y: "-50%" }}
                            animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
                            exit={{ scale: 0.8, opacity: 0, x: "-50%", y: "-50%" }}
                        >
                            <div className="flex justify-between items-center mb-6 w-full">
                                <h2 className="text-xl md:text-2xl font-bold">{selectedTech.name}</h2>
                                <button
                                    className="text-white text-2xl hover:text-gray-300 transition-colors"
                                    onClick={() => setSelectedTech(null)}
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="flex flex-col items-center gap-4 w-full">
                                <div className="bg-white p-3 rounded-xl shadow-inner flex items-center justify-center">
                                    <img
                                        src={selectedTech.logo}
                                        alt={selectedTech.name}
                                        className="w-16 h-16 object-contain"
                                    />
                                </div>

                                {/* Centrage horizontal du texte avec text-center et w-full */}
                                <p className="text-center text-sm md:text-base italic leading-relaxed w-full px-2">
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