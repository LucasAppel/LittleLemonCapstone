import React from "react";
import CardSmall from "./CardSmall";


export default function Testimonials(){
    const ratings = [
        {
            title: "Frank Turner",
            price: 8,
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.",
            imgSrc: null
        },
        {
            title: "Lisa White",
            price: 2,
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.",
            imgSrc: null
        },
        {
            title: "Luke Adams",
            price: 4,
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.",
            imgSrc: null
        }

    ]

    return (
        <section className="gridParentTemplate">
                <h2 className="segment specText">What our customers think:</h2>
                <section className="testCards">
                    {ratings.map((rating) => (
                    <CardSmall key={rating.title} name={rating.title} rating={rating.price} review={rating.desc} imageSrc={rating.imgSrc}></CardSmall>
                    ))}
                </section>
        </section>
    )
}