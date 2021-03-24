import React from "react";
import { avatar } from './data';

export default function Item({item}) {

  return(
    <li>
      <figure>
          <img src={avatar()} alt='alt text' />
          <figcaption><h3>{item.company.catchPhrase}</h3></figcaption>
      </figure>
      <div></div>
      <p> 
        <span>{item.name}</span>
      </p>
      <p> 
        <span>{item.email}</span>
      </p>
      <p> 
        <span>{item.phone}</span>
      </p>
      <a href='#'>Visit Website</a>
    </li>
  )
}