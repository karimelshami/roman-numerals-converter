import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'Routes'
import { theme } from './MainContainer.theme'

const MainContainer = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Router>
  )
}
export default MainContainer
