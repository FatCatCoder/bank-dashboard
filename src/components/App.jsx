import React from 'react'

// pages
import Dashboard from '../pages/Dashboard'

// components
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'


export default function App() {
    return (
        <div className='grid min-w-full min-h-screen'>
            <Header />
               
            <div className='container grid grid-cols-12'>

                <div className="col-span-2">
                    <Sidebar />
                </div>

                <div className="col-span-10">
                    <Dashboard />
                </div>
                
            </div>

            <Footer />
        </div>
    )
}