import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useReducer } from 'react';
import HomePage from './components/Homepage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import { fetchAPI, submitAPI } from 'restaurantAPI';




export default function Main() {
    const navigate = useNavigate();
    const [bookingData, setBookingData] = useState({
        date: new Date().toJSON().split('T')[0],
        time: "",
        guestCount: 2,
        occasion: ""
    });
    const updateTimes = (state, action) => {
        switch (action.type) {
            case 'change_date':
                if (action.times.length > 0) {  
                    setBookingData({...bookingData, time: action.times[0]});      
                    return action.times;
                } else {
                    const bookedOut = "-- Sorry, Booked out! --";
                    setBookingData({...bookingData, time: bookedOut});      
                    return [bookedOut];
                }
            default:
                throw new Error('Unknown action type!');
        }
    };
    const [availableTimes, dispatch] = useReducer(updateTimes, []);

    useEffect(() => {
        const initializeTimes = async () => {
            try {
                const times = await fetchAPI(bookingData.date);
                // @ts-ignore
                dispatch({ type: 'change_date', times });
            } catch (error) {
                if(bookingData.date) alert("Error fetching available times");
            }
        };

        initializeTimes();
    }, [bookingData]);



    const submitHandler = (e) => {
        e.preventDefault();
        submitAPI(bookingData);
        navigate("/bookingconfirmation");
    };

    // Props für BookingForm
    const bookingFormProps = {
        bookingData,
        setBookingData,
        availableTimes,
        submitHandler
    };

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage {...bookingFormProps}/>} />
            <Route path="/bookingconfirmation" element={<ConfirmedBooking />} />
        </Routes>
    );
}
