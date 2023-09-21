import './hamburger.scss'
import { Link } from 'react-router-dom'

const Hamburger = () => {
  return (
    <div className='hamburger'>
      <div className="circle"></div>
      <div className="exit">
        <Link to='/'>
        <span>X</span>
        </Link>
      </div>
      <div className="items">
        <Link to='/'>
        <div>_hello</div>
        </Link>
        <Link to='/about'>
        <div>_about-me</div>
        </Link>
        <Link to='/projects'>
        <div>_projects</div>
        </Link>
        <Link to='/contact'>
        <div>_contact-me</div>
        </Link>
      </div>
    </div>
  )
}

export default Hamburger