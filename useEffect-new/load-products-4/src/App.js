import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [loader, setLoader] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      setLoader(true);
      try {
        const productItems = await axios.get("/api/products");
        setLoader(false);
        setProducts(productItems.data.products);
      } catch {
        setProducts([]);
      }
    })();
  }, []);

  return (
    <div className="App">
      <h1> Showcase Products </h1>
      {loader && <p>Loading...</p>}
      {products &&
        products.map((product) => {
          return (
            <div className="card" key={product.id}>
              <li>{product.name}</li>
              <img src={product.image} alt="products" />
              <div>Price: {product.price}</div>
            </div>
          );
        })}
    </div>
  );
}
