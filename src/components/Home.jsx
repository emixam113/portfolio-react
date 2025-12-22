import React from "react";
import StackBox from "../components/StackBox";

function Home() {
    return (
        /* - px-5 : évite que le contenu touche les bords du téléphone
          - md:px-10 : plus d'espace sur les grands écrans
        */
        <div className="container mx-auto px-5 py-10 md:p-10 flex flex-col items-center text-center">
            {/* - text-xl : taille adaptée au mobile
              - md:text-2xl : taille plus imposante sur PC
              - underline-offset-8 : rend le soulignement plus élégant
            */}
            <h1 className="font-InknutAntiqua text-white text-xl md:text-2xl py-8 md:p-10 underline decoration-1 underline-offset-8">
                Ma stack technique
            </h1>

            {/* Conteneur pour s'assurer que StackBox utilise toute la largeur disponible */}
            <div className="w-full max-w-4xl">
                <StackBox />
            </div>
        </div>
    );
}

export default Home;