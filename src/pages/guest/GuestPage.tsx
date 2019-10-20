import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Layout from 'components/layout/Layout'
import Content from 'components/layout/content/Content'
import HeaderSideItem from 'components/layout/header/HeaderSideItem'
import SignInButton from 'components/buttons/SignInButton'
import HeaderSide from '../../components/layout/header/HeaderSide'
import Welcome from './Welcome'

const useStyles = makeStyles({
  body: {
    background: '#ffffff url(img/background.jpg) no-repeat 0 0',
    backgroundSize: 'cover'
  }
})

const GuestPage: React.FC = () => {
  const classes = useStyles()

  return (
    <Layout
      bodyClassName={classes.body}
      headerContent={<HeaderSide><HeaderSideItem>
        <SignInButton variant='transparent' />
      </HeaderSideItem></HeaderSide>}
      content={<Content><Welcome /></Content>}
    />
  )
}

export default GuestPage
