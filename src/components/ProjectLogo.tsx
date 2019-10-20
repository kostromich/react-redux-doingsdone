import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_HOME_PAGE } from 'routes'

const ProjectLogo: React.FC = () => {
  return (
    <Link to={ROUTE_HOME_PAGE} >
      <img
        src='img/logo.png'
        width='153'
        height='42'
        alt='Логотип Дела в порядке'
      />
    </Link>
  )
}

export default ProjectLogo
