import React from 'react'

import './CurrencyBox.css'

function CurrencyBox({ currency, rate, inputMoney, removeCurrency, currencyName }) {
  return (
    <div className="currency">
      <div className="currency-box">
        <span className="currency-detail">{currencyName} - {currency}</span>
        <div className="currency-value">
          <span>{currency}</span>
          <span>{(inputMoney*rate).toFixed(2)}</span>
        </div>
        <span className="currency-default">1 USD = {rate} {currency}</span>
      </div>
      <div className="currency-remove" onClick={() => removeCurrency()}>
        <div className="currency-strip">
          -
        </div>
      </div>
    </div>
  )
}

export default CurrencyBox
