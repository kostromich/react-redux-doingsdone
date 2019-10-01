import React from 'react'
import SocialLink from 'components/social/SocialLink'
import { ReactComponent as Icon } from './icons/facebook.svg'

const SOCIAL_NAME = 'Facebook'

const FacebookLink: React.FC = () => (
  <SocialLink
    text={SOCIAL_NAME}
    icon={<Icon />}
  />
)

export default FacebookLink
