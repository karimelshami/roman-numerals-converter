import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import TranslatorContainer from 'Containers/TranslatorContainer'
import { theme } from './MainContainer.theme'

const MainContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <TranslatorContainer />
    </ThemeProvider>
  )
}
export default MainContainer
