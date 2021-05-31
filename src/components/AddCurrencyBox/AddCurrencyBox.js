import React, { useState } from 'react'

import './AddCurrencyBox.css'

function AddCurrencyBox({ availableCurrencies, addCurrency }) {

  const [selectedCurrency, setSelectedCurrency] = useState("")

  return (
    <div className="add-currency-box">
      <select className="add-currency-input" defaultValue={'DEFAULT'} onChange={(ev) => setSelectedCurrency(ev.target.value)}>
        <option disabled value="DEFAULT">
          Choose a currency to add
        </option>
        {availableCurrencies.map((currency) => {
          return <option key={currency} value={currency}>{currency}</option>
        })}
      </select>
      <button type="button" className="add-currrency-button" onClick={() => addCurrency(selectedCurrency)}>Add</button>
    </div>
  )
}

export default AddCurrencyBox
