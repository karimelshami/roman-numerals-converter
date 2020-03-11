import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import InputCard from 'Componants/InputCard'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CompareArrowsIcon from '@material-ui/icons/CompareArrows'
import EnglishToRomanDictionary from 'Constants/englishToRoman'
import RomanToEnglishDictionary from 'Constants/romanToEnglish'

const TranslatorContainer = () => {
  const [romanNumber, setRomanNumber] = useState('')
  const [englishNumber, setEnglishNumber] = useState('')
  const [convertedRomanNumber, setConvertedRomanNumber] = useState('')
  const [convertedEnglishNumber, setConvertedEnglishNumber] = useState('')
  const handleInputChange = (value, type) => {
    if ((type = 'englishToRoman')) setEnglishNumber(value.toString())
    if ((type = 'romanToEnglish')) setRomanNumber(value.toString())
    console.log(type, '---------type---------', value, '---------value-------')
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
    <Paper>
      {/* <div>
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
      </div> */}
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <InputCard
            type="number"
            placeholderText="Type numbers"
            helperText="You should only type numbers"
            input
            value={convertedEnglishNumber}
            handleChange={event =>
              handleInputChange(event.target.value, 'englishToRoman')
            }
          />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={5}>
          <InputCard
            type="text"
            placeholderText="Type roman numbers"
            helperText="You should only type roman numbers"
            output
            value={convertedRomanNumber}
            handleChange={event =>
              handleInputChange(event.target.value, 'romanToEnglish')
            }
          />
        </Grid>
      </Grid>
      <Button
        onClick={() => toRoman()}
        variant="contained"
        color="primary"
        fullWidth
      >
        Convert
      </Button>
    </Paper>
  )
}
export default TranslatorContainer
