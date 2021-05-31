import React from 'react'
import ReactDOM from 'react-dom'
import AddCurrencyBox from "./AddCurrencyBox"

it("renders AddCurrencyBox component without crashing", () => {
  const div = document.createElement("div")

  const mockAvailableCurrencies = ["IDR", "USD"]

  const mockAddCurrency = () => {
    return "mock"
  }

  ReactDOM.render(<AddCurrencyBox availableCurrencies = {mockAvailableCurrencies} addCurrency={mockAddCurrency}/>, div)
})