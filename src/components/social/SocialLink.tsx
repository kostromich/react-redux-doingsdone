import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import useHiddenContentStyles from 'hooks/useHiddenContentStyles'
import { Link } from 'react-router-dom'
import { DEFAULT_HREF } from 'helpers'

const useStyles = makeStyles({
  root: {
    width: 27,
    height: 27,
    '&:hover path': {
      fill: '#7e55f2'
    },
    '&:hover circle': {
      stroke: '#7e55f2'
    },
    '&:active path': {
      fill: '#7e55f2'
    },
    '&:active circle': {
      stroke: '#7e55f2'
    }
  }
})

interface IOwnProps {
  className?: string
  text: string
  icon: React.ReactNode
  href?: string
}

const SocialLink: React.FC<IOwnProps> = ({
  className,
  text,
  icon,
  href = DEFAULT_HREF
}) => {
  const classes = useStyles({})
  const hiddenContentClasses = useHiddenContentStyles({})

  return (
    <Link
      className={cx(classes.root, className)}
      to={href}
    >
      <span className={hiddenContentClasses.root}>
        {text}
      </span>
      {icon}
    </Link>
  )
}

export default SocialLink
