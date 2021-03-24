import React from "react";
import Item from './Item';

export default function ListItems({ data }) {

return (
        <section className="breweries" id="breweries">
          <ul>
            {data.data.map(obj => (<Item key={obj.user.phone} item={obj}/>))}
          </ul>
        </section>
  )
}