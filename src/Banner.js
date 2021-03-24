import React from "react";

export default function Banner({ handleClick }){
  return (
    <section className="hero">
        <h1>You thirsty?</h1>
        <article>
          <p>Explore local breweries with just one click and stirred by starlight across the centuries light years great turbulent clouds circumnavigated paroxysm of global death.</p>
          <button onClick={handleClick}>Browse Breweries</button>
        </article>
    </section>
  )
}