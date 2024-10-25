import React, { useState } from "react";
import './prodects.css';
const Products = (props) => {
    const [priceText, setPriceText] = useState(props.price);
    const Changeprice = () => {
        setPriceText("8900"); 
    };
    return (
        <figure className="products" onClick={Changeprice}>
            <img src={props.imgURL} alt="" height="400px" width="400px" />
            <h2>{props.name}</h2>
            <h2 >{priceText}</h2>
        </figure>
    );
}
export default Products;