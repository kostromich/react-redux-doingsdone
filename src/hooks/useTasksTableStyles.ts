import makeStyles from '@material-ui/core/styles/makeStyles'
import { CSSProperties } from '@material-ui/styles'

const useTasksTableStyles = makeStyles({
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  tr: {
    '&:first-child $td': {
      borderTop: '1px solid #d7dbe8'
    }
  },
  td: {
    padding: '20px 0',
    borderBottom: '1px solid #d7dbe8'
  }
})

export default useTasksTableStyles
