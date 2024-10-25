import React from 'react'
import Card_L1 from './Card_L1'

export default function React_L1(props) {
  return ( 
    <div>
    <h1 > hello! This is the book review page </h1>
    <Card_L1 title="Pride and Prejudice" author="Jane Austen" date="1813" rating="5"/>
    <Card_L1 title="Crime and Punishment" author="Fyodor Dostoevsky" date="1866" rating="4"/>
    <Card_L1 title="One Hundred Years of Solitude" author="Gabriel García Márquez" date="1967"rating="3" />
    </div>
  )
}
