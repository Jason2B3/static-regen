import React, { useEffect, useRef, useState } from "react";
import classes from "./index.module.css";
import { putFB, getFB } from "../helpers/httpRequests";

function index(props) {
  const inputRef = useRef();
  const putHandler = async () => {
    const inputVal = inputRef.current.value;
    await putFB({ 1: inputVal }); // needs a ref
    inputRef.current.value = "";
  };
  return (
    <section className={classes.section}>
      <h1>Current data on the backend:</h1>
      <p>{props.display}</p>
      <div>
        <button onClick={putHandler}>PUT on backend</button>
        <input ref={inputRef} placeholder="Will be sent to Firebase..."></input>
      </div>
    </section>
  );
}
export default index;
// RENDERING CHANGES DYNAMICALLY
// this function will run on the server after deployment (not during build)
// This code does not execute client-side
export async function getServerSideProps(context){
  console.log(context)
  let responseData= await getFB()
  return { 
  	props: { display: responseData }, 
  };
}