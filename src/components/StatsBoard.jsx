import React from 'react'

export default function StatsBoard(props) {
    return (
        <div className={`${props.className || props.class} grid grid-cols-12`}>
            <div class="col-span-12 grid grid-cols-12 grid-flow-row border stats border-base-300">
              <div class="stat border-b border-r w-100  p-2 md:p-4 col-span-6 lg:col-span-3">
                <div class="stat-title text-sm lg:text-md">Checkings Account</div> 
                <div class="stat-value text-2xl xl:text-3xl">$921.56</div>
                <div class="stat-value text-gray-400 text-sm lg:text-lg font-normal">Pending: $894.20</div>  
                <div class="stat-actions flex flex-row gap-1">
                  <button class="btn btn-sm text-xs xl:text-sm btn-success">Add</button>
                  <button class="btn btn-sm text-xs xl:text-sm btn-success">Manage</button>
                </div>
              </div> 
              <div class="stat border-b border-r w-100  p-2 md:p-4 col-span-6 lg:col-span-3">
                <div class="stat-title text-sm lg:text-md">Savings Account</div> 
                <div class="stat-value text-2xl xl:text-3xl">$89,400</div>
                <div class="stat-value text-gray-400 text-sm lg:text-lg font-normal">Pending: $89,400</div>  
                <div class="stat-actions flex flex-row gap-1">
                  <button class="btn btn-sm text-xs xl:text-sm btn-primary">Move</button> 
                  <button class="btn btn-sm text-xs xl:text-sm btn-primary">Manage</button>
                </div>
              </div>
              <div class="stat border-b border-r w-100  p-2 md:p-4 col-span-6 lg:col-span-3">
                <div class="stat-title text-sm lg:text-md">Credit Account</div> 
                <div class="stat-value text-2xl xl:text-3xl">$1,357.64</div>
                <div class="stat-value text-gray-400 text-sm lg:text-lg font-normal">Max: $2,000</div>  
                <div class="stat-actions flex flex-row gap-1">
                  <button class="btn btn-sm text-xs xl:text-sm btn-neutral">Pay</button> 
                  <button class="btn btn-sm text-xs xl:text-sm btn-neutral">Manage</button>
                </div>
              </div>
              <div class="stat border-b border-r w-100  p-2 md:p-4 col-span-6 lg:col-span-3">
              <div class="stat-title text-sm lg:text-md">Help Desk</div>
                <div class="stat-value text-2xl xl:text-3xl">Quick Help</div>
                <div class="stat-value text-gray-400 text-sm lg:text-lg font-normal whitespace-pre-wrap">Looking for assistance?</div>  
                <div class="stat-actions flex flex-row gap-1">
                  <button class="btn btn-sm text-xs xl:text-sm btn-error">HELP</button> 
                  <button class="btn btn-sm text-xs xl:text-sm bg-red-warn hover:bg-red-warn border-none">Lost Card</button>
                </div>
              </div>
            </div>
             

            <div class="col-span-12 w-full mt-2 border stats border-base-300">
              <div class="stat">
                <div class="stat-figure text-primary">
                  <button class="btn loading btn-circle btn-lg bg-base-200 btn-ghost"></button>
                </div> 
                <div class="stat-value">$4,900 / 7,500</div> 
                <div class="stat-title">Yearly Savings Goal</div> 
                <div class="stat-desc">
                  <progress value="60" max="100" class="progress progress-secondary"></progress>
                </div>
              </div>
            </div>
            
        </div>
    )
}
