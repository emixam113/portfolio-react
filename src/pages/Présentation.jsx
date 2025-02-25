function Presentation() {
  return (
    <section className="container mx-auto py-10 flex flex-col items-center text-center">
      {/* Titre */}
      <h1 className="capitalize font-DancingScript text-3xl underline text-white mb-6 shadow-md">
        Ma Présentation
      </h1>

      {/* Images en haut */}
      <div className="flex justify-center gap-10 mb-6 p-2">
        <img
          src="/photo_portfolio.jpg"
          alt="Photo de Maxime"
          className="h-36 w-36 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
        <img
          src="/logo.png"
          alt="Logo de Maxime"
          className="h-36 w-36 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
      </div>

      {/* Texte en dessous */}
      <div className="max-w-2xl text-white">
        <p className="font-InknutAntiqua text-center leading-relaxed">
          Je m'appelle <strong>Maxime Royan</strong>, j'ai 24 ans et je viens de Vichy.
          <br /><br />
          📚 <strong className="underline">Mon parcours :</strong>
          <ul className="list-disc list-inside">
            <li>2019 - 2023 : Licence de psychologie</li>
            <li>2024 - 2025 : Formation Concepteur Développeur d’Application</li>
          </ul>
          <br />
          💡 <strong className="underline m-2">Comment j’ai découvert le développement ?</strong>
          <br />
          Lors de ma licence, j'ai décidé de suivre une UE libre qui m'a fait découvrir le développement. Cette UE s'appelait <strong>JavaScript & Simulation</strong>.
          Pendant cette UE, je devais réaliser un projet :
          <ul className="list-disc list-inside">
            <li>Créer un site internet avec HTML, CSS et JavaScript</li>
            <li>Développer un mini-jeu vidéo</li>
          </ul>
          <br/>
          Ces deux projets m'ont plu, mais je n'avais pas d'idée de site à recréer ou à inventer. Je suis donc parti sur un jeu vidéo inspiré de <strong>Space Invaders</strong>.
          Développer un jeu sans aucune connaissance était un vrai défi, mais c'est ainsi que j'ai découvert ma passion pour le code !
        </p>
      </div>
    </section>
  );
}

export default Presentation;
