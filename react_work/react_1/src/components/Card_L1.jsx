import React from 'react'

export default function card_L1(props) {
  return (
        
 <div className='card1'>
<h3> BOOK TITLE :- {props.title}</h3>
<h3> BOOK AUTHOR :- {props.author}</h3>
<h3> PUBLISHED ON :- {props.date}</h3>
<h3> RATING :- {props.rating}</h3>
        </div>

  )
}
