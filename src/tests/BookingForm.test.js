import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from '../components/BookingForm';
import React from "react";


const bookingProps = {
        date: "", setDate: () => (""),
        time: "", setTime: () => (""),
        guestCount: 0, setGuestCount: () => (""),
        occasion: "", setOccasion: () => (""),
        availableTimes: [], setAvailableTimes: () => (""),
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
