"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div>
            The current theme is: {theme}
            <br />
            <Switch isSelected={theme === 'dark'} onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
        </div>
    )
};