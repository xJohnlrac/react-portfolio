import { Link } from 'react-router-dom'
import './navBar.scss'

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="rightInfo">
        <div className="logo">
          <img src="/abukiks.ico" alt="" />
          <Link to='/'>
          <span>abuKiks.dev</span>
          </Link>
        </div>
        <div className="sections">
          <Link to='/'>
          <div>_hello</div>
          </Link>
          <Link to='/about'>
          <div>_about-me</div>
          </Link>
          <Link to='/projects'>
          <div>_projects</div>
          </Link>
        </div>
      </div>
      <div className="leftInfo">
        <Link to='/contact'>
        <div>_contact-me</div>
        </Link>
        <Link to='/hamburger'>
        <div className="hamburger">
          &#9776;
        </div>
        </Link>
      </div>
    </div>
  )
}

export default NavBar