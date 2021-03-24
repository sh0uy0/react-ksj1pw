import React from "react";

export default function Item({item}) {
  const data = [
    {
    id: 1,
    img: {
      source: 'https://images.unsplash.com/photo-1471421298428-1513ab720a8e',
      altTxt: 'Several hands holding beer glasses'
    },
    caption: 'Billions upon billions',
    description: 'Made in the interiors of collapsing stars star stuff harvesting star light venture billions upon billions Drake Equation brain is the seed of intelligence?',
    link: '#'
    },
    {
    id: 2,
    img: {
      source: 'https://images.unsplash.com/photo-1513309914637-65c20a5962e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80',
      altTxt: 'Several friends doing a toast'
    },
    caption: 'Drake Equation',
    description: 'Another world citizens of distant epochs from which we spring descended from astronomers Orion\'s sword shores of the cosmic ocean.',
    link: '#'
    },
    {
    id: 3,
    img: {
      source: 'https://images.unsplash.com/photo-1535359056830-d4badde79747?ixlib=rb-1.2.1&auto=format&fit=crop&w=3402&q=80',
      altTxt: 'Three different glasses of beer'
    },
    caption: 'Vast cosmic arena',
    description: 'Galaxies the ash of stellar alchemy prime number science inconspicuous motes of rock and gas brain is the seed of intelligence.',
    link: '#'
    }
  ]
  return(
    <li>
      <figure>
          <img src={data.img.source} alt={data.img.altTxt} />
          <figcaption><h3>{item.company.catchPhrase}</h3></figcaption>
      </figure>
      <p> 
        <span>{item.name}</span>
        <span>{item.email}</span>
        <span>{item.phone}</span>
      </p>
      <a href={data.link}>Visit Website</a>
    </li>
  )
}