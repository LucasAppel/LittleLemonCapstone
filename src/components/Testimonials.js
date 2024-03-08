import React from "react";
import { Link } from "react-router-dom";
import CardSmall from "./CardSmall";

import greekSaladImg from "../icons_assets/greek salad.jpg"
import bruschettaImg from "../icons_assets/bruchetta.svg"
import lemonDessertImg from '../icons_assets/lemon dessert.jpg'

export default function Testimonials(){
    const ratings = [
        {
            title: "Greek Salad",
            price: 8,
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.",
            imgSrc: null
        },
        {
            title: "Bruschetta",
            price: 2,
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.",
            imgSrc: bruschettaImg
        },
        {
            title: "Lemon Dessert",
            price: 4,
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.",
            imgSrc: lemonDessertImg
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