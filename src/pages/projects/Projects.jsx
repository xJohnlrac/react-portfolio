import './projects.scss'
import Summarizer from '../../components/summarizer/Summarizer'
import Dashboard from '../../components/dashboard/Dashboard'
import Social from '../../components/social/Social'

const Projects = () => {
  return (
    <div className='projects'>
      <div className="files">
        <div className="tabs">
          <div className="personal-info">
            <span>react-projects</span>
            <span>x</span>
          </div>
          <div className="space-files"></div>
        </div>
      </div>
      <div className="container">
        <div className="info">
          <div className="title">
          <p>Project 1</p>
          <span>// _ai-summarizer</span>
          </div>
          <div className="box box1"><Summarizer/></div>
          <div className="desc">
            note: enter a valid article url;
          </div>
        </div>
        <div className="info">
          <div className="title">
          <p>Project 2</p>
          <span>// _admin-dashboard</span>
          </div>
          <div className="box box2"><Dashboard/></div>
          <div className="desc">
          note: navigate to every page;
          </div>
        </div>
        <div className="info">
          <div className="title">
          <p>Project 3</p>
          <span>// _social-app</span>
          </div>
          <div className="box box3"><Social/></div>
          <div className="desc">
          note: click the login button first, then remove the '/login?' from the url;
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects