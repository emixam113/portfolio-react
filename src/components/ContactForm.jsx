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
                console.error("Erreur :", error);
                alert("❌ Une erreur est survenue lors de l’envoi du message.");
            });
    };

    return (
        <form
            ref={form}
            onSubmit={sendEmail}
            className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4"
        >
            <h2 className="text-2xl font-bold text-gray-800 mb-4 font-InknutAntiqua underline">Contactez-moi</h2>

            <input
                type="text"
                name="from_name"
                placeholder="Votre nom"
                required
                className="w-full border border-gray-300 p-3 rounded font-InknutAntiqua"
            />

            <input
                type="email"
                name="reply_to"
                placeholder="Votre adresse email"
                required
                className="w-full border border-gray-300 p-3 rounded font-InknutAntiqua"
            />

            <textarea
                name="message"
                placeholder="Votre message"
                rows="5"
                required
                className="w-full border border-gray-300 p-3 rounded font-InknutAntiqua"
            ></textarea>

            <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
                Envoyer
            </button>
        </form>
    );
}
