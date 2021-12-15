import React from 'react'

export default function Collapse(props) {
    return (
        <div class={`${props.className || props.class} collapse border rounded-box border-base-300 collapse-arrow`}>
            <input type="checkbox" />
            <div class="collapse-title text-lg lg:text-xl font-medium">
                {props.heading}
            </div> 
            <div class={`${props.innerClassName} collapse-content p-2 flex flex-col`}>
                {props.children}
            </div>
        </div> 
    )
}
