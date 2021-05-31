import React from 'react'
import ReactDOM from 'react-dom'
import ConverterBox from "./ConverterBox"

it("renders ConverterBox component without crashing", () => {
  const div = document.createElement("div")

  ReactDOM.render(<ConverterBox />, div)
})