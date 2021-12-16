import React from 'react'

// components
import SubHeader from '../components/SubHeader'
import InfoAlert from '../components/InfoAlert'
import StatsBoard from '../components/StatsBoard'
import Collapse from '../components/Collapse'
import TransactionCard from '../components/TransactionCard'


export default function Dashboard() {
    return (
        <div className='h-auto grid grid-cols-12'>
            <SubHeader className={'col-span-12 hidden md:block'}>Dashboard</SubHeader>
                <div class="divider col-span-12 hidden md:flex"></div>
            <InfoAlert className={'col-span-12 md:col-span-9'} heading={'Tip'} text={'Setting up your auto-payments only takes a moment with our new Pay-Dues helper!'} />
            <InfoAlert className={'hidden md:block md:col-span-3 text-yellow-600 bg-yellow-100'} heading={'Hey!'} text={'Make it easy with LoanSmart'} textSize={'md:text-2xs xl:text-sm'} />

            <div className="col-span-12 md:col-span-9">
                <StatsBoard />
            </div>

            <div className="col-span-12 md:col-span-3">

                    <Collapse className={"col-span-12"} heading={"Recent Transactions"} contentClassName={''}>
                        <TransactionCard date={new Date} amount={-12.29} account={'Checkings'}/>
                        <TransactionCard date={new Date} amount={-32.46} account={'Checkings'}/>
                        <TransactionCard date={new Date} amount={15.00} account={'Savings'}/>
                        <TransactionCard date={new Date} amount={-300.00} account={'Credit'}/>
                    </Collapse>

                    <Collapse className={"col-span-12"} heading={"Action Items"} contentClassName={''}>
                        <TransactionCard date={new Date} amount={-12.29} account={'Checkings'}/>
                        <TransactionCard date={new Date} amount={-32.46} account={'Checkings'}/>
                        <TransactionCard date={new Date} amount={15.00} account={'Savings'}/>
                        <TransactionCard date={new Date} amount={-300.00} account={'Credit'}/>
                    </Collapse>

            </div>

        </div>
    )
}
