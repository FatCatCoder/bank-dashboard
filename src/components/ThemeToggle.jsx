import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons/index'

export default function ThemeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    
    return (
        <>
        <FontAwesomeIcon icon={theme === 'light'? faSun: faMoon} style={{color: "orange"}}/>
        <input data-toggle-theme="dracula,light" data-act-class="checked" onClick={() => setTheme(localStorage.getItem('theme'))} type="checkbox" checked={theme === 'light'} class="toggle" />
        </>
    )
}
