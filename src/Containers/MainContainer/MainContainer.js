import React, { useState } from 'react'
import EnglishToRomanDictionary from 'Constants/englishToRoman'
import RomanToEnglishDictionary from 'Constants/romanToEnglish'

const MainContainer = () => {
  const [romanNumber, setRomanNumber] = useState('')
  const [englishNumber, setEnglishNumber] = useState('')
  const [convertedRomanNumber, setConvertedRomanNumber] = useState('')
  const [convertedEnglishNumber, setConvertedEnglishNumber] = useState('')
  const handleInputChange = (value, type) => {
    if ((type = 'englishToRoman')) setEnglishNumber(value.toString())
    if ((type = 'romanToEnglish')) setRomanNumber(value.toString())
  }
  const breakNumber = (number, length, place) =>
    number * Math.pow(10, length - place - 1)

  const toRoman = () => {
    let tempRomanNumber = ''
    let length = englishNumber.length
    for (let i = 0; i < length; i++) {
      if (englishNumber[i] != 0) {
        tempRomanNumber = tempRomanNumber.concat(
          EnglishToRomanDictionary[breakNumber(englishNumber[i], length, i)]
        )
      }
    }
    setConvertedRomanNumber(tempRomanNumber)
  }
  const toEnglish = () => {
    let tempEnglishNumber = 0
    let length = romanNumber.length
    for (let i = 0; i < length; i++) {
      if (RomanToEnglishDictionary[romanNumber[i]]) {
        tempEnglishNumber =
          parseInt(RomanToEnglishDictionary[romanNumber[i]]) + tempEnglishNumber
      }
    }
    setConvertedEnglishNumber(tempEnglishNumber)
  }

  return (
    <>
      <div>
        <span>convert from english to roman </span>
        <input
          type="text"
          onChange={event =>
            handleInputChange(event.target.value, 'englishToRoman')
          }
        />
        <button onClick={() => toRoman()}>convert</button>
        <span>The number is {convertedRomanNumber}</span>
      </div>
      <br />
      <div>
        <span>convert from roman to english </span>
        <input
          type="text"
          onChange={event =>
            handleInputChange(event.target.value, 'romanToEnglish')
          }
        />
        <button onClick={() => toEnglish()}>convert</button>
        <span>The number is {convertedEnglishNumber}</span>
      </div>
    </>
  )
}
export default MainContainer
