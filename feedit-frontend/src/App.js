import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom'

import LandingPage from "./containers/LandingPage";

const App = () => (
  <Router>
    <Route exact path="/" component={LandingPage} />
  </Router>
);

export default App;
