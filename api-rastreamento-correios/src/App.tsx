import React from "react";
import api from "./components/axios";

function App() {
  var results = teste().then;
  console.log(results);

  return <div>Oiiii ;</div>;
}

async function teste() {
  var response = await api.get("");
  return response.data;
}

export default App;
