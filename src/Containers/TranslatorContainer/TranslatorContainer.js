import React, { useState } from 'react'
import InputCard from 'Componants/InputCard'
import OutputCard from 'Componants/OutputCard'
import Header from 'Componants/Header'
import Dialog from 'Componants/Dialog'
import Tabs from 'Componants/Tabs'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

import { breakNumber } from 'Helpers'
import { useStyles } from './TranslatorContainer.styles'
import EnglishToRomanDictionary from 'Constants/englishToRoman'
import RomanToEnglishDictionary from 'Constants/romanToEnglish'
import {
  intialState,
  tabs,
  regax,
  helperText
} from './TranslatorContainer.constants'
import { Typography } from '@material-ui/core'

const TranslatorContainer = () => {
  const [number, setNumber] = useState(intialState.number)
  const [selectedTab, setSelectedTab] = useState(intialState.selectedTab)
  const [error, setError] = useState(intialState.error)
  const [dialogState, setDialogState] = useState(false)
  const classes = useStyles()

  const {
    englishNumber,
    romanNumber,
    convertedEnglishNumber,
    convertedRomanNumber
  } = number

  const handleTabSelect = key => {
    if (selectedTab === key) return
    setSelectedTab(key)
    resetState()
  }

  const resetState = () => {
    setNumber(intialState.number)
    setError(intialState.error)
  }

  const handleInputChange = (value, type) => {
    if (type === 'englishToRoman') {
      setNumber({ ...number, englishNumber: value.toString() })
      setError({ value: false, msg: helperText.englishToRomanRules })
    }
    if (type === 'romanToEnglish') {
      setNumber({ ...number, romanNumber: value.toString().toUpperCase() })
      setError({ value: false, msg: helperText.romanToEnglishRules })
    }
  }

  const convert = () => {
    if (selectedTab === 0) return validateInput('toRoman')
    if (selectedTab === 1) return validateInput('toEnglish')
  }

  const validateInput = type => {
    if (type === 'toRoman') {
      let parsedEnglishNumber = parseInt(englishNumber)
      if (englishNumber === '') {
        return setError({ value: true, msg: helperText.empty })
      } else if (0 > parsedEnglishNumber || parsedEnglishNumber > 4000) {
        return setError({ value: true, msg: helperText.englishToRomanRules })
      }
      return toRoman()
    }
    if (type === 'toEnglish') {
      if (romanNumber === '')
        return setError({ value: true, msg: helperText.empty })
      if (!regax.roman.test(romanNumber))
        return setError({ value: true, msg: helperText.romanToEnglishRules })
    }
    return toEnglish()
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
          error={error.value}
          placeholderText="Type numbers"
          helperText={error.msg ? error.msg : helperText.englishToRomanRules}
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
          error={error.value}
          type="text"
          placeholderText="Type roman numbers"
          helperText={error.msg ? error.msg : helperText.romanToEnglishRules}
          value={convertedRomanNumber}
          handleChange={event =>
            handleInputChange(event.target.value, 'romanToEnglish')
          }
        />
      )
    }
  }

  const toggleDialogState = () => setDialogState(!dialogState)

  return (
    <>
      <Header
        buttonText="Learn more"
        buttonAction={() => toggleDialogState()}
      />
      <Paper className={classes.root}>
        <Tabs
          handleChange={key => handleTabSelect(key)}
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
          color="secondary"
          fullWidth
          data-testid="convert-button"

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
      <Dialog
        open={dialogState}
        content={<Typography paragraph>{helperText.learnMore}</Typography>}
        handleClose={() => toggleDialogState()}
      />
    </>
  )
}
export default TranslatorContainer
