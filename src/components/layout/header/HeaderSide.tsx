import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 22
  }
})

export interface IHeaderSideProps {
  headerSideContent: React.ReactNode
}

const HeaderSide: React.FC<IHeaderSideProps> = ({ headerSideContent }) => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      {headerSideContent}
    </div>
  )
}

export default HeaderSide
