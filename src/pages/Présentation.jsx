import React from "react";

function Presentation() {
  return (
    <section className="container mx-auto py-10 flex flex-col items-center text-center">
      <h1 className="capitalize font-DancingScript text-3xl underline text-white mb-10">
        Ma Présentation
      </h1>
      <div className="flex items-center justify-center gap-10">
        {/* Image de gauche */}
        <img
          src="/photo_portfolio.jpg"
          alt="Photo de Maxime"
          className="h-36 w-36 rounded-lg shadow-lg"
        />
        
       {/* Texte au centre */}
<p className="font-InknutAntiqua text-white max-w-lg text-center">
  Je m'appelle <strong>Maxime Royan</strong>, j'ai 24 ans et je viens de Vichy.  
  <br />
  <br />
  📚 <strong className="underline">Mon parcours :</strong>
  <ul className="list-disc list-inside">
    <li>2019 - 2023 : Licence de psychologie</li>
    <li>2024 - 2025 : Formation Concepteur Développeur d’Application</li>
  </ul>
  <br />
  💡 <strong className="underline m-2">Comment j’ai découvert le développement ?</strong>  
  <br />
  Lors de ma licence j'ai décider de faire une UE.libre qui m'a fais découvrir le développement. L'UE s'appelait javaScript & Simulation.
  pendant cette Ue libre je devais rendre un projet : 
  <ul className="list-disc list-inside">
    <li>Créer un site internet avec HTML, CSS et JavaScript</li>
    <li>Créer un mini-jeu vidéos</li>
  </ul>
  <br/>
  Deux projets qui m'ont plus dans l'ensemble mais je n'avais pas d'idée de site sympa à refaire ou a créer. Alors je suis partie pour créer un jeux vidéo comme space-invader. alors oui faire space invader alors que je n'avais pas de connaissance c'était compliquer.

</p>
        {/* Image de droite */}
        <img
          src="/logo.png" // Remplace par le bon chemin d'image
          alt="Logo de Maxime"
          className="h-36 w-36 rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

export default Presentation;
