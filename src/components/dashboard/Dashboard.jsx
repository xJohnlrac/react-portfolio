import './dashboard.scss'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <img src="/dashboard.png" alt="" />
      <div className="info">
      <span>Admin Dashboard: A sleek data management solution showcasing my design and development skills.</span>
      <Link to='https://subtle-sunflower-2a6a22.netlify.app' target='_blank'>
      <button>view-project</button>
      </Link>
      <img src="/react.png" alt="" className='react'/>
      <img src="/sass.png" alt="" className='sass'/>
      </div>
    </div>
  )
}

export default Dashboard