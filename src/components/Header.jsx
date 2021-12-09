import React from 'react'
import UserBox from './UserBox'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity } from '@fortawesome/free-solid-svg-icons/index'

export default function Header() {
    return (
        <div className='grid grid-cols-12'>
            <h1 className='text-5xl font-serif p-5 col-span-8'>FatCat Banking <FontAwesomeIcon icon={faUniversity} /></h1>
            <UserBox className={'flex flex-row m-auto col-span-4 my-2 border-primary'}/>
            <div class="divider col-span-12"></div>
        </div>
    )
}
