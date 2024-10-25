import React from 'react'

export default function Card_L2(props) {
  return (
<div>
   
    <div className='main1'>
      <img src={props.img} height="300px"width="300px"className='img'></img>
      <div className='content1'>
<h2>{props.name}</h2>
<h3> STARTING PRICE :- {props.price}</h3>
<p>The 2024 Harley-Davidson {props.name} motorcycle is a long-haul touring Trike with all the torque, style, premium infotainment, and cargo space you’ll ever need.</p>
      </div>
    </div>
    </div>


// <Card_L2 name="Tri Glide® Ultra" price="$37,999" img="https://www.harley-davidson.com/content/dam/h-d/images/promo-images/2024/hero-cards/3-up/tri-glide-v2-hc3.jpg?impolicy=myresize&rw=600"/>
/* <Card_L2 name="Heritage Classic 114" price="$22,499" img="https://www.harley-davidson.com/content/dam/h-d/images/promo-images/2024/hero-cards/3-up/heritage-classic-v2-hp-hc3.jpg?impolicy=myresize&rw=600"/>
    
    <Card_L2 name="Street Glide®" price="$25,999" img="https://www.harley-davidson.com/content/dam/h-d/images/promo-images/2024/hero-cards/3-up/street-glide-v3-hp-hc3.jpg?impolicy=myresize&rw=600"/>
    
    <Card_L2 name="Breakout® 117" price="$22,499" img="https://www.harley-davidson.com/content/dam/h-d/images/category-images/2024/content-carousel/cruiser-ml-cccar.jpg?impolicy=myresize&rw=400"/> */

  )
}
