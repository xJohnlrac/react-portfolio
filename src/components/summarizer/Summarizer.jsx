import './summarizer.scss'
import { Link } from 'react-router-dom'

const Summarizer = () => {
  return (
    <div className='summarizer'>
      <img src="/summarizer.png" alt="" />
      <div className="info">
      <span>AI Article Summarizer: Showcase of my innovative AI tool, transforming long articles into concise summaries through machine learning.</span>
      <Link to='https://timely-kangaroo-589753.netlify.app' target='_blank'>
      <button>view-project</button>
      </Link>
      <img src="/react.png" alt="" className='react'/>
      <img src="/tailwind.png" alt="" className='tailwind'/>
      </div>
    </div>
  )
}

export default Summarizer