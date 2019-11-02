import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import SidebarHeader from './SidebarHeader'
import SidebarInfo from './SidebarInfo'

const useStyles = makeStyles({
  root: {
    width: 260
  }
})

interface IOwnProps {
  header?: string
  info?: string
  content: React.ReactNode
}

const Sidebar: React.FC<IOwnProps> = ({ header, info, content }) => {
  const classes = useStyles({})

  return (
    <section className={classes.root}>
      {header &&
      <SidebarHeader>
        {header}
      </SidebarHeader>
      }
      {info &&
        <SidebarInfo>
          {info}
        </SidebarInfo>
      }
      {content}
    </section>
  )
}

export default Sidebar
