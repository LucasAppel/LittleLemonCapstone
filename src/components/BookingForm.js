// @ts-nocheck
import React, { useState, useEffect } from "react";
import "./BookingForm.css"; // Importieren Sie die CSS-Datei für die Stile

export default function BookingForm(props) {
    // Props für BookingForm
    const {
        bookingData,
        setBookingData,
        availableTimes,
        submitHandler
    } = props;

    // State für Fehlermeldungen
    const [errors, setErrors] = useState({});

    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()).toJSON().split('T')[0];
    const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 29).toJSON().split('T')[0];

 
    
    useEffect(() => {
        
        // Funktion zur Validierung des Datums
        const validateDate = (date) => {
            const selectedDate = date;
            let dateErrors = { ...errors };
    
            if (!selectedDate || selectedDate === "" || selectedDate < minDate) {
                dateErrors.date = "Please select a future date";
            } else {
                delete dateErrors.date // Fehler löschen, wenn kein Fehler mehr vorliegt
            }
    
            return dateErrors;
        };
    
        // Funktion zur Validierung der Gästezahl
        const validateGuestCount = (count) => {
            let guestCountErrors = { ...errors };
    
            if (isNaN(count) || count < 1 || count > 10) {
                guestCountErrors.guestCount = "Please enter a number between 1 and 10";
            } else {
              delete guestCountErrors.guestCount
            }
    
            return guestCountErrors;
        };

        // Funktion zur Validierung der Zeit
        const validateTime= (time) => {
            let timeError = { ...errors };
    
            if (time === "-- Sorry, Booked out! --") {
                timeError.time = "Please enter a number between 1 and 10";
            } else {
              delete timeError.time
            }
    
            return timeError;
        };
    
        // Funktion zur Validierung des Formulars
        const validateForm = () => {
            const dateErrors = validateDate(bookingData.date);
            const guestCountErrors = validateGuestCount(bookingData.guestCount);
            const timeErrors = validateTime(bookingData.time);
            const combinedErrors = {...errors, date: dateErrors.date, guestCount: guestCountErrors.guestCount, time: timeErrors.time  };
    
            setErrors(combinedErrors);
        };
    
        validateForm();
    }, [bookingData, errors, minDate]);
    
    
 

    

    return (
        <div className="booking-form-container">
            <form onSubmit={(e) => {
                e.preventDefault();
                if (Object.values(errors).every((err)=>err===undefined)) {
                    submitHandler(e);
                }
            }} style={{ display: "grid", maxWidth: "250px", gap: "15px" }}>
                <div className="input-container">
                    <label htmlFor="res-date">Choose date</label><br/>
                    <input type="date" aria-label="date" min={minDate} max={maxDate} required id="res-date" value={bookingData.date} onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })} />
                    {errors.date && <div className="error-tooltip">{errors.date}</div>}
                </div>
                <div className="input-container">
                    <label htmlFor="res-time">Choose time</label><br/>
                    <select id="res-time" aria-label="time" value={bookingData.time} onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}>
                        {availableTimes.map((time) => <option key={time}>{time}</option>)}
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="guests">Number of guests</label><br/>
                    <input type="number" aria-label="guests" placeholder="" min="1" max="10" id="guests" value={bookingData.guestCount.toString()} onChange={(e) => setBookingData({ ...bookingData, guestCount: parseInt(e.target.value) })} />
                    {errors.guestCount && <div className="error-tooltip">{errors.guestCount}</div>}
                </div>
                <div className="input-container">
                    <label htmlFor="occasion">Occasion</label><br/>
                    <select id="occasion" aria-label="occasion" value={bookingData.occasion} onChange={(e) => setBookingData({ ...bookingData, occasion: e.target.value })}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <input type="submit" aria-label="submit" className="btn" value="Make your reservation" disabled={Object.values(errors).some((err)=>err!==undefined)} />
            </form>
        </div>
    );
}
