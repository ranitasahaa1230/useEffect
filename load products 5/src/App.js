import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [prod, setProd] = useState([]);
  useEffect(() => {
    // axios.get("/api/products").then((data) => {
    //   setProd(data.data.products);
    // });

    // named
    async function fetcher() {
      const data = await axios.get("/api/products");
      setProd(data.data.products);
    }
    // fetcher();

    // async IIFE
    (async () => {
      const data = await axios.get("/api/products");
      setProd(data.data.products);
    })();
  }, []);

  return (
    <div className="App">
      <h1> Showcase Products </h1>
      <div>
        {prod &&
          prod.map((each) => {
            return (
              <div key={each.id} className="card">
                <div>{each.name}</div>
                <img src={each.image} alt="" />
                <div>{each.price}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
