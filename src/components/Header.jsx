import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity, faUser } from '@fortawesome/free-solid-svg-icons/index'

// components
import UserBox from './UserBox'
import ThemeToggle from './ThemeToggle'


export default function Header(props) {
    return (
        <div className={`${props.className || props.class} `}>

            <div class="navbar rounded-box">
                <div class="flex-1 px-2 mx-2">
                    <span class="text-5xl font-bold">
                        <h1 className='font-serif col-span-8 lg:text-5xl lg:p-5'>FatCat Banking <FontAwesomeIcon icon={faUniversity} /></h1>
                    </span>
                </div>

                <div class="md:py-4 artboard artboard-demo w-auto p-2 bg-base-200 lg:mr-32">
                    <ul class="menu overflow-visible px-3 shadow-lg bg-base-100 rounded-box horizontal">
                        {/* Nav for mobile, Dropdown */}
                        <li>
                            <div class="flex-none">
                                <div class="dropdown dropdown-end">
                                    <div tabindex="0" class="p-2 md:p-0 m-auto">
                                        <FontAwesomeIcon icon={faUser} className='my-0 md:my-2 md:ml-2 text-3xl'/>
                                    </div> 
                                    <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-auto md:disabled md:hidden">
                                        <li>
                                            <a>Settings</a>
                                        </li> 
                                        <li>
                                            <a>Logout</a>
                                        </li> 
                                        <li>
                                            <a><ThemeToggle /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        {/* Nav for larger screens */}
                        <div class="flex-none hidden px-2 mx-2 md:flex">
                            <div class="flex items-stretch">
                                <li>
                                    <a>Settings</a>
                                </li> 
                                <li>
                                    <a>Logout</a>
                                </li>
                                <li>
                                    <a><ThemeToggle /></a>
                                </li>
                            </div>
                        </div>
                                
                    </ul>
                </div>

            </div>
            
            <div class="divider w-screen col-span-12"></div>

        </div>
    )
}


{/* <UserBox className={'flex lg:flex-row m-auto col-span-4 my-2 border-primary'}/> */}