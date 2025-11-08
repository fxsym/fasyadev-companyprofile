"use client"
import Image from "next/image"
import Link from "next/link"
import Navmenu from "../ui/Navmenu"
import { usePathname } from "next/navigation";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import { useEffect, useState } from "react";
import NavigationHamburger from "../ui/NavigationHamburger";
import NavmenuMobile from "../ui/NavmenuMobile";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false)
    const [hidden, setHidden] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    const navItems = [
        { id: "", label: "Beranda" },
        { id: "portfolio", label: "Portfolio" },
        { id: "contact", label: "Hubungi Kami" },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            // Jika scroll lebih dari 0 → tampilkan shadow
            // Jika di atas (0) → hilangkan shadow
            setHidden(currentScroll > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <nav
            className={`py-4 px-4 md:px-16 lg:px-20 fixed left-1/2 -translate-x-1/2 z-50
              flex flex-col justify-between items-center
              bg-bg transition-all duration-500 ease-in-out 
              ${hidden ? "shadow-xl my-6 border-2 w-[90%] border-primary rounded-4xl"
                    : "shadow-none w-full my-0 border-none"}`}
        >


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

                <div className="flex flex-1 justify-end items-center gap-4 ">
                    <button
                        onClick={() => setOpen(!open)}
                        className="gap-1.5 flex flex-col cursor-pointer group md:hidden">
                        <NavigationHamburger open={open} />
                    </button>
                    <ThemeSwitcher />
                </div>
            </div>

            <NavmenuMobile open={open} setOpen={setOpen} navItems={navItems} pathname={pathname} />

        </nav>
    )
}