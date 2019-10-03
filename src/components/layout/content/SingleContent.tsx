import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import useContentCommonStyles from 'hooks/useContentCommonStyles'

const useStyles = makeStyles({
  root: {},
  mainContent: {
    flexGrow: 1,
    padding: '0 30px 0 27px'
  }
})

const SingleContent: React.FC = ({ children }) => {
  const classes = useStyles({})
  const contentCommonClasses = useContentCommonStyles({})

  return (
    <div className={cx(contentCommonClasses.root, classes.root)}>
      {children}
    </div>
  )
}

export default SingleContent
