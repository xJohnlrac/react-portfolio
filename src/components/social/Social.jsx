import './social.scss'
import { Link } from 'react-router-dom'

const Social = () => {
  return (
    <div className='social'>
      <img src="/social-app.png" alt="" />
      <div className="info">
      <span>Social App: My dynamic social platform project demonstrates my app development and user engagement skills.</span>
      <Link to='https://scintillating-medovik-8ab387.netlify.app' target='_blank'>
      <button>view-project</button>
      </Link>
      <img src="/react.png" alt="" className='react'/>
      <img src="/sass.png" alt="" className='sass'/>
      </div>
    </div>
  )
}

export default Social