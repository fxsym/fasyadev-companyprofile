import { useState } from "react"

export default function ThemeButton () {
    const [theme, setTheme] = useState("light")

    return (
        <div className="w-30 h-10 rounded-full flex items-center justify-center" onClick={(e) => setTheme((prev) => (prev === "light" ? "dark" : "light"))}>
            {theme}
        </div>
    )
}