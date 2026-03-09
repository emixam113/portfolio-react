export default function Presentation() {
  return (
      <section className="min-h-screen flex items-center justify-center py-20 px-6 font-['Inknut_Antiqua']" id="about">

          <div className="max-w-5xl w-full relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-14 shadow-2xl overflow-hidden">

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none" />

              {/* Watermark */}
              <span className="absolute -bottom-4 -right-2 text-[7rem] font-black italic text-white/[0.03] select-none pointer-events-none leading-none tracking-tighter">
                  Maxime
              </span>

              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">

                  {/* === PHOTO === */}
                  <div className="flex justify-center md:justify-start">
                      <div className="relative">
                          {/* Cadre décoratif vert */}
                          <div className="absolute -top-3 -left-3 right-3 bottom-3 border border-emerald-400/40 rounded-2xl pointer-events-none" />
                          {/* Cadre décoratif bleu */}
                          <div className="absolute top-3 left-3 -right-3 -bottom-3 border border-blue-400/25 rounded-2xl pointer-events-none" />

                          <img
                              src="/photo.JPG"
                              alt="Maxime Royan"
                              className="relative z-10 w-64 h-80 object-cover rounded-2xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
                          />

                          {/* Badge disponible */}
                          <div className="absolute -bottom-16 right-4 z-20 flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 rounded-full px-3 py-1.5 text-blue-100/75 text-xs tracking-wide">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981] animate-pulse" />
                              Disponible
                          </div>
                      </div>
                  </div>

                  {/* === TEXTE === */}
                  <div className="text-white">

                      {/* Ligne accent */}
                      <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full mb-6" />

                      {/* Titre */}
                      <h2 className="text-4xl font-bold leading-tight mb-6 tracking-tight">
                          À propos<br />
                          <span className="italic font-normal text-emerald-400">de moi</span>
                      </h2>

                      {/* Citation décorative */}
                      <span className="block text-7xl leading-none text-emerald-400/20 italic select-none -mb-4">"</span>

                      {/* Corps de texte */}
                      <div className="space-y-4 text-blue-100/80 text-sm leading-relaxed">
                          <p>
                              Jeune{" "}
                              <span className="text-emerald-400 font-semibold">
                                  concepteur développeur d'application
                              </span>{" "}
                              fraîchement diplômé, je cherche une équipe qui me donnera la chance de grandir et de contribuer concrètement.
                          </p>
                          <p>
                              Curieux, rigoureux et motivé, mon objectif est de mettre mes compétences en pratique dans un environnement stimulant — et d'en apprendre toujours davantage.
                          </p>
                      </div>

                      {/* Boutons */}
                      <div className="flex flex-wrap gap-3 mt-8">
                          <a
                              href="/Maxime_Royan_CDA.pdf"
                              target="_blank"
                              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-900 font-semibold text-sm px-6 py-3 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all active:scale-95"
                          >
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                              </svg>
                              Télécharger mon CV
                          </a>
                          <a
                              href="https://www.linkedin.com/in/maxime-royan-368963289"
                              target="_blank"
                              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 text-blue-100/85 text-sm px-6 py-3 rounded-xl hover:-translate-y-0.5 transition-all"
                          >
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                              </svg>
                              LinkedIn
                          </a>
                      </div>

                  </div>
              </div>
          </div>
      </section>
  );
}