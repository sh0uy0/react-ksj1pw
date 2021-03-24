import React, {useState, useEffect} from "react";
import ListItems from './ListItems';
import Banner from './Banner';
import Data from './data';
// import axios from "axios";
// import Card from './Cards';
import Footer from './Footer';
import "./style.css";
// import "./style2.css";

export default function App() {
  const [items, setItems] = useState({
    data: []
  });

  useEffect(() => {
    getItems();
    }, [])

  const resetData = () => {
    setItems({});
    const number = +prompt('Set Number', 3);
    const data = Data(number);
    setItems({ data });
  }

  const addData = data => {
    setItems({
      ...items.data,
      data
    })
  } 

  const getItems = () => {
    //  axios.get('https://jsonplaceholder.typicode.com/users')
    //       .then(response => {
    //       const data = response.data;
    //       setItems({ data });
    //       // console.log('Recieved data: ', Data());
    //       }).catch(error => console.error(error))
      const data = Data(6);
      // console.log('Recieved data: ', data);
      setItems({ data });
    }
  return (
    <div>
      <main className="wrapper">
        <Banner handleClick={resetData} addData={addData} />
        <ListItems data={items} />
      </main>
      <Footer />
    </div>
  );
}
