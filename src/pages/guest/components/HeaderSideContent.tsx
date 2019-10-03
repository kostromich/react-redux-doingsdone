import React from 'react'
import useHeaderSideItemStyles from 'hooks/useHeaderSideItemStyles'
import SignIn from 'components/auth/SignIn'

const HeaderSideContent: React.FC = () => {
  const headerSideItemClasses = useHeaderSideItemStyles({})

  return (
    <SignIn className={headerSideItemClasses.root} />
  )
}

export default HeaderSideContent
