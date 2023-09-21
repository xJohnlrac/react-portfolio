import './home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className="userInfo">
          <span className='greeting'>Hi all, I am</span>
          <span className='name'>John Carl Abucay</span>
          <span className='position'>&gt; Front-end Developer</span>
          <div className="desc">
              <span>// Dedicated front-end developer with a passion for web crafting</span>
              <span>// Transforming concepts into web experiences</span>
          </div>
            <p><span className='const'>const </span>
            <span className='variable'>githubLink = </span>
            <Link to='https://github.com/xJohnlrac' target='_blank'>
             <span className='link'>"https://github.com/xJohnlrac"</span>
            </Link>
            </p>
          <div className="stack">
            <span>Tech Stack</span>
            <img src="/html.png" alt="" />
            <img src="/css.png" alt="" />
            <img src="/javascript.png" alt="" />
            <img src="/tailwind.png" alt="" />
            <img src="sass.png" alt="" />
            <img src="react.png" alt="" />
            <img src="c.png" alt="" />
          </div>
      </div>
      <div className="userProfile">
        <div className="circle"></div>
          <img src="/computer.png" alt="" />
      </div>
    </div>
  )
}

export default Home