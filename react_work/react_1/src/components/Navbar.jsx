import React from 'react'

export default function Navbar(props) {
  return (
    <div>


    <div className="navbar">

    <div className="brand">
        Flipkart <small>Explore <span>Plus</span></small>
    </div>
    

    <div className="search-bar">
        <input type="text" placeholder="Search for products"/>
        <button type="submit">
            🔍
        </button>
    </div>
    <div className="nav-links">
        <a href="#">Login</a>
        <a href="#">Become a Seller</a>
        <a href="#">More</a>
        <a href="#">🛒 Cart</a>
    </div>
</div>
    </div>
  )
}
