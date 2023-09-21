import './footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="socialInfo">
        <span>find me in:</span>
        <Link to='https://www.facebook.com/profile.php?id=100040536132634' target='_blank'>
         <img src="/facebook.png" alt="" />
        </Link>
        <Link to='https://twitter.com/' target='_blank'>
         <img src="twitter.png" alt="" />
        </Link>
      </div>
      <div className="userInfo">
        <span>@AbuKiks</span>
        <Link to='https://github.com/xJohnlrac' target='_blank'>
        <img src="/github.png" alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Footer