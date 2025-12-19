import ProjectCard from "../components/ProjectCard.jsx";
import {motion}  from 'framer-motion';

export default function Projets() {
    const projects = [
        {
            title: "Casse-Brique",
            description: "Projet d’initiation pour apprendre les bases de l’animation, des événements clavier et de la gestion des collisions.",
            context: "Projet réalisé dans le cadre de ma licence de psychologie (UE libre) avec la documentation MDN pour apprendre les base de la programmation."
        },
        {
            title: "Pac-Man",
            description: "Développement d’un mini-jeu pour le contrôle au clavier.",
            context: "Étape intermédiaire pour comprendre comment organiser son code, avant la réalisation de Space-Invader."
        },
        {
            title: "Space-Invader",
            description: "Jeu complet avec animations, contrôles clavier et détection de collisions, reprenant tous les concepts appris précédemment.",
            context: "Projet de consolidation pour finaliser mon apprentissage des bases du JS."
        },
        {
            title: "Color Pick-up",
            description: "Petite application web permettant d’extraire une couleur à partir d’un code hexadécimal ou RGB.",
            context: "Découverte des appels API côté frontend."
        },
        {
            title: "Projet pour ma grande sœur",
            description: "Création d’un site vitrine selon des consignes précises et une deadline stricte, pour simuler un vrai besoin client.",
            context: "Commande fictive de ma sœur, jouant le rôle de cliente."
        },
        {
            title: "Premier Portfolio",
            description: "Première version de mon portfolio personnel avec une attention portée sur le design et la mise en page.",
            context: "Projet personnel."
        },
        {
            title: "Deuxième Portfolio",
            description: "Refonte complète de mon portfolio pour améliorer la structuration, la clarté des sections et le responsive design.",
            context: "Projet personnel."
        },
        {
            title: "Site vitrine pour Human Booster",
            description: "Site développé à partir d’une maquette, en respectant des contraintes techniques et une livraison en 7 jours.",
            context: "Projet d’entrée en formation chez Human Booster."
        },
        {
            title: "Fight Game en 2D",
            description: "Jeu de combat avec gestion des collisions, animations de sprites, barres de vie et commandes clavier.",
            context: "Projet réalisé pendant la formation de Concepteur Développeur d’Applications."
        },
        {
            title: "Animation pour Brownie Clicker",
            description: "Animation graphique conçue pour enrichir un projet de type 'Clicker Game'.",
            context: "Projet complémentaire réalisé en formation."
        },
        {
            title: "Application de Gestion",
            description: "petite application pour faire une gestion de son budget, elle permet de géré ses abonnements et son budget en fonction de ses revenues",
            context: "Première petite application"
        },
        {
            title: "Application de gestion de dépense en version mobile",
            description: 'Même application que la version web mais en version mobile',
            context: "Première application Mobile",
        },
    ];

    return (
        <main className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold mb-10 text-center font-InknutAntiqua text-white underline">Mes projets</h1>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-InknutAntiqua">
                {projects.map((proj, index) => (
                    <motion.div
                        key={proj.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
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
    )
}