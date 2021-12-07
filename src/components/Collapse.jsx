import React from 'react'

export default function Collapse(props) {
    return (
        <div class={`${props.className || props.class} collapse w-96 border rounded-box border-base-300 collapse-arrow`}>
            <input type="checkbox" />
            <div class="collapse-title text-xl font-medium">
                {props.heading}
            </div> 
            <div class="collapse-content">
                {props.children}
            </div>
        </div> 
    )
}
