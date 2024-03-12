import { Route, Routes } from 'react-router-dom'
import HomePage from './components/Homepage'
import BookingPage from './components/BookingPage'
import React, { useState, useReducer, useEffect } from 'react'
import { fetchAPI, submitAPI } from 'restaurantAPI';

export default function Main(){

    const today = new Date();
    // State
    const [date, setDate] = useState(new Date(today.getFullYear(), today.getMonth(), today.getDate()+1).toJSON().split('T')[0]);
    const [time, setTime] = useState("");
    const [guestCount, setGuestCount] = useState(0);
    const [occasion, setOccasion] = useState("");




    const initializeTimes = () => ([]);

    const updateTimes = (state, action) => {
        // action.date to be used?
        switch(action.type){
            case 'change_date':
                state = action.times;
                return state;
            case 'remove_time_available':
                return initializeTimes();
            default:
                throw Error('Unknown action type!')
        }
    }

    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes());

    const submitHandler = (e) => {
        alert('Reservation received!');
        e.preventDefault();
    }
    useEffect(()=>{
        fetchAPI(date)
            // @ts-ignore
            .then((resp) => {setAvailableTimes({type: 'change_date', times: resp})})
    }, [date])

const bookingProps = {date, setDate, time, setTime, guestCount, setGuestCount, occasion, setOccasion, availableTimes, setAvailableTimes, submitHandler};

    return (
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/booking" element={<BookingPage {...bookingProps} />}/>
            </Routes>
    )
}
