import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import HeaderSide, { IHeaderSideProps } from './HeaderSide'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0 26px'
  }
})

export interface IHeaderProps extends IHeaderSideProps {}

const Header: React.FC<IHeaderProps> = (headerSideProps) => {
  const classes = useStyles({})

  return (
    <header className={classes.root}>
      <Link to='/' >
        <img src='img/logo.png' width='153' height='42' alt='Логотип Дела в порядке' />
      </Link>
      <HeaderSide {...headerSideProps} />
    </header>
  )
}

export default Header
