import React, { useEffect, useState } from 'react';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import './ConverterBox.css';

import AddCurrencyBox from '../AddCurrencyBox/AddCurrencyBox';
import CurrencyBox from '../CurrencyBox/CurrencyBox';

import { getBaseCurrencies, getEURToUSD, getSpecificCurrency, getCurrencyNames } from '../../api';


function ConverterBox() {

  const [inputMoney, setInputMoney] = useState(10)
  const [usdInEuro, setUsdInEuro] = useState(0)
  const [currencyNames, setCurrencyNames] = useState({})
  const [convertedMoney, setConvertedMoney] = useState({})
  const [currencies, setCurrencies] = useState({})
  const [availableCurrencies, setAvailableCurrencies] = useState(["CAD", "CHF", "INR", "MYR", "JPY", "KRW"])

  useEffect(async () => {
    const EURtoUSD = await getEURToUSD();
    const baseUSD = EURtoUSD.rates.USD

    setUsdInEuro(1/baseUSD)

    const baseCurrencies = await getBaseCurrencies();

    for (const currency of Object.keys(baseCurrencies.rates)) {
      baseCurrencies.rates[currency] = (baseCurrencies.rates[currency] * (1/baseUSD)).toFixed(2)
    }
    setCurrencies({...baseCurrencies.rates})

    const baseCurrencyNames = await getCurrencyNames()
    setCurrencyNames(baseCurrencyNames.symbols)

  }, []);

  const removeCurrency = (currency) => {
    const tempCurrencies = {...currencies}
    const tempAvailableCurrencies = [...availableCurrencies]

    delete tempCurrencies[currency]
    tempAvailableCurrencies.push(currency)

    setCurrencies(tempCurrencies);
    setAvailableCurrencies(tempAvailableCurrencies);
    
  }

  const addCurrency = async (currency) => {
    if (currency == ""){
      alert("Please select a currency")
      return
    }

    const tempCurrencies = {...currencies}

    const newAvailableCurrencies = availableCurrencies.filter(function(element){ 
      return element != currency; 
    });
    
    const specificCurrency = await getSpecificCurrency(currency);
    const convertedSpecificCurrency = (specificCurrency.rates[currency] * (1/usdInEuro)).toFixed(2)

    tempCurrencies[currency] = convertedSpecificCurrency 

    setCurrencies(tempCurrencies);
    setAvailableCurrencies(newAvailableCurrencies);
    
  }

  return (
    <div className="converter-box">
      <h3 className="converter-title">Convert</h3>
      <p className="converter-subtitle">Convert currencies in no time</p>
      <div className="converter-icon">
        <KeyboardArrowDownIcon className="converter-arrow-icon"/>
      </div>
      <div className="converter-input-div">
        <input className="converter-input" type="number" value={inputMoney} onChange={(ev) => setInputMoney(ev.target.value)} name="" id="" placeholder="Enter a value to convert"/>
        <span className="converter-default-currency">$USD</span>
      </div>

      <div className="converter-currency">
        {Object.keys(currencies).map((key) => {
          return <CurrencyBox key={key} currencyName={currencyNames[key]} currency={key} rate={currencies[key]} inputMoney={inputMoney} removeCurrency={() => removeCurrency(key)}/>
        })}
      </div>
      <AddCurrencyBox availableCurrencies={availableCurrencies} addCurrency={(currency) => addCurrency(currency)}/>
    </div>
  )
}

export default ConverterBox