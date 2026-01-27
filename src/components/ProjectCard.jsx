import { motion } from "framer-motion";

export default function ProjectCard({ title, description, context, technologie }) {
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
            {/* Titre */}
            <h2 className="text-lg md:text-xl font-bold mb-3 text-emerald-700 font-InknutAntiqua">
                {title}
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base mb-4 text-gray-700 leading-relaxed">
                {description}
            </p>

            {/* Contexte et Technologies */}
            <div className="pt-3 border-t border-gray-100 space-y-3">
                {/* Contexte */}
                <div>
                    <p className="text-xs md:text-sm italic text-gray-500">
                        <span className="font-semibold not-italic">Contexte : </span>
                        {context}
                    </p>
                </div>

                {/* Technologies */}
                <div>
                    <p className="text-xs md:text-sm font-semibold text-gray-700 mb-2">
                        technologie utilisée
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {Array.isArray(technologie) ? (
                            technologie.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-emerald-100 text-black rounded-full text-xs font-medium hover:bg-emerald-200 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))
                        ) : (
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                                {technologie}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}