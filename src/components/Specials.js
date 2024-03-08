import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

import greekSaladImg from "../icons_assets/greek salad.jpg"
import bruschettaImg from "../icons_assets/bruchetta.svg"
import lemonDessertImg from '../icons_assets/lemon dessert.jpg'

export default function Specials(){
    const specials = [
        {
            title: "Greek Salad",
            price: 11,
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.",
            imgSrc: greekSaladImg
        },
        {
            title: "Bruschetta",
            price: 11,
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.",
            imgSrc: bruschettaImg
        },
        {
            title: "Lemon Dessert",
            price: 11,
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.",
            imgSrc: lemonDessertImg
        }

    ]

    return (
        <section className="gridParentTemplate">
                <h2 className="segment specText">This weeks specials!</h2>
                <Link className='btn segment specBtn' to='/Menu'>Menu</Link>
                <section className="specCards">
                    {specials.map((special) => (
                    <Card key={special.title} title={special.title} price={special.price} description={special.desc} imageSrc={special.imgSrc}></Card>
                    ))}
                </section>
        </section>
    )
}