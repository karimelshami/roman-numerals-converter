import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const OutputCard = props => {
  const { output } = props
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {`The result is ${output}`}
        </Typography>
      </CardContent>
    </Card>
  )
}

OutputCard.propTypes = {
  output: PropTypes.string
}
export default OutputCard
