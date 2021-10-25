import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const textColor = isDarkTheme ? 'light' : null
      const containerBackground = isDarkTheme ? 'black-bg' : null
      return (
        <div className="container">
          <Navbar />
          <div className={`not-found ${containerBackground}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="notfound-icon"
            />
            <h1 className={`notfound-heading ${textColor}`}>Lost Your Way?</h1>
            <p className={`notfound-description ${textColor}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
