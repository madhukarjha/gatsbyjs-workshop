import React from "react"
import { Router } from "@reach/router"
import About from "./About"
import { Link } from "gatsby";
import { navigate } from "gatsby";
//import { navigate, Link } from '@reach/router';

const App = () => {
  const navigateapp = () => {
    navigate("/hobbit/");
  }

  const id = 4;
  return (
      <div>
        go to <Link to={`/About/`}>About</Link> page<br />
        
        go to <Link to={`/About/`} state={{Bio: 'Madhukar Jha'}} >About</Link> page<br />
      go to <Link to={`/good-to-great/`} >good-to-great/</Link>
      <br />
      <button onClick={navigateapp}>navigate</button>
      
      <Router basepath="/app">
        <About path="/About" />
      
      </Router>
      </div>
  )
}

export default App