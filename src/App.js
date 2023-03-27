import React, { useState } from "react";
import AddUsers from "./Users/AddUsers";
import UserList from "./Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevList) => {
      // console.log(uName)
      let newData = [
        ...prevList,
        { username: uName, age: uAge, id: Math.random.toString() },
      ];
      // console.log(newData)
      return newData;
    });
  };
  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
