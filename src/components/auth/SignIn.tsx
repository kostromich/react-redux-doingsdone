import React from 'react'
import useHeaderSideItem from 'hooks/useHeaderSideItemStyles'
import SignInButton from 'components/buttons/SignInButton'

interface IOwnProps {
  className?: string
}

const SignIn: React.FC<IOwnProps> = ({ className }) => {
  const useHeaderSideItemClasses = useHeaderSideItem({})

  return (
    <div className={className}>
      <SignInButton className={useHeaderSideItemClasses.root} />
    </div>
  )
}

export default SignIn
