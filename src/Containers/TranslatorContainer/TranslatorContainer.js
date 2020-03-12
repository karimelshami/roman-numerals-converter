import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import InputCard from 'Componants/InputCard'
import OutputCard from 'Componants/OutputCard'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CompareArrowsIcon from '@material-ui/icons/CompareArrows'
import Tabs from 'Componants/Tabs'
import EnglishToRomanDictionary from 'Constants/englishToRoman'
import RomanToEnglishDictionary from 'Constants/romanToEnglish'

const tabs = [
  { label: 'English to Roman', key: 0 },
  { label: 'Roman to English', key: 1 }
]
const TranslatorContainer = () => {
  const [romanNumber, setRomanNumber] = useState('')
  const [englishNumber, setEnglishNumber] = useState('')
  const [convertedRomanNumber, setConvertedRomanNumber] = useState('')
  const [convertedEnglishNumber, setConvertedEnglishNumber] = useState('')
  const [selectedTab, setSelectedTab] = useState(0)

  const handleTabSelect = () => {
    if (selectedTab === 0) setSelectedTab(1)
    if (selectedTab === 1) setSelectedTab(0)
  }
  const handleInputChange = (value, type) => {
    if ((type = 'englishToRoman')) setEnglishNumber(value.toString())
    if ((type = 'romanToEnglish')) setRomanNumber(value.toString())
  }
  const breakNumber = (number, length, place) =>
    number * Math.pow(10, length - place - 1)

  const convert = () => {
    if (selectedTab === 0) toRoman()
    if (selectedTab === 1) toEnglish()
  }

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
        Convert
        {selectedTab === 0 ? ' to roman numerals' : 'to english numerals'}
      </Button>
      <OutputCard
        output={
          selectedTab === 0 ? convertedRomanNumber : convertedEnglishNumber
        }
      />
    </Paper>
  )
}
export default TranslatorContainer
