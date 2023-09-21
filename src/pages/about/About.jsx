import './about.scss'
import aboutData from '../../aboutData'

const About = () => {
  return (
    <div className='about'>
      <div className="files">
        <div className="tabs">
        <div className="personal-info">
        <span>personal-info</span>
        <span>x</span>
        </div>
        <div className="space-files"></div>
        </div>
        <div className="code">
          {aboutData.content.map((text, index) => (
            <p key={index}>
            <span>{`${index + 1}`}</span>
            <span>{`${text}`}</span>
            </p>
          ))}
        </div>
      </div>
      <div className="showcase">
        <div className="title">
        <span>// code snippet showcase:</span>
        </div>
        <div className="snippet">
          <div className="hero">
            <div className="userInfo">
              <img src="https://i.pinimg.com/564x/b3/c9/27/b3c9279fa7f8d984801feb5479f7bbf3.jpg" alt="" />
              <div className="username">
                <span className='user'>@Abukiks</span>
                <p>Created 5 months ago</p>
              </div>
            </div>
            <div className="rate">
              <img src="/chats.png" alt="" />
              <img src="/stars.png" alt="" />
            </div>
          </div>
          <div className="demo">
            <img src="/react-snippet.png" alt="" />
          </div>
        </div>
        <hr />
        <div className="codeInfo">
          <p>Local storage is a vital tool in web development, allowing web apps to store and retrieve user data on their device. Retrieval is done using JavaScript's `localStorage` object by specifying a key. Removing data is equally important, achieved with the `removeItem` method. Local storage enhances user experiences by persisting essential data, improving app performance, and providing personalization options.</p>
        </div>
      </div>
    </div>
  )
}

export default About