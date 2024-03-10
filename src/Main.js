import { Route, Routes } from 'react-router-dom'
import HomePage from './components/Homepage'
import BookingPage from './components/BookingPage'
import React, { useState, useReducer } from 'react'

export const initializeTimes = () => ([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
]);

export const updateTimes = (state, action) => {
    // action.date to be used?
    switch(action.type){
        case 'change_date':
            return initializeTimes();
        case 'remove_time_available':
            return initializeTimes();
        default:
            throw Error('Unknown action type!')
    }
}

export const submitHandler = (e) => {
    alert('Reservation received!');
    e.preventDefault();
}

export default function Main(){

    // State
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [guestCount, setGuestCount] = useState(0);
    const [occasion, setOccasion] = useState("");

    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes());



const bookingProps = {date, setDate, time, setTime, guestCount, setGuestCount, occasion, setOccasion, availableTimes, setAvailableTimes, submitHandler};

    return (
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/booking" element={<BookingPage {...bookingProps} />}/>
            </Routes>
    )
}