import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [loader, setLoader] = useState(false);
  const [users, setUsers] = useState([]);

  async function clickHandler() {
    setLoader(true);
    try {
      // const usersList = await axios.get("/api/users");
      // const {data} = await axios.get("/api/users");
      const {
        data: { users }
      } = await axios.get("/api/users");
      // setLoader(false);
      // setUsers(usersList.data.users);
      // setUsers(data.users)
      setUsers(users);
      setLoader(false);
    } catch {
      setUsers([]);
    }
  }

  return (
    <div className="App">
      <h1> Data </h1>
      <button onClick={clickHandler}> Click to load data from server </button>
      {loader && <p>Loading...</p>}
      <div>
        {users &&
          users.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
      </div>
    </div>
  );
}
