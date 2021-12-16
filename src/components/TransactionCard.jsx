import React from 'react'

export default function TransactionCard(props) {
    const dayArray = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    function accountColor(account){
        if(account.toUpperCase() === 'CHECKINGS') return 'bg-success';
        if(account.toUpperCase() === 'SAVINGS') return 'bg-primary';
        if(account.toUpperCase() === 'CREDIT') return 'bg-neutral';
    }

    return (
        <div className={`${props.className || props.class} col-span-full md:col-span-10 lg:col-span-full  mt-2 border stats border-base-300`}>
            <div class="stat grid grid-cols-3 md:grid-cols-none md:flex md:flex-col xl:flex-none xl:grid xl:grid-cols-3">
                <div className={`${accountColor(props.account)} grid grid-rows-2 w-100 bg-gray-100 m-auto p-1 text-center cols-span-1 border-4 rounded-box text-white`}>
                    <div className='text-xs md:text-sm'>{dayArray[props.date.getDay()] || 'Day'}</div>
                    <div className='text-xs md:text-sm'>{month[props.date.getMonth()] || 'Month'}, {props.date.getUTCDate()|| 'Date'}</div>
                </div>
                <div className='cols-span-1 mx-auto my-auto text-sm md:text-md'>{props.account || 'account'}</div>
                <div className={`cols-span-1 mx-auto my-auto text-sm md:text-md ${props.amount > 0? 'text-success':'text-red-500'}`}>${props.amount || 'amount'}</div>
            </div>
        </div>
    )
}
