import React, { useEffect, useRef, useState } from "react";
import classes from "./index.module.css";
import { putFB, getFB } from "../helpers/httpRequests";

function index() {
  const [display, setDisplay] = useState(0);
  const inputRef = useRef();
  useEffect(() => {
    get();
  }, []);
  const get = async () => {
    const parsedResponse = await getFB();
    setDisplay(parsedResponse);
  };
  const putHandler = async () => {
    const inputVal = inputRef.current.value;
    await putFB({ 1: inputVal }); // needs a ref
    inputRef.current.value = "";
  };

  return (
    <section className={classes.section}>
      <h1>Current data on the backend:</h1>
      <p>{display}</p>
      <div>
        <button onClick={putHandler}>PUT on backend</button>
        <input ref={inputRef} placeholder="Will be sent to Firebase..."></input>
      </div>
    </section>
  );
}

export default index;
