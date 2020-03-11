import React, { useState } from 'react'
import EnglishToRomanDictionary from 'Constants/englishToRoman'
import RomanToEnglishDictionary from 'Constants/romanToEnglish'

const MainContainer = () => {
  const [romanNumber, setRomanNumber] = useState('I')
  const [englishNumber, setEnglishNumber] = useState(0)
  const handleInputChange = (value, type) => {
    if ((type = 'englishToRoman')) setEnglishNumber(value)
    if ((type = 'romanToEnglish')) setRomanNumber(value)
  }
  const breakNumber = (number, length, place) =>
    number * Math.pow(10, length - place - 1)

  const toRoman = () => {
    let romanNumber = ''
    let length = englishNumber.toString().length
    for (let i = 0; i < length; i++) {
      if (englishNumber[i] != 0) {
        romanNumber = romanNumber.concat(
          EnglishToRomanDictionary[breakNumber(englishNumber[i], length, i)]
        )
      }
    }
    setRomanNumber(romanNumber)
  }
  const toEnglish = () => {
    console.log('bewbewbew')
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
        <span>The number is {romanNumber}</span>
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
        <span>The number is {englishNumber}</span>
      </div>
    </>
  )
}
export default MainContainer
