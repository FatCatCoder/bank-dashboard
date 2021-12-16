import React from 'react'

export default function Collapse(props) {
    return (
        <div class={`${props.className || props.class} collapse border rounded-box border-base-300 collapse-arrow`}>
            <input type="checkbox" />
            <div class="collapse-title text-lg lg:text-xl font-medium">
                {props.heading}
            </div> 
            <div class={`${props.contentClassName} collapse-content grid-cols-12 grid-rows-1 grid p-0`}>
                {props.children}
            </div>
        </div> 
    )
}
