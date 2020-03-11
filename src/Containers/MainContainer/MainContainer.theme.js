import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0070cd'
    },
    secondary: {
      main: '#ffffff'
    },
    disabled: {
      main: '#bdbdbd'
    },
    danger: {
      main: '#ff0000'
    },
    gery: {
      main: '#f3f3f3'
    }
  }
})

theme.spacing(5)
