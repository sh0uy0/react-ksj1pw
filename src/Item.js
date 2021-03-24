import React from "react";
import { avatar } from './data';

export default function Item({item}) {
  return(
    <li>
      <figure>
          <img src={avatar()} alt='alt text' />
          <figcaption><h3>{item.user.username}</h3></figcaption>
      </figure>
      <p> 
        <span>{item.user.name}</span>
      </p>
      <p> 
        <span>{item.user.email}</span>
      </p>
      <p> 
        <span>{item.user.phone}</span>
      </p>
      <a href='#'>Visit</a>
    </li>
  )
}