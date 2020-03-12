import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './OutputCard.style'

const OutputCard = props => {
  const { input, output } = props
  const classes = useStyles()

  return (
    <Card>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {`The result is ${output}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default OutputCard
