import './app.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from '../node_modules/react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        {/* <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
    </Router>
    </>
  );
}

export default App;
