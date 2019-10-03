import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import useHeaderSideItem from 'hooks/useHeaderSideItemStyles'
import SignInButton from 'components/buttons/SignInButton'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 22
  }
})

const HeaderSide: React.FC = () => {
  const classes = useStyles({})

  const useHeaderSideItemClasses = useHeaderSideItem({})

  return (
    <div className={classes.root}>
      <SignInButton className={useHeaderSideItemClasses.root} />
    </div>
  )
}

export default HeaderSide
