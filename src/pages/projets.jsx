import ProjectCard from "../components/ProjectCard.jsx";
import { motion } from 'framer-motion';

export default function Projets() {
    const projects = [
        {
            title: "Casse-Brique",
            description: "Projet d’initiation pour apprendre les bases de l’animation, des événements clavier et de la gestion des collisions.",
            context: "Projet réalisé dans le cadre de ma licence de psychologie (UE libre) avec la documentation MDN."
        },
        {
            title: "Pac-Man",
            description: "Développement d’un mini-jeu pour le contrôle au clavier.",
            context: "Étape intermédiaire pour comprendre comment organiser son code."
        },
        {
            title: "Space-Invader",
            description: "Jeu complet avec animations, contrôles clavier et détection de collisions.",
            context: "Projet de consolidation pour finaliser mon apprentissage des bases du JS."
        },
        {
            title: "Color Pick-up",
            description: "Petite application web permettant d’extraire une couleur à partir d’un code hexadécimal ou RGB.",
            context: "Découverte des appels API côté frontend."
        },
        {
            title: "Projet Client",
            description: "Création d’un site vitrine selon des consignes précises et une deadline stricte.",
            context: "Commande fictive pour simuler un vrai besoin client."
        },
        {
            title: "Premier Portfolio",
            description: "Première version de mon portfolio personnel avec une attention portée sur le design.",
            context: "Projet personnel (HTML/CSS)."
        },
        {
            title: "Deuxième Portfolio",
            description: "Refonte complète pour améliorer la structuration, la clarté et le responsive design.",
            context: "Projet personnel (React/Tailwind)."
        },
        {
            title: "Site Human Booster",
            description: "Site développé à partir d’une maquette, respectant des contraintes techniques en 7 jours.",
            context: "Projet d’entrée en formation chez Human Booster."
        },
        {
            title: "Fight Game 2D",
            description: "Jeu de combat avec gestion des collisions, animations de sprites et barres de vie.",
            context: "Projet réalisé pendant la formation CDA."
        },
        {
            title: "Brownie Clicker",
            description: "Animation graphique conçue pour enrichir un projet de type 'Clicker Game'.",
            context: "Projet complémentaire réalisé en formation."
        },
        {
            title: "Gestion de Budget",
            description: "Application pour gérer ses abonnements et son budget en fonction de ses revenus.",
            context: "Première application Fullstack."
        },
        {
            title: "Budget Mobile",
            description: "Adaptation de l'application de gestion de budget pour une expérience native mobile.",
            context: "Première application Mobile."
        },
    ];

    return (
        /* px-6 pour laisser de l'espace sur les bords du téléphone */
        <main className="max-w-6xl mx-auto px-6 py-10">
            {/* text-2xl sur mobile pour éviter que le titre prenne toute la place */}
            <h1 className="text-2xl md:text-4xl font-bold mb-12 text-center font-InknutAntiqua text-white underline underline-offset-8">
                Mes projets
            </h1>

            {/* Grille : 1 colonne (mobile), 2 (tablette), 3 (ordinateur) */}
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-InknutAntiqua">
                {projects.map((proj, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex justify-center" // Centre la carte si la grille est sur 1 colonne
                    >
                        <ProjectCard
                            title={proj.title}
                            description={proj.description}
                            context={proj.context}
                        />
                    </motion.div>
                ))}
            </div>
        </main>
    );
}