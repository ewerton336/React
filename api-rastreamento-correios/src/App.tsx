import React from "react";
import api from "./components/axios";

function App() {
  var result = teste();
  console.log(result);

  console.log("passei por aqui ");
  return <div>Oiiii ;</div>;
}

async function teste() {
  var response = await api.get("LB317268015HK");
  return await response.data;
}

export default App;
