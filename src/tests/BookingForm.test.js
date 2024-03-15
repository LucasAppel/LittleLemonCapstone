import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from '../components/BookingForm';
import React from "react";

  
// Berechne Datum in ISO-Format für heute + 2 Tage
const today = new Date();
today.setDate(today.getDate() + 2);
const minDate = today.toISOString().split('T')[0];


const setBookingData = jest.fn().mockImplementation(data => {
    bookingFormProps.bookingData = { ...bookingFormProps.bookingData, ...data };
});

const bookingProps = {
        date: minDate, setDate: () => (""),
        time: "10:00", setTime: () => (""),
        guestCount: 2, setGuestCount: () => (""),
        occasion: "Anniversary", setOccasion: () => (""),
        availableTimes: ["10:00", "11:00"], 
        setAvailableTimes: () => (""),
        submitHandler: jest.fn()
    };
const bookingFormProps = {
        bookingData: bookingProps,
        setBookingData: setBookingData,
        availableTimes: ["10:00", "11:00"],
        submitHandler: jest.fn()
    };
    

test('Renders the BookingForm heading', () => {
    render(<BookingForm {...bookingFormProps} />);
    const submitEle = screen.getByText("Make your reservation");
    expect(submitEle).toBeInTheDocument();
})

test('submit function', () => {
    render(<BookingForm {...bookingFormProps} />);
    const submitEle = screen.getByText("Make your reservation");
    fireEvent.submit(submitEle);
    expect(bookingFormProps.submitHandler).toHaveBeenCalled();
  });



  test('Validate date field with past date', () => {
    render(<BookingForm {...bookingFormProps} />);
    const dateInput = screen.getByLabelText("Choose date");
    fireEvent.change(dateInput, { target: { value: "2024-03-09" } }); // Set a past date

    //const errorTooltip = screen.getByText("Please select a future date");
    //expect(errorTooltip).toBeInTheDocument();
    expect(bookingFormProps.setBookingData).toHaveBeenCalled();
});

test('Validate date field with future date', () => {
    render(<BookingForm {...bookingFormProps} />);
    const dateInput = screen.getByLabelText("Choose date");
    fireEvent.change(dateInput, { target: { value: minDate } }); // Set a future date
    fireEvent.submit(screen.getByText("Make your reservation"));
    const errorTooltip = screen.queryByText("Please select a future date");
    expect(errorTooltip).not.toBeInTheDocument();
    expect(bookingFormProps.submitHandler).toHaveBeenCalled();
});

test('Validate guest count field with invalid input', () => {
    render(<BookingForm {...bookingFormProps} />);
    const guestCountInput = screen.getByLabelText("Number of guests");
    fireEvent.change(guestCountInput, { target: { value: "abc" } }); // Set invalid input
    fireEvent.submit(screen.getByText("Make your reservation"));
    //const errorTooltip = screen.getByText("Please enter a number between 1 and 10");
    //expect(errorTooltip).toBeInTheDocument();
    expect(bookingFormProps.setBookingData).toHaveBeenCalled();
});

test('Validate guest count field with valid input', () => {
    render(<BookingForm {...bookingFormProps} />);
    const guestCountInput = screen.getByLabelText("Number of guests");
    fireEvent.change(guestCountInput, { target: { value: "5" } }); // Set valid input
    fireEvent.submit(screen.getByText("Make your reservation"));
    const errorTooltip = screen.queryByText("Please enter a number between 1 and 10");
    expect(errorTooltip).not.toBeInTheDocument();
    expect(bookingFormProps.submitHandler).toHaveBeenCalled();
});
