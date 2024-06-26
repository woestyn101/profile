import { useState } from 'react'
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Header from './components/Header';
import FooterComp from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/Notfound';



function App() {
 

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
          <br/>
          <br/>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="*">
              <NotFound />
            </Route>
      </Switch>
      <br/>
      <br/>
      <FooterComp></FooterComp>
      </div>

    </Router>
    
  )
}

export default App
