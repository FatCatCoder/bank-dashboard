import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons/index'

export default function InfoAlert(props) {
    return (
        <div className={`alert alert-info ${props.className || props.class}`}>
            <div className="flex-1">
                <div>
                    <h4>
                        <FontAwesomeIcon icon={faBell} />
                        {props.heading || 'Info'}
                    </h4>
                    <p className={`${props.textSize || 'text-sm'} text-base-content text-opacity-60`}>{props.text || 'Hey there!'}</p>
                </div>  
            </div>
        </div>
)
}
