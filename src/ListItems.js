import React, {useState, useEffect} from "react";
import axios from "axios";
import Item from './Item';

// async function getItems(){
   // console.log('Recieved data: ', data);
// }

export default function ListItems() {
  // const data2 = getItems();
const [items, setItems] = useState({
  data: []
});

useEffect(() => {
  getItems();
  }, [])

const getItems = () => {
   axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
        const data = response.data;
        setItems({ data });
        // console.log('Recieved data: ', data);
        }).catch(error => console.error(error))
}
return (
        <section className="breweries" id="breweries">
          <ul>
            {items.data.map(obj => (<Item key={obj.id} item={obj}/>))}
          </ul>
        </section>
  )
}