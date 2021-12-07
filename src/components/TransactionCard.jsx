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
        <div className={`${props.className || props.class} w-full mt-2 border stats border-base-300`}>
            <div class="stat grid grid-cols-3">
                <div className={`flex flex-col text-white ${accountColor(props.account)} m-auto p-1 text-center cols-span-1 border rounded-box`}>
                    <div>{dayArray[props.date.getDay()] || 'Day'}</div>
                    <div>{month[props.date.getMonth()] || 'Month'}, {props.date.getUTCDate()|| 'Date'}</div>
                </div>
                <div className='cols-span-1 my-auto'>{props.account || 'account'}</div>
                <div className={`cols-span-1 my-auto ${props.amount > 0? 'text-success':'text-red-500'}`}>${props.amount || 'amount'}</div>
            </div>
        </div>
    )
}
