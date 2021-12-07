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
            <SubHeader className={'col-span-12'}>Dashboard</SubHeader>
            <div class="divider col-span-12"></div>
            <InfoAlert className={'col-span-6'} heading={'Tip'} text={'Setting up your auto-payments only takes a moment with our new Pay-dues helper!'} />

            <div className="col-span-12">
                <StatsBoard />
            </div>

            <Collapse className={"col-span-12"} heading={"Recent Transactions"}>
                <TransactionCard date={new Date} amount={-12.29} account={'Checkings'}/>
                <TransactionCard date={new Date} amount={-32.46} account={'Checkings'}/>
                <TransactionCard date={new Date} amount={15.00} account={'Savings'}/>
                <TransactionCard date={new Date} amount={-300.00} account={'Credit'}/>
                
            </Collapse>

        </div>
    )
}
