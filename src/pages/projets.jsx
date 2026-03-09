import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        id: 1,
        title: "Casse-Brique",
        description: "Projet d'initiation pour apprendre les bases de l'animation, des événements clavier et de la gestion des collisions.",
        context: "Réalisé dans le cadre de ma licence de psychologie (UE libre) avec la documentation MDN.",
        technologie: ["HTML", "CSS", "JavaScript"],
        type: "Scolaire",
    },
    {
        id: 2,
        title: "Pac-Man",
        description: "Développement d'un mini-jeu pour le contrôle au clavier.",
        context: "Étape intermédiaire pour comprendre comment organiser son code.",
        technologie: ["HTML", "CSS", "JavaScript"],
        type: "Personnel",
    },
    {
        id: 3,
        title: "Space-Invader",
        description: "Jeu complet avec animations, contrôles clavier et détection de collisions.",
        context: "Projet de consolidation pour finaliser mon apprentissage des bases du JS.",
        technologie: ["HTML", "CSS", "JavaScript"],
        type: "Personnel",
    },
    {
        id: 4,
        title: "Color Pick-up",
        description: "Petite application web permettant d'extraire une couleur à partir d'un code hexadécimal ou RGB.",
        context: "Découverte des appels API côté frontend.",
        technologie: ["HTML", "CSS", "JavaScript"],
        type: "Personnel",
    },
    {
        id: 5,
        title: "Projet Client",
        description: "Création d'un site vitrine selon des consignes précises et une deadline stricte.",
        context: "Commande fictive pour simuler un vrai besoin client.",
        technologie: ["HTML", "CSS", "JavaScript"],
        type: "Scolaire",
    },
    {
        id: 6,
        title: "Premier Portfolio",
        description: "Première version de mon portfolio personnel avec une attention portée sur le design.",
        context: "Projet personnel HTML/CSS.",
        technologie: ["HTML", "CSS", "JavaScript"],
        type: "Personnel",
    },
    {
        id: 7,
        title: "Deuxième Portfolio",
        description: "Refonte complète pour améliorer la structuration, la clarté et le responsive design.",
        context: "Projet personnel React/Tailwind.",
        technologie: ["React", "Tailwind CSS", "JavaScript"],
        type: "Personnel",
    },
    {
        id: 8,
        title: "Site Human Booster",
        description: "Site développé à partir d'une maquette, respectant des contraintes techniques en 7 jours.",
        context: "Projet d'entrée en formation chez Human Booster.",
        technologie: ["HTML", "CSS", "JavaScript"],
        type: "Formation",
    },
    {
        id: 9,
        title: "Fight Game 2D",
        description: "Jeu de combat avec gestion des collisions, animations de sprites et barres de vie.",
        context: "Projet réalisé pendant la formation CDA.",
        technologie: ["HTML", "CSS", "JavaScript"],
        type: "Formation",
    },
    {
        id: 10,
        title: "Brownie Clicker",
        description: "Animation graphique conçue pour enrichir un projet de type Clicker Game.",
        context: "Projet complémentaire réalisé en formation.",
        technologie: ["HTML", "CSS", "JavaScript"],
        type: "Formation",
    },
    {
        id: 11,
        title: "Gestion de Budget",
        description: "Application pour gérer ses abonnements et son budget en fonction de ses revenus.",
        context: "Première application Fullstack.",
        technologie: ["React", "NestJS", "PostgreSQL"],
        type: "Formation",
    },
    {
        id: 12,
        title: "Budget Mobile",
        description: "Adaptation de l'application de gestion de budget pour une expérience native mobile.",
        context: "Première application Mobile.",
        technologie: ["React Native", "Expo", "NestJS"],
        type: "Formation",
    },
    {
        id: 13,
        title: "Alternative Google Scholar",
        description: "Regroupe les meilleurs articles scientifiques pour faire un mémoire de psychologie.",
        context: "Projet pour aider les étudiants de psychologie dans leurs recherches.",
        technologie: ["Next.js", "Tailwind CSS", "TypeScript"],
        type: "Personnel",
    },
];

const ALL_TECHS = [...new Set(projects.flatMap((p) => p.technologie))].sort();

export default function Projects() {
    const [order, setOrder] = useState("asc");
    const [selectedTech, setSelectedTech] = useState(null);

    const filtered = projects
        .filter((p) => !selectedTech || p.technologie.includes(selectedTech))
        .sort((a, b) => order === "asc" ? a.id - b.id : b.id - a.id);

    return (
        <section className="min-h-screen py-20 px-6 font-['Inknut_Antiqua']" id="projects">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="mb-12">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full mb-6" />
                    <h2 className="text-4xl font-bold text-white tracking-tight leading-tight">
                        Mes projets<br />
                        <span className="italic font-normal text-emerald-400">& réalisations</span>
                    </h2>
                    <p className="text-slate-400 text-sm mt-4">
                        {filtered.length} projet{filtered.length > 1 ? "s" : ""} — du plus {order === "asc" ? "ancien au plus récent" : "récent au plus ancien"}
                    </p>
                </div>

                {/* Filtres */}
                <div className="flex flex-wrap gap-3 mb-10">

                    {/* Tri ancienneté */}
                    <button
                        onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs px-4 py-2 rounded-full transition-all"
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8l4-4 4 4" /><path d="M7 4v16" /><path d="M21 16l-4 4-4-4" /><path d="M17 20V4" />
                        </svg>
                        {order === "asc" ? "Plus ancien → récent" : "Plus récent → ancien"}
                    </button>

                    {/* Filtre toutes */}
                    <button
                        onClick={() => setSelectedTech(null)}
                        className={`text-xs px-4 py-2 rounded-full border transition-all ${!selectedTech
                                ? "bg-emerald-500 text-white border-emerald-500"
                                : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                            }`}
                    >
                        Toutes
                    </button>

                    {/* Filtre par tech */}
                    {ALL_TECHS.map((tech) => (
                        <button
                            key={tech}
                            onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                            className={`text-xs px-4 py-2 rounded-full border transition-all ${selectedTech === tech
                                    ? "bg-emerald-500 text-white border-emerald-500"
                                    : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                                }`}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Ligne verticale */}
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/60 via-blue-400/30 to-transparent" />

                    <div className="space-y-6 pl-12">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.25, delay: index * 0.04 }}
                                    className="relative"
                                >
                                    {/* Point sur la timeline */}
                                    <div className="absolute -left-[2.05rem] top-5 w-3 h-3 rounded-full border-2 border-emerald-400 bg-white z-10" />

                                    {/* Numéro discret */}
                                    <span className="absolute -left-[3.8rem] top-4 text-xs text-slate-500">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    {/* Badge type au-dessus de la carte */}
                                    <div className="mb-1.5">
                                        <span className={`text-xs px-2.5 py-0.5 rounded-full border ${project.type === "Formation" ? "bg-purple-50 text-purple-600 border-purple-200" :
                                                project.type === "Scolaire" ? "bg-blue-50 text-blue-600 border-blue-200" :
                                                    "bg-emerald-50 text-emerald-600 border-emerald-200"
                                            }`}>
                                            {project.type}
                                        </span>
                                    </div>

                                    {/* ProjectCard existant */}
                                    <ProjectCard
                                        title={project.title}
                                        description={project.description}
                                        context={project.context}
                                        technologie={project.technologie}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Résultat vide */}
                {filtered.length === 0 && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-slate-400 text-sm py-16"
                    >
                        Aucun projet avec cette technologie.
                    </motion.p>
                )}

            </div>
        </section>
    );
}