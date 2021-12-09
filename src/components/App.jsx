import React, { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'

// pages
import Dashboard from '../pages/Dashboard'

// components
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'


export default function App() {
    useEffect(() => {
        themeChange(false)
    }, [])
    return (
        <div className='max-w-screen min-h-screen'>
            <Header className={""}/>
               
            <div className='grid grid-cols-12'>

                <div className="col-span-12 md:col-span-2">
                    <Sidebar />
                </div>

                <div className="col-span-12 md:col-span-8">
                    <Dashboard />
                </div>
                
            </div>

            {/* <Footer /> */}
        </div>
    )
}