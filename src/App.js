import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/About' component={About} />
        <Route path='/LogIn' component={LogIn} />
        <Route path='/SignUp' component={SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
