import React, { useState, useEffect } from "react";


export default function BookingForm(props){
    const {date, setDate, time, setTime, guestCount, setGuestCount, occasion, setOccasion, availableTimes, setAvailableTimes, submitHandler} = props;


    return (
        <form  onSubmit={submitHandler} style={{display: "grid", maxWidth: "250px", gap: "15px"}}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={e => setDate(e.target.value)}/>
                <br/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time"  value={time} onChange={e => setTime(e.target.value)}>
                    {availableTimes.map((time) => <option key={time}>{time}</option>)}
                </select>
                <br/>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="2" min="1" max="10" id="guests" value={guestCount} onChange={e => setGuestCount(parseInt(e.target.value))}/>
                <br/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <br/>
                <input type="submit" className="btn" value="Make your reservation"/>
            </form>
    )
}