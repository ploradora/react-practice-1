import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChange = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChange = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card cssClass={classes.container}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChange}
        />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="text" value={enteredAge} onChange={ageChange} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
