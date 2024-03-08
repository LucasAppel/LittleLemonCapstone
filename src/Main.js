import { Route, Routes } from 'react-router-dom'
import HomePage from './components/Homepage'
import BookingPage from './components/BookingPage'
import React from 'react'


export default function Main(){
    return (

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/booking" element={<BookingPage/>}/>
            </Routes>

    )
}

