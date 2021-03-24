import React from "react";
import ListItems from './ListItems';
import Banner from './Banner';
import Card from './Cards';
import Footer from './Footer';
import "./style.css";
import "./style2.css";

export default function App() {
  return (
    <div>
      <main className="wrapper">
        <Banner />
        <ListItems />
      </main>
      <Card />
      <Footer />
    </div>
  );
}
