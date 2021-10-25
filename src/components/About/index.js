import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutIcon = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const containerBackground = isDarkTheme ? 'black-bg' : null
      const fontColor = isDarkTheme ? 'light-color' : null
      return (
        <>
          <div className="container">
            <Navbar />
            <div className={`about ${containerBackground}`}>
              <img src={aboutIcon} alt="about" className="about-icon" />
              <h1 className={`heading ${fontColor}`}>About</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
