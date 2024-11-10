import React, { useEffect, useState } from "react";
import './App.css';

function getMoviesFromApiAsync() {
  fetch('https://facebook.github.io/react-native/movies.json')
    .then(response => response.json())
    .then((jsonData) => {
      // jsonData is parsed json object received from url
      console.log(jsonData)
      return <div>{jsonData}</div>
    })
    .catch((error) => {
      // handle your errors here
      console.error(error)
    })
    
}

export default getMoviesFromApiAsync;