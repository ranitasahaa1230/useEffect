import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get("/api/addresses");
      setAddresses(data.addresses);
      // setAddresses((currentAddress) =>
      //   currentAddress.concat({ city: "Tanay" })
      // );
    })();
  }, []);

  const clickHandler = async () => {
    setLoader(true);
    try {
      const addressItems = await axios.post("/api/addresses", {
        address: {
          id: Math.random(),
          city: newAddress
        }
      });
      // console.log("Post data: ", addressItems.data.address);
      setLoader(false);
      setAddresses((prev) => [...prev, addressItems.data.address]);
      setNewAddress("");
    } catch (error) {
      console.log("err", error.description);
      setAddresses("Couldn't save the data");
    }
  };

  return (
    <div className="App">
      <h1> address book </h1>
      <input
        type="text"
        value={newAddress}
        placeholder="enter city"
        onChange={(event) => {
          const { value } = event.target;
          setNewAddress(value);
        }}
      />
      <button onClick={clickHandler}> Save Address </button>
      {loader && <div>Saving to server...</div>}
      <ul>
        {addresses.map((address) => (
          <li key={address.id}>{address.city}</li>
        ))}
      </ul>
    </div>
  );
}
