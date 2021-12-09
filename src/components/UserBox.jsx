import React, { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons/index'

export default function UserBox({className}) {
    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    useEffect(() => {
        themeChange(false)
    }, [])
    
    return (
        <div className={`${className}`}>
            <div class="py-4 artboard artboard-demo bg-base-200">
                <ul class="menu px-3 shadow-lg bg-base-100 rounded-box horizontal">
                    <li>
                        <a>
                            <FontAwesomeIcon icon={faUser} className='m-auto text-3xl'/>
                        </a>
                    </li> 
                    <li>
                        <a>
                            Settings
                        </a>
                    </li> 
                    <li>
                        <a>
                            Logout
                        </a>
                    </li>
                    <li>
                        <a>
                            <input data-toggle-theme="dracula,light" data-act-class="checked" onClick={() => setTheme(localStorage.getItem('theme'))} type="checkbox" checked={theme === 'light'} class="toggle" />
                            {/* <label class="switch">
                                <input data-toggle-theme="dracula,light" data-act-class="ACTIVECLASS" type="checkbox" />
                                <span class="slider round"></span>
                            </label> */}
                        </a>
                    </li>
                </ul>
            </div>
        </div>   
    )
}
