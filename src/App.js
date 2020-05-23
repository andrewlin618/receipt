import React from 'react';
import Main from './pages/Main';
import JsonPage from './pages/JsonPage';
import { Route, BrowserRouter as Router ,Switch} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Main} />
          <Route path='/json' component={JsonPage} />
          {/* <Route path='/result' component={Result} /> */}
          {/* <Route component={NotFound} /> */}
      </Switch>            
    </Router>   
  )
};
export default App;
