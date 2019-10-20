import React from 'react'
import { Link } from 'react-router-dom'

const ProjectLogo: React.FC = () => {
  return (
    <Link to='/' >
      <img src='img/logo.png' width='153' height='42' alt='Логотип Дела в порядке' />
    </Link>
  )
}

export default ProjectLogo
