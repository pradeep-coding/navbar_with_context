import {Switch, Route, Redirect} from 'react-router-dom'

import {Component} from 'react'

import ThemeContext from './context/ThemeContext'

import Home from './components/Home'

import About from './components/About'

import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/navbar_with_context/" component={Home} />
          <Route exact path="/navbar_with_context/about" component={About} />
          <Route path="/navbar_with_context/not_found" component={NotFound} />
          <Redirect to="/navbar_with_context/not_found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
