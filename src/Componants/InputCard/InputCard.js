import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { useStyles } from './InputCard.style'

const InputCard = props => {
  const classes = useStyles()
  const {
    helperText,
    handleChange,
    value,
    placeholderText,
    type,
    output
  } = props

  return (
    <Card>
      <CardContent>
        <TextField
          disabled={output}
          type={type}
          fullWidth
          placeholder={placeholderText}
          value={output && value}
          onChange={handleChange}
          helperText={<Typography>{helperText}</Typography>}
        />
      </CardContent>
    </Card>
  )
}
export default InputCard
