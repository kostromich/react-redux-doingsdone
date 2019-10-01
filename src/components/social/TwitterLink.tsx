import React from 'react'
import SocialLink from 'components/social/SocialLink'
import { ReactComponent as Icon } from './icons/twitter.svg'

const SOCIAL_NAME = 'Twitter'

const TwitterLink: React.FC = () => (
  <SocialLink
    text={SOCIAL_NAME}
    icon={<Icon />}
  />
)

export default TwitterLink
