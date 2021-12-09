import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMoneyCheckAlt, faPiggyBank, faChartPie, faEllipsisH } from '@fortawesome/free-solid-svg-icons/index'

export default function Sidebar() {
    return (
    <div class="py-1 md:py-4 fixed bottom-0 md:relative md:bottom-auto m-auto w-screen md:w-32 artboard artboard-demo bg-base-200">
        <ul class="menu flex-row md:flex-col w-screen md:w-24 md:py-3 mx-auto shadow-lg bg-base-100 rounded-box">
            <li className='w-1/5 md:w-auto'>
                <a className='flex flex-col rounded-box'>
                    <FontAwesomeIcon icon={faHome} className='inline-block w-6 h-6 text-md stroke-current m-auto' />
                    <p className='text-purple-600'>Dashboard</p>
                </a>
            </li> 
            <li className='w-1/5 md:w-auto'>
                <a className='flex flex-col rounded-box'>
                    <FontAwesomeIcon icon={faMoneyCheckAlt} className='inline-block w-6 h-6 text-md stroke-current m-auto' />
                    <p className='text-purple-600'>Checkings</p>
                </a>
            </li> 
            <li className='w-1/5 md:w-auto'>
                <a className='flex flex-col rounded-box'>
                    <FontAwesomeIcon icon={faPiggyBank} className='inline-block w-6 h-6 text-md stroke-current m-auto' />
                    <p className='text-purple-600'>Savings</p>
                </a>
            </li>
            <li className='w-1/5 md:w-auto'>
                <a className='flex flex-col rounded-box'>
                    <FontAwesomeIcon icon={faChartPie} className='inline-block w-6 h-6 text-md stroke-current m-auto' />
                    <p className='text-purple-600'>Analysis</p>
                </a>
            </li>
            <li className='w-1/5 md:w-auto'>
                <a className='flex flex-col rounded-box'>
                    <FontAwesomeIcon icon={faEllipsisH} className='inline-block w-6 h-6 text-md stroke-current m-auto' />
                    <p className='text-purple-600'>Extras</p>
                </a>
            </li>
        </ul>
    </div>
    )
}
