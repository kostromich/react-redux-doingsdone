import React from 'react'
import SocialLink from 'components/social/SocialLink'
import { ReactComponent as Icon } from './icons/instagram.svg'

const SOCIAL_NAME = 'Instagram'

const InstagramLink: React.FC = () => (
  <SocialLink
    text={SOCIAL_NAME}
    icon={<Icon />}
  />
)

export default InstagramLink
