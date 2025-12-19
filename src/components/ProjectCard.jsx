import { motion } from "framer-motion";

export default function ProjectCard({ title, description, context }) {
    return (
        <motion.div
            className="bg-white  rounded-xl shadow-md p-6 border cursor-pointer"
            role="dialog"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="mb-2">{description}</p>
            <p className="text-sm  italic">{context}</p>
        </motion.div>
    );
}