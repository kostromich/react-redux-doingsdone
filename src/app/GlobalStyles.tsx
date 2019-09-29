import withStyles from '@material-ui/core/styles/withStyles'

const withGlobalStyles = withStyles({
  '@global': {
    html: {
      height: '100%',
      lineHeight: 1.15
    },
    body: {
      height: '100%',
      overflow: 'hidden'
    },
    '#root': {
      height: '100%',
      position: 'relative'
    }
  }
})

export default withGlobalStyles(() => null)
