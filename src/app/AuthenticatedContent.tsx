import React from 'react'
import { useSelector } from 'react-redux'
import { getUser } from 'selectors'

interface IOwnProps {
  ContentPage: React.ComponentType
  ErrorPage: React.ComponentType
}
const AuthenticatedContent: React.FC<IOwnProps> = ({
  ContentPage,
  ErrorPage,
  ...props
}) => {
  const user = useSelector(getUser)

  if (!user) {
    return (
      <ErrorPage />
    )
  }

  return (
    <ContentPage {...props} />
  )
}

export default AuthenticatedContent
