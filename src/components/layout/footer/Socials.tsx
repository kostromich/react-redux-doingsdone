import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import useHiddenContentStyles from 'hooks/useHiddenContentStyles'
import FacebookLink from 'components/social/FacebookLink'
import TwitterLink from 'components/social/TwitterLink'
import InstagramLink from 'components/social/InstagramLink'
import VkontakteLink from 'components/social/VkontakteLink'

const useStyles = makeStyles({
  root: {
    width: 140,
    marginRight: 184,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: 'auto'
  }
})

const Socials: React.FC = () => {
  const classes = useStyles({})
  const hiddenContentClasses = useHiddenContentStyles({})

  return (
    <div className={classes.root}>
      <span className={hiddenContentClasses.hiddenTag}>Мы в соцсетях:</span>
      <FacebookLink />
      <span className={hiddenContentClasses.hiddenTag}>,</span>
      <TwitterLink />
      <span className={hiddenContentClasses.hiddenTag}>,</span>
      <InstagramLink />
      <span className={hiddenContentClasses.hiddenTag}>,</span>
      <VkontakteLink />
    </div>
  )
}

export default Socials
