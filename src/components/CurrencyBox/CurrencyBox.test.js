import React from 'react'
import ReactDOM from 'react-dom'
import CurrencyBox from "./CurrencyBox"

it("renders CurrencyBox component without crashing", () => {
  const div = document.createElement("div")

  const mockCurrency = "IDR"
  const mockRate = 14500
  const mockInputMoney = 10
  const mockRemoveCurrency = () => {
    return "mock"
  }
  const mockCurrencyName = "Indonesian Rupiah"

  ReactDOM.render(<CurrencyBox currency={mockCurrency} rate={mockRate} inputMoney={mockInputMoney} removeCurrency={mockRemoveCurrency} currencyName={mockCurrencyName} />, div)
})