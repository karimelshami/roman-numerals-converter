import React, { useState } from 'react'
import InputCard from 'Componants/InputCard'
import OutputCard from 'Componants/OutputCard'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Tabs from 'Componants/Tabs'
import { breakNumber } from 'Helpers'
import Paper from '@material-ui/core/Paper'
import EnglishToRomanDictionary from 'Constants/englishToRoman'
import RomanToEnglishDictionary from 'Constants/romanToEnglish'

const tabs = [
  { label: 'English to Roman', key: 0 },
  { label: 'Roman to English', key: 1 }
]
const TranslatorContainer = () => {
  const [number, setNumber] = useState({
    englishNumber: '',
    romanNumber: '',
    convertedEnglishNumber: '',
    convertedRomanNumber: ''
  })
  const {
    englishNumber,
    romanNumber,
    convertedEnglishNumber,
    convertedRomanNumber
  } = number

  const [selectedTab, setSelectedTab] = useState(0)

  const handleTabSelect = () => {
    if (selectedTab === 0) setSelectedTab(1)
    if (selectedTab === 1) setSelectedTab(0)
  }

  const handleInputChange = (value, type) => {
    if ((type === 'englishToRoman')) {
      setNumber({ ...number, englishNumber: value.toString() })
    }
    if ((type === 'romanToEnglish')) {
      setNumber({ ...number, romanNumber: value.toString() })
    }
  }

  const convert = () => {
    if (selectedTab === 0) toRoman()
    if (selectedTab === 1) toEnglish()
  }

  const toRoman = () => {
    let englishNumberArray = englishNumber.split('')
    let length = englishNumberArray.length
    let current
    let currentValue
    let total = ''
    for (let i = 0; i < length; i++) {
      current = englishNumber[i]
      currentValue =
        EnglishToRomanDictionary[breakNumber(englishNumber[i], length, i)]
      if (current != 0) {
        total = total.concat(currentValue)
      }
    }
    setNumber({ ...number, convertedRomanNumber: total })
  }
  const toEnglish = () => {
    let romanNumberArray = romanNumber.split('')
    let length = romanNumberArray.length
    let current
    let currentValue
    let next
    let nextValue
    let total = 0
    for (let i = 0; i < length; i++) {
      current = romanNumberArray[i]
      currentValue = RomanToEnglishDictionary[current]
      next = romanNumberArray[i + 1]
      nextValue = RomanToEnglishDictionary[next]
      if (currentValue < nextValue) {
        total -= currentValue
      } else {
        total += currentValue
      }
    }
    setNumber({ ...number, convertedEnglishNumber: total })
  }

  const renderEnglishToRomanCard = () => {
    if (selectedTab === 0) {
      return (
        <InputCard
          type="number"
          placeholderText="Type numbers"
          helperText="You should only type numbers"
          value={convertedEnglishNumber}
          handleChange={event =>
            handleInputChange(event.target.value, 'englishToRoman')
          }
        />
      )
    }
  }

  const renderRomanToEnglishCard = () => {
    if (selectedTab === 1) {
      return (
        <InputCard
          type="text"
          placeholderText="Type roman numbers"
          helperText="You should only type roman numbers"
          value={convertedRomanNumber}
          handleChange={event =>
            handleInputChange(event.target.value, 'romanToEnglish')
          }
        />
      )
    }
  }

  return (
    <Paper>
      <Tabs
        handleChange={() => handleTabSelect()}
        tabs={tabs}
        value={selectedTab}
      />
      <Grid container>
        <Grid item xs={12}>
          {renderEnglishToRomanCard()}
          {renderRomanToEnglishCard()}
        </Grid>
      </Grid>
      <Button
        onClick={() => convert()}
        variant="contained"
        color="primary"
        fullWidth
      >
        {`Convert ${
          selectedTab === 0 ? ' to roman numerals' : 'to english numerals'
        }`}
      </Button>
      <OutputCard
        output={
          selectedTab === 0 && convertedRomanNumber
            ? convertedRomanNumber
            : selectedTab === 1 && convertedEnglishNumber
            ? convertedEnglishNumber
            : '...'
        }
      />
    </Paper>
  )
}
export default TranslatorContainer
