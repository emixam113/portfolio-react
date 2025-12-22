import { motion } from "framer-motion";

export default function ProjectCard({ title, description, context }) {
    return (
        <motion.div
            className="bg-white rounded-xl shadow-md p-5 md:p-6 border border-gray-100 cursor-pointer w-full max-w-sm md:max-w-md mx-auto"
            role="article"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Titre : text-lg sur mobile, text-xl sur desktop */}
            <h2 className="text-lg md:text-xl font-bold mb-3 text-emerald-700 font-InknutAntiqua">
                {title}
            </h2>

            {/* Description : text-sm pour éviter les blocs de texte trop longs sur petit écran */}
            <p className="text-sm md:text-base mb-4 text-gray-700 leading-relaxed">
                {description}
            </p>

            {/* Contexte : souligné par une petite bordure pour la structure */}
            <div className="pt-3 border-t border-gray-100">
                <p className="text-xs md:text-sm italic text-gray-500">
                    <span className="font-semibold not-italic">Contexte :</span> {context}
                </p>
            </div>
        </motion.div>
    );
}