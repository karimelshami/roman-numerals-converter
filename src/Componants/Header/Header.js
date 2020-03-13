import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const Header = props => {
  const { buttonAction, buttonText } = props

  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          onClick={() => buttonAction()}
          color="secondary"
          variant="contained"
        >
          {buttonText}
        </Button>
      </Toolbar>
    </AppBar>
  )
}
Header.propTypes = {
  buttonText: PropTypes.string,
  buttonAction: PropTypes.func
}

export default Header
