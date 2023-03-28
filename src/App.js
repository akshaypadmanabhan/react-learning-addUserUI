import React, { useState, Fragment } from "react";
// import Wrapper from "./Components/Helpers/Wrapper";
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
    <Fragment>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
