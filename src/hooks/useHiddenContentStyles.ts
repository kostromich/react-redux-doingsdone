import makeStyles from '@material-ui/core/styles/makeStyles'
import { CSSProperties } from '@material-ui/styles'

export const hiddenContentStyles: CSSProperties = {
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

const useHiddenContentStyles = makeStyles({
  any: {
    '&:not(:focus):not(:active), &input': hiddenContentStyles
  },
  input: hiddenContentStyles
})

export default useHiddenContentStyles
