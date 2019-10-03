import withStyles from '@material-ui/core/styles/withStyles'

const withGlobalStyles = withStyles({
  '@global': {
    '*': {
      boxSizing: 'content-box'
    },
    html: {
      height: '100%',
      lineHeight: 1.15
    },
    body: {
      height: '100%'
    },
    '#root': {
      height: '100%',
      overflow: 'auto'
    },
    'button, input, optgroup, select, textarea, optgroup': {
      fontFamily: 'sans-serif',
      fontSize: '100%',
      lineHeight: 1.15,
      margin: 0
    }
  }
})

export default withGlobalStyles(() => null)
