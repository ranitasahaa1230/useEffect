import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [text, inputText] = useState("");
  const [wishList, setWishList] = useState([]);

  const addWishList = (e) => {
    e.preventDefault();
    // const id = wishList.length + 1;
    const id = Math.random(wishList.length + 1);
    setWishList((prev) => [...prev, { id, text }]);
    // setWishList((prev) => [...prev, { uuidKey:id, wishText:text }]);
    inputText("");
  };

  useEffect(() => {
    if (wishList.length > 0)
      localStorage.setItem("wishItems", JSON.stringify(wishList));
    // console.log(localStorage.getItem("wishItems")); //reading values
  }, [wishList]);

  useEffect(() => {
    setWishList(JSON.parse(localStorage.getItem("wishItems")) || []);
  }, []);
  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder="I wish..."
          value={text}
          onChange={(e) => inputText(() => e.target.value)}
        />
        <button type="submit" onClick={addWishList}>
          Add Wishlist
        </button>
      </form>
      <div>
        {/* {wishList.map(({uuidKey, wishText}) => { */}
        {/* return <li key={uuidKey}>{wishText}</li>; */}
        {wishList.map((wish) => {
          return <li key={wish.id}>{wish.text}</li>;
        })}
      </div>
    </div>
  );
}
