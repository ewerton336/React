import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://proxyapp.correios.com.br/v1/sro-rastro/LB317268015HK",
});

export default api;
