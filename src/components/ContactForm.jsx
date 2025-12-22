import React, { useRef } from "react";
import emailJS from "@emailjs/browser";

export default function ContactForm() {
    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!form.current) return;

        emailJS
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                alert("✅ Message envoyé avec succès !");
                form.current.reset();
            })
            .catch((error) => {
                console.error("Erreur détaillée :", error);
                alert(`❌ Erreur : ${error.text || "Vérifiez le déploiement sur Vercel"}`);
            });
    };

    return (
        <form
            ref={form}
            onSubmit={sendEmail}
            className="w-[95%] max-w-xl mx-auto p-5 md:p-8 bg-white shadow-xl rounded-2xl space-y-5"
        >
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 font-InknutAntiqua underline underline-offset-8">
                Contactez-moi
            </h2>

            <div className="space-y-4">
                <input
                    type="text"
                    name="name" // Correspond à {{name}} sur ta capture EmailJS
                    placeholder="Votre nom"
                    required
                    className="w-full border border-gray-300 p-4 rounded-xl font-InknutAntiqua text-base focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Votre adresse email"
                    required
                    className="w-full border border-gray-300 p-4 rounded-xl font-InknutAntiqua text-base focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />

                <textarea
                    name="message" // Correspond à {{message}} sur ta capture EmailJS
                    placeholder="Votre message"
                    rows="4"
                    required
                    className="w-full border border-gray-300 p-4 rounded-xl font-InknutAntiqua text-base focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-lg"
            >
                Envoyer le message
            </button>
        </form>
    );
}