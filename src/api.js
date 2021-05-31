import axios from "axios";

const API_KEY = "02409929a851084f4988821600cc4d8a"

const BASE_CURRENCIES = "&symbols=IDR,EUR,GBP,SGD"

const instance = axios.create({
  baseURL: "https://api.exchangeratesapi.io/v1/latest",
});

export const getEURToUSD = async () => {
  const response = await axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&symbols=USD`)
  return response.data
}

export const getCurrencyNames = async () => {
  const response = await axios.get(`http://api.exchangeratesapi.io/v1/symbols?access_key=${API_KEY}`)
  return response.data
}

export const getBaseCurrencies = async () => {
  const response = await axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}${BASE_CURRENCIES}`)
  return response.data
}

export const getSpecificCurrency = async (currency) => {
  const response = await axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&symbols=${currency}`)
  return response.data
}

export default instance;