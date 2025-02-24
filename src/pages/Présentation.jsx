import React from 'react';

function Presentation() {
  return (
    <section className="container mx-auto py-10">
      <article className="flex flex-col items-center">
        <img
          src="/src/assets/imgs/photo_portfolio.jpg"
          alt="Votre photo de profil"
          className="h-36 w-36 rounded-lg mb-4"
        />
        <h1 className="capitalize font-DancingScript text-3xl underline text-white text-center mb-4">
          Ma présentation
        </h1>
        <p className="font-InknutAntiqua text-white m-10 text-center">
          Je m'appelle Maxime, j'ai 24 ans. J'ai obtenu mon baccalauréat en
          2019, et juste après, j'ai fait une licence de psychologie.Juste après j'ai fais une formation concepteur développeur d'application.
          J'ai fini ma formation Concepteur Développeur d'Application en 2025. 
        </p>
      </article>
    </section>
  );
}

export default Presentation;