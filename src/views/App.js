import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import ThemeProvider from 'react-bootstrap/esm/ThemeProvider';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <header className="header">
          <NavBar />
        </header>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
