import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

const InputCard = props => {
  const { helperText, handleChange, placeholderText, type, error } = props

  return (
    <Card>
      <CardContent>
        <TextField
          type={type}
          fullWidth
          placeholder={placeholderText}
          error={error}
          onChange={handleChange}
          helperText={<Typography>{helperText}</Typography>}
        />
      </CardContent>
    </Card>
  )
}
InputCard.propTypes = {
  handleChange: PropTypes.func,
  placeholderText: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  type: PropTypes.string
}
export default InputCard
