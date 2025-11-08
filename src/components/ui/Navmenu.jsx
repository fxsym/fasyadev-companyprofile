"use client";
import { motion } from "framer-motion";

export default function Navmenu({ label, active }) {
    return (
        <motion.button
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative cursor-pointer px-2 py-1 w-full"
        >
            <motion.span
                variants={{
                    rest: { color: active ? "var(--text-secondary)" : "var(--text)" }, // ✅ warna teks aktif
                    hover: { color: "var(--text-secondary)" }
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="z-10 relative"
            >
                {label}
            </motion.span>

            {/* underline */}
            <motion.span
                variants={{
                    rest: { width: active ? "100%" : 0, left: active ? "0%" : "50%" }, // ✅ underline aktif
                    hover: { width: "100%", left: "0%" }
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute bottom-0 h-0.5 bg-primary"
            />
        </motion.button>
    );
}
