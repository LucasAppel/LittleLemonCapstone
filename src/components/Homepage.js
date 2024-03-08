import React from "react";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Chicago from "./Chicago";

export default function HomePage(){
    return (
     <>
        <CallToAction/>
        <Specials/>
        <Testimonials/>
        <Chicago/>
     </>
    )
}