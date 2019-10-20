import React from 'react'
import useHiddenContentStyles from 'hooks/useHiddenContentStyles'
import { Link } from 'react-router-dom'

const Developed: React.FC = () => {
  const hiddenContentClasses = useHiddenContentStyles({})

  return (
    <div>
      <span className={hiddenContentClasses.hiddenTag}>Разработано:</span>

      <Link to='https://htmlacademy.ru/intensive/php'>
        <img src='img/htmlacademy.svg' alt='HTML Academy' width='118' height='40' />
      </Link>
    </div>
  )
}

export default Developed
