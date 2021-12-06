import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMoneyCheckAlt, faPiggyBank, faChartPie, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
    return (
    <div class="py-4 w-32 artboard artboard-demo bg-base-200">
        <ul class="menu w-24 py-3 mx-auto shadow-lg bg-base-100 rounded-box">
            <li>
                <a className='flex flex-col'>
                    <FontAwesomeIcon icon={faHome} className='inline-block w-6 h-6 stroke-current m-auto' />
                    <p className='text-purple-600'>Dashboard</p>
                </a>
            </li> 
            <li>
                <a className='flex flex-col'>
                    <FontAwesomeIcon icon={faMoneyCheckAlt} className='inline-block w-6 h-6 stroke-current m-auto' />
                    <p className='text-purple-600'>Checkings</p>
                </a>
            </li> 
            <li>
                <a className='flex flex-col'>
                    <FontAwesomeIcon icon={faPiggyBank} className='inline-block w-6 h-6 stroke-current m-auto' />
                    <p className='text-purple-600'>Savings</p>
                </a>
            </li>
            <li>
                <a className='flex flex-col'>
                    <FontAwesomeIcon icon={faChartPie} className='inline-block w-6 h-6 stroke-current m-auto' />
                    <p className='text-purple-600'>Analysis</p>
                </a>
            </li>
            <li>
                <a className='flex flex-col'>
                    <FontAwesomeIcon icon={faEllipsisH} className='inline-block w-6 h-6 stroke-current m-auto' />
                    <p className='text-purple-600'>Extras</p>
                </a>
            </li>
        </ul>
    </div>
    )
}
