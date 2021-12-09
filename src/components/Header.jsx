import React from 'react'
import UserBox from './UserBox'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity, faUser } from '@fortawesome/free-solid-svg-icons/index'

export default function Header(props) {
    return (
        // <div className={`${props.className || props.class} grid grid-cols-12`}>
        //     <h1 className='font-serif col-span-8 lg:text-5xl lg:p-5'>FatCat Banking <FontAwesomeIcon icon={faUniversity} /></h1>
        //     <UserBox className={'flex lg:flex-row m-auto col-span-4 my-2 border-primary'}/>
        //     <div class="divider w-screen col-span-12"></div>

        <div className={`${props.className || props.class} `}>

            <div class="navbar mb-2 rounded-box">
                <div class="flex-1 px-2 mx-2">
                    <span class="text-5xl font-bold">
                        <h1 className='font-serif col-span-8 lg:text-5xl lg:p-5'>FatCat Banking <FontAwesomeIcon icon={faUniversity} /></h1>
                    </span>
                </div>

                <div class="py-4 artboard artboard-demo w-auto p-2 bg-base-200">
                    <ul class="menu overflow-visible px-3 shadow-lg bg-base-100 rounded-box horizontal">
                        <li>
                            <div class="flex-none">
                                <div class="dropdown dropdown-end">
                                    <div tabindex="0" class="p-2 md:p-0 ">
                                            <FontAwesomeIcon icon={faUser} className='m-auto text-3xl'/>
                                    </div> 
                                    <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a>Item 1</a>
                                        </li> 
                                        <li>
                                            <a>Item 2</a>
                                        </li> 
                                        <li>
                                            <a>Item 3</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <div class="flex-none hidden px-2 mx-2 md:flex">
                        <div class="flex items-stretch">
                            <li className=''>
                                <a>
                                    Settings
                                </a>
                            </li> 
                            <li className=''>
                                <a>
                                    Logout
                                </a>
                            </li>
                            <li className=''>
                                <a>
                                    TOGGLE
                                </a>
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