import { HistoryIcon, HomeIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"
type Themes = 'dark' | 'light'

export function Menu() {
    const [theme, setTheme] = useState<Themes>(() => {
        const storageTheme = localStorage.getItem('theme') as Themes || 'dark'
        return storageTheme
    })

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault()

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme
        })
    }
    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)

    }, [theme])
    return (
        <nav className={styles.menu}>
            <a href="" className={styles.menuLink} aria-label="Ir para a home" title="Ir para a home"><HomeIcon /></a>
            <a href="" className={styles.menuLink} aria-label="Mostrar o historico" title="Mostrar o historico"><HistoryIcon /></a>
            <a href="" className={styles.menuLink} aria-label="Configurações" title="Configurações"><SettingsIcon /></a>
            <a href="#" className={styles.menuLink} aria-label="Mudar o tema" title="Mudar o tema" onClick={handleThemeChange}>
                {nextThemeIcon[theme]}
            </a>
        </nav>
    )
}