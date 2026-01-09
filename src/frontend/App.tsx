import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './components/Registration';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Registration} />
      </Switch>
    </Router>
  );
};

export default App;
