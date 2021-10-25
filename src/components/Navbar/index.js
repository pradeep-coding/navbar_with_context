import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onToggleTheme = () => {
        toggleTheme()
      }

      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const toggleThemeIconUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const navItemColor = isDarkTheme ? 'light-color' : 'dark-color'
      const navbarColor = isDarkTheme ? 'dark-bg' : 'light-bg'
      return (
        <>
          <nav className={`navbar ${navbarColor}`}>
            <img src={logoUrl} alt="website logo" className="website-logo" />
            <ul className="nav-items">
              <Link to="/" className="nav-item">
                <li className={`${navItemColor}`}>Home</li>
              </Link>
              <Link to="/about" className="nav-item">
                <li className={`${navItemColor}`}>About</li>
              </Link>
            </ul>
            <button
              type="button"
              testId="theme"
              onClick={onToggleTheme}
              className="toggle-button"
            >
              <img
                src={toggleThemeIconUrl}
                alt="theme"
                className="toggle-icon"
              />
            </button>
          </nav>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
