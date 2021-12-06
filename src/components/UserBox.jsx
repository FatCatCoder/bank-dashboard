import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function UserBox({className}) {
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
                </ul>
            </div>
        </div>   
    )
}
