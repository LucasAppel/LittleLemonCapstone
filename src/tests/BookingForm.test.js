import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from '../components/BookingForm';
import React, { useState } from "react";
import { submitHandler } from "Main";

const bookingProps = {date: "", setDate: () => (null),
        time: "", setTime: () => (null),
        guestCount: 0, setGuestCount: () => (null),
        occasion: "", setOccasion: () => (null),
        availableTimes: [], setAvailableTimes: () => (null),
        submitHandler: jest.fn()
    };

test('Renders the BookingForm heading', () => {
    render(<BookingForm {...bookingProps} />);
    const submitEle = screen.getByText("Make your reservation");
    expect(submitEle).toBeInTheDocument();
})

test('submit function', () => {
    render(<BookingForm {...bookingProps} />);
    const submitEle = screen.getByText("Make your reservation");
    fireEvent.submit(submitEle);
    expect(bookingProps.submitHandler).toHaveBeenCalled();
  });
