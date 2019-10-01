import React from 'react'
import SocialLink from 'components/social/SocialLink'
import { ReactComponent as Icon } from './icons/vkontakte.svg'

const SOCIAL_NAME = 'Вконтакте'

const VkontakteLink: React.FC = () => (
  <SocialLink
    text={SOCIAL_NAME}
    icon={<Icon />}
  />
)

export default VkontakteLink
