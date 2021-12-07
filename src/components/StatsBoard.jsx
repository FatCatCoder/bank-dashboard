import React from 'react'

export default function StatsBoard() {
    return (
        <div className='container m-auto'>
            <div class="border stats border-base-300">
              <div class="stat">
                <div class="stat-title">Checkings Account balance</div> 
                <div class="stat-value">$921.56</div>
                <div class="stat-value text-gray-400 text-lg font-normal">Pending: $894.20</div>  
                <div class="stat-actions">
                  <button class="btn btn-sm btn-success">Add</button>
                  <button class="btn btn-sm btn-success">Manage</button>
                </div>
              </div> 
              <div class="stat">
                <div class="stat-title">Savings Account balance</div> 
                <div class="stat-value">$89,400</div>
                <div class="stat-value text-gray-400 text-lg font-normal">Pending: $89,400</div>  
                <div class="stat-actions">
                  <button class="btn btn-sm btn-primary">Transfer</button> 
                  <button class="btn btn-sm btn-primary">Manage</button>
                </div>
              </div>
              <div class="stat">
                <div class="stat-title">Credit Account balance</div> 
                <div class="stat-value">$1,357.64</div>
                <div class="stat-value text-gray-400 text-lg font-normal">Max: $2,000</div>  
                <div class="stat-actions">
                  <button class="btn btn-sm btn-neutral">Pay</button> 
                  <button class="btn btn-sm btn-neutral">Manage</button>
                </div>
              </div>
            </div> 

            <div class="w-full mt-2 border stats border-base-300">
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
