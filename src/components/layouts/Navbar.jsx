"use client"
import Image from "next/image"
import Link from "next/link"
import Navmenu from "../ui/Navmenu"
import { usePathname } from "next/navigation";
import ThemeButton from "../ui/ThemeButton";
import ThemeSwitcher from "../ui/ThemeSwitcher";

export default function Navbar() {
    const pathname = usePathname(); // ✅

    const navItems = [
        { id: "", label: "Home" },
        { id: "about", label: "About Us" },
        { id: "services", label: "Our Service" },
    ]

    return (
        <nav className={`py-4 px-16 flex flex-col justify-between w-full shadow-xl items-center fixed z-50 bg-bg dark:bg-bg transition-transform duration-300`}>

            <div className="flex justify-between w-full items-center">
                <Link href="/" className="flex items-center gap-3 flex-1">
                    <Image src="/images/logo.jpg" alt="Logo" width={42} height={42} className="rounded-full" />
                    <span className="text-sm font-semibold text-text tracking-wide">
                        Fasya-Dev
                    </span>
                </Link>

                <div className="hidden md:flex md:items-center flex-2 justify-center">
                    <ul className="flex gap-10 font-semibold text-[16px] text-text">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link href={`/${item.id}`}>
                                    <Navmenu
                                        label={item.label}
                                        active={pathname === `/${item.id}`} // ✅ kirim status aktif
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden md:flex flex-1 justify-end">
                    <ThemeSwitcher />
                </div>
            </div>

        </nav>
    )
}