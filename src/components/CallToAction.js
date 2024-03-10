import React from "react";
import './components.css'
import restaurantfood from '../icons_assets/restauranfood.jpg'
import { Link } from "react-router-dom";

export default function CallToAction(){
    return (
        <div className="gridParentTemplate cta">
            <section className="ctaText">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p><br/>
                <Link className='btn' to='/booking'>Reserve a Table</Link>
            </section>
            <img className="ctaImg" src={restaurantfood} alt="food"/>
        </div>
    )
}