import makeStyles from '@material-ui/core/styles/makeStyles'

const useHiddenContentStyles = makeStyles({
  root: {
    '&:not(:focus):not(:active)': {
      position: 'absolute',
      width: 1,
      height: 1,
      margin: -1,
      border: 0,
      padding: 0,
      whiteSpace: 'nowrap',
      clipPath: 'inset(100%)',
      clip: 'rect(0 0 0 0)',
      overflow: 'hidden'
    }
  }
})

export default useHiddenContentStyles
