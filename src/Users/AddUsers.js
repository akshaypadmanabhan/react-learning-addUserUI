import React, { Fragment, useRef, useState } from "react";

import classes from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
// import Wrapper from "../Components/Helpers/Wrapper";

function AddUsers(props) {

const nameInputRef =useRef()
const ageInputRef = useRef()

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState('');
  const [error,setError]=useState()

  const addUserHandler = (e) => {
    e.preventDefault();
   let enteredName= nameInputRef.current.value
   let enteredInputAge =ageInputRef.current.value
if(enteredName !== undefined && enteredInputAge >1){
 
  // setEnteredAge("");
  // setEnteredUsername("");

  props.onAddUser(enteredName,enteredInputAge)
}else{
  setError({title:"Invalid Input" , message:"please enter a valid input"})
}


    
  };

  const errorHandler = ()=>{
        setError(null)
  }
  // const usernameChangeHandler = (e) => {
  //   setEnteredUsername(e.target.value);
  // };
  // const ageChangeHandler = (e) => {
  //   setEnteredAge(e.target.value);
  // };

  return (
   <Fragment>
{error && <ErrorModel errorMessage={error} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          htmlFor="name"
          type="text"
          id="username"
          // value={enteredUsername}
          // onChange={usernameChangeHandler}
          ref={nameInputRef}
        />
        <label>Age(Years)</label>
        <input
          type="number"
          id="age"
          // value={enteredAge}
          // onChange={ageChangeHandler}
          ref={ageInputRef}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
   </Fragment>


    
   
   
  );
}

export default AddUsers;
