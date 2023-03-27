import React, { useState } from "react";

import classes from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

function AddUsers(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState('');
  const [error,setError]=useState()

  const addUserHandler = (e) => {
    e.preventDefault();

if(enteredUsername !== undefined && enteredAge >1){
 
  setEnteredAge("");
  setEnteredUsername("");

  props.onAddUser(enteredUsername,enteredAge)
}else{
  setError({title:"Invalid Input" , message:"please enter a valid input"})
}


    
  };

  const errorHandler = ()=>{
        setError(null)
  }
  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <div>
 {error && <ErrorModel errorMessage={error} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          htmlFor="age"
          type="text"
          id="username"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label>Age(Years)</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
   
  );
}

export default AddUsers;
