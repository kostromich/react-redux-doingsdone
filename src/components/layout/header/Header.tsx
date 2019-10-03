import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import HeaderSide from './HeaderSide'
import SignInButton from 'components/buttons/SignInButton'
import useHeaderSideItem from 'hooks/useHeaderSideItemStyles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0 26px'
  }
})

const Header: React.FC = () => {
  const classes = useStyles({})
  const useHeaderSideItemClasses = useHeaderSideItem({})

  return (
    <header className={classes.root}>
      <Link to='/' >
        <img src='img/logo.png' width='153' height='42' alt='Логотип Дела в порядке' />
      </Link>
      <HeaderSide>
        <SignInButton className={useHeaderSideItemClasses.root} />
      </HeaderSide>
    </header>
  )
}

export default Header
