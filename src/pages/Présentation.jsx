export default function Presentation() {
    return (
        <section className="min-h-screen flex items-center justify-center py-16 px-6" id="about">

            {/* Carte "Glass" pour la lisibilité */}
            <div className="max-w-5xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl grid md:grid-cols-2 gap-10 items-center">

                {/* Partie image avec un cadre blanc pur pour la faire ressortir */}
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl blur opacity-30"></div>
                        <img
                            src="/IMG_0292.JPG"
                            alt="Maxime Royan"
                            className="relative rounded-2xl shadow-lg w-64 h-80 object-cover border-2 border-white/50"
                        />
                    </div>
                </div>

                {/* Partie texte : Passage en blanc pour le contraste */}
                <div className="text-white">
                    <h2 className="text-4xl font-bold mb-4 font-InknutAntiqua text-emerald-400">
                        À propos de moi
                    </h2>

                    <div className="space-y-4 text-blue-50/90 text-lg leading-relaxed font-InknutAntiqua">
                        <p>
                            Jeune <span className="text-emerald-400 font-bold">diplômé</span> d'un titre de concepteur développeur d'application, je suis à la recherche d'une entreprise qui serait prête à m'accueillir afin de m'aider à progresser.
                        </p>
                        <p>
                            Mon objectif est de rejoindre une équipe dynamique afin de mettre mes compétences en pratique et continuer à progresser.
                        </p>
                    </div>

                    {/* Boutons réajustés */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a
                            href="/concepteur%20développeur%20full-Stack.pdf"
                            target="_blank"
                            className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
                        >
                            Télécharger mon CV
                        </a>
                        <a
                            href="https://www.linkedin.com/in/maxime-royan-368963289"
                            target="_blank"
                            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-xl transition-all"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}