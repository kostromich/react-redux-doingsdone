import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { openSans, openSansBold } from 'theme/typography'

const createTheme = () => createMuiTheme({
  palette: {
    background: {
      default: 'transparent'
    }
  },
  typography: {
    fontSize: 16,
    fontFamily: [
      'OpenSans',
      'sans-serif'
    ].join(','),
    allVariants: {
      lineHeight: 1.15
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [openSans, openSansBold]
      }
    }

  }
})

export default createTheme
