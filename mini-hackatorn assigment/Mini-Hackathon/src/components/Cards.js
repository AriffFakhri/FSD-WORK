import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>NEED A QUICK FIX?</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="image/Story1.jpg"
              text="Founded in 2024, CSSB comes from an idea that everyone can enjoy coffee. "
              label="Our Story"
              path="/about"
            />
            <CardItem
              src="image/Story2.jpg"
              text="Give Yourself A High-Quality, Handcrafted Coffee Choice To Help Fuel Your Workday."
              label="Menu"
              path="/menu"
            />
          </ul>
          <h2>OUR BEST SELLERS</h2>
          <ul className="cards__items">
            <CardItem
              src="image/menu/Coffee1.jpeg"
              text="The right dose of coffee and milk, sweetened with organic brown sugar."
              label="Latte"
              path="/menu"
            />
            <CardItem
              src="image/menu/Coffee2.jpeg"
              text="A classic favourite caffe latte."
              label="White"
              path="/menu"
            />
            <CardItem
              src="image/menu/Coffee3.jpeg"
              text="Strong and bold americano, perfect to boosten up your morning!"
              label="Americano"
              path="/menu"
            />
            <CardItem
              src="image/menu/Coffee4.jpg"
              text="Our signature caffe latte with intense coffee and sweet chocolate paste."
              label="Mocha"
              path="/menu"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
