import ProjectCard from "../components/ProjectCard.jsx";
import { motion } from 'framer-motion';

export default function Projets() {
    const projects = [
        {
            title: "Casse-Brique",
            description: "Projet d'initiation pour apprendre les bases de l'animation, des événements clavier et de la gestion des collisions.",
            context: "Projet réalisé dans le cadre de ma licence de psychologie (UE libre) avec la documentation MDN.",
            technologie: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Pac-Man",
            description: "Développement d'un mini-jeu pour le contrôle au clavier.",
            context: "Étape intermédiaire pour comprendre comment organiser son code.",
            technologie: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Space-Invader",
            description: "Jeu complet avec animations, contrôles clavier et détection de collisions.",
            context: "Projet de consolidation pour finaliser mon apprentissage des bases du JS.",
            technologie: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Color Pick-up",
            description: "Petite application web permettant d'extraire une couleur à partir d'un code hexadécimal ou RGB.",
            context: "Découverte des appels API côté frontend.",
            technologie: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Projet Client",
            description: "Création d'un site vitrine selon des consignes précises et une deadline stricte.",
            context: "Commande fictive pour simuler un vrai besoin client.",
            technologie: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Premier Portfolio",
            description: "Première version de mon portfolio personnel avec une attention portée sur le design.",
            context: "Projet personnel (HTML/CSS).",
            technologie: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Deuxième Portfolio",
            description: "Refonte complète pour améliorer la structuration, la clarté et le responsive design.",
            context: "Projet personnel (React/Tailwind).",
            technologie: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Site Human Booster",
            description: "Site développé à partir d'une maquette, respectant des contraintes techniques en 7 jours.",
            context: "Projet d'entrée en formation chez Human Booster.",
            technologie: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Fight Game 2D",
            description: "Jeu de combat avec gestion des collisions, animations de sprites et barres de vie.",
            context: "Projet réalisé pendant la formation CDA.",
            technologie: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Brownie Clicker",
            description: "Animation graphique conçue pour enrichir un projet de type 'Clicker Game'.",
            context: "Projet complémentaire réalisé en formation.",
            technologie: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Gestion de Budget",
            description: "Application pour gérer ses abonnements et son budget en fonction de ses revenus.",
            context: "Première application Fullstack.",
            technologie: ["React", "NestJS", "PostgreSQL"]
        },
        {
            title: "Budget Mobile",
            description: "Adaptation de l'application de gestion de budget pour une expérience native mobile.",
            context: "Première application Mobile.",
            technologie: ["React Native", "Expo", "NestJS"]
        },
        {
            title: "Alternative à google scholar pour les étudiants de psychologie",
            description: "Regroupe les meilleurs articles scientifiques pour faire un mémoire de psychologie",
            context: "Projet pour aider les étudiants de psychologie dans leurs recherches",
            technologie: ["Next.js", "Tailwind CSS", "TypeScript"]
        }
    ];

    return (
        <main className="max-w-6xl mx-auto px-6 py-10">
            <h1 className="text-2xl md:text-4xl font-bold mb-12 text-center font-InknutAntiqua text-white underline underline-offset-8">
                Mes projets
            </h1>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-InknutAntiqua">
                {projects.map((proj, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex justify-center"
                    >
                        <ProjectCard
                            title={proj.title}
                            description={proj.description}
                            context={proj.context}
                            technologie={proj.technologie}
                        />
                    </motion.div>
                ))}
            </div>
        </main>
    );
}