import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");
  const [freeText, setFreeText] = useState("");

  const nameHandller = (event) => {
    setUserName(event.target.value);
  };
  const ageHandler = (event) => {
    setUserAge(event.target.value);
  };
  const dateHandler = (event) => {
    setSubmissionDate(event.target.value);
  };
  const textHandler = (event) => {
    setFreeText(event.target.value);
  };

  const userInput = [userName, userAge, submissionDate, freeText];

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(userInput);
  };

  return (
    <div>
      <Card className={classes.input}>
        <h1>Fill your data below:</h1>
        <form>
          <label htmlFor="username">Name</label>
          <input type="text" id="name" onChange={nameHandller}></input>

          <label htmlFor="age">Age</label>
          <input type="number" id="age" onChange={ageHandler}></input>

          <label htmlFor="date">Date of submission</label>
          <input type="date" id="date" onChange={dateHandler}></input>

          <label htmlFor="freeText">What would you liek to Submit?</label>
          <textarea
            id="freeText"
            rows="10"
            cols="35"
            onChange={textHandler}
          ></textarea>
        </form>
        <Button type="submit" label="Submit" onClick={onSubmitHandler} />
      </Card>
    </div>
  );
};

export default AddUser;
