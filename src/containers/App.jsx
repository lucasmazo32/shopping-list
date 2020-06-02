import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Welcome from '../components/Welcome';
import '../assets/styles/App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}
