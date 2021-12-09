import React, { useState } from 'react'

export default function ThemeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    
    return (
        <input data-toggle-theme="dracula,light" data-act-class="checked" onClick={() => setTheme(localStorage.getItem('theme'))} type="checkbox" checked={theme === 'light'} class="toggle" />
    )
}
