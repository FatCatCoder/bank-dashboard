import React from 'react'

// components
import SubHeader from '../components/SubHeader'
import InfoAlert from '../components/InfoAlert'
import StatsBoard from '../components/StatsBoard'


export default function Dashboard() {
    return (
        <div className='grid grid-cols-12'>
            <SubHeader className={''}>Dashboard</SubHeader>

            <InfoAlert className={'col-span-6'} heading={'Tip'} text={'Setting up your auto-payments only takes a moment with our new Pay-dues helper!'} />

            <div className="col-span-12">
                <StatsBoard />
            </div>
        </div>
    )
}
