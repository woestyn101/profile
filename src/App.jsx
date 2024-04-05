import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/Notfound';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
     <div className='App'>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/portfolio">
          <Portfolio></Portfolio>
        </Route>
        <Route exact path="/resume">
          <Resume></Resume>
        </Route>
        <Contact exact path="/contact">
          <Home></Home>
        </Contact>
      </Switch>
      </div>

    </Router>
    
  )
}

export default App
