import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeIcon = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const containerBackground = isDarkTheme ? 'black-bg' : null
      const fontColor = isDarkTheme ? 'light-color' : null
      return (
        <>
          <div className="container">
            <Navbar />
            <div className={`home ${containerBackground}`}>
              <img src={homeIcon} alt="home" className="home-icon" />
              <h1 className={`heading ${fontColor}`}>Home</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
