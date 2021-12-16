import React, { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'

// pages
import Dashboard from '../pages/Dashboard'

// components
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'


export default function App() {
    useEffect(() => {
        themeChange(false)
    }, [])
    return (
        <div className='max-w-screen min-h-screen mb-20 md:mb-0'>
            <Header className={""}/>
               
            <div className='grid grid-cols-12'>

                <div className="col-span-12 md:col-span-2 2xl:col-span-1">
                    <Navbar />
                </div>

                <div className="col-span-12 md:col-span-10 2xl:col-span-10 m-2">
                    <Dashboard />
                </div>
                
            </div>

            {/* <Footer /> */}
        </div>
    )
}