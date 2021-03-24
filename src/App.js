import React from "react";
import ListItems from './ListItems';
import Banner from './Banner';
import Footer from './Footer';
import "./style.css";

export default function App() {
  return (
    <div>
      <main className="wrapper">
        <Banner />
        <ListItems />
      </main>
      <Footer />
    </div>
  );
}
