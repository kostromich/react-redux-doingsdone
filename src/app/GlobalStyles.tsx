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
    }
  }
})

export default withGlobalStyles(() => null)
