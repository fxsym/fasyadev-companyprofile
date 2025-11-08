import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navmenu from "./Navmenu";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function NavmenuMobile({ open, setOpen, navItems, pathname }) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden min-h-screen flex flex-col items-center justify-center gap-2 bg-bg absolute left-0 right-0 top-full pt-10 pb-20"
                >
                    {navItems.map((item) => (
                        <li key={item.id} className="list-none text-text">
                            <Link href={`/${item.id}`}>
                                <Navmenu
                                    label={item.label}
                                    active={pathname === `/${item.id}`} // ✅ kirim status aktif
                                />
                            </Link>
                        </li>
                    ))}
                    <div className="flex gap-5 items-center mt-10">
                        <a
                            href="https://www.instagram.com/agus_phto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full hover:bg-pink-600 transition-colors duration-300"
                        >
                            <FaInstagram className="w-8 h-8 text-text"/>
                        </a>
                        <a
                            href="mailto:aguswidodo1197@gmail.com"
                            className="p-3 rounded-full hover:bg-red-600 transition-colors duration-300"
                        >
                            <FaTiktok className="w-8 h-8 text-text" />
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}