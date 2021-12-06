import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'

/**
 * TODO:
 * add Fn to button help
 */

export default function SubHeader(props) {
    return (
        <h2 className={`${props.className || props.class} text-4xl p-2 rounded-box col-span-12 bg-base-200`}>
            {props.children}
            <button>
                <FontAwesomeIcon className='text-lg my-1 mx-2' icon={faQuestionCircle} />
            </button>
        </h2>
    )
}
