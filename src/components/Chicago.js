import React from "react";
import './components.css'
import restaurantfood from '../icons_assets/restauranfood.jpg'

export default function Chicago(){
    return (
    <>
        <div className="gridParentTemplate">
            <section className="chicText">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </section>
            <div className="chicImgWrap">
                <img className="chicImg1" src={restaurantfood} alt="food"/>
                <img className="chicImg2" src={restaurantfood} alt="food"/>
            </div>
        </div>
    </>
    )
}