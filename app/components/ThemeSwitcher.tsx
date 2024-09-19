"use client";

import { Switch } from "@nextui-org/react";
import { IconMoon, IconSun } from "@tabler/icons-react";
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
        <Switch
            color="default"
            startContent={<IconMoon />}
            endContent={<IconSun />}
            isSelected={theme === 'dark'}
            onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
    )
};