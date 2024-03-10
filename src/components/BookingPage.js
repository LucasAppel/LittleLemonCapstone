import React from "react";
import {Box} from "@chakra-ui/react";

import headerImg from '../icons_assets/Mario and Adrian A.jpg'
import BookingForm from "./BookingForm";

export default function BookingPage(props){
    return (
     <Box className="gridParentTemplate" bg="rgb(73,94,87)">
        <section className="bookingLeft">
            <h1>Book a Table!</h1>
            <img className="imgBooking" src={headerImg} alt="two laughing cooks in restaurant"/>
        </section>
        <section className="bookingRight">
            <BookingForm {...props}/>
        </section>
     </Box>
    )
}