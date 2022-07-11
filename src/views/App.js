import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import TruyenPage from './TruyenPage';
import TheLoaiPage from './TheLoaiPage';
import {useState,useSelector} from "react";
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
          <NavBar/>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/truyen">
            <TruyenPage/>
          </Route>
          <Route path="/theloai">
            <TheLoaiPage/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
