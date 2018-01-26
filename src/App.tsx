import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BuildContainer from './containers/BuildContainer';

const Routes = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/build">Build</Link>
    </li>
    <li>
      <Link to="/version">Version</Link>
    </li>
  </ul>
);

const App = () => (
  <Router>
    <div>
      <Routes />
      <Switch>
        <Route exact={true} path="/" render={() => <h2>Home</h2>} />
        <Route path="/build" component={BuildContainer} />
        <Route path="/version" render={() => <h2>Version</h2>} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </div>
  </Router>
);

export default App;
