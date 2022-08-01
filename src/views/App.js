import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import TruyenPage from "./TruyenPage";
import TheLoaiPage from "./TheLoaiPage";
import { useState, useSelector } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashboardPage from "./DashboardPage/DashboardPage";
function App() {
  return (
    <>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/truyen">
            <TruyenPage />
          </Route>
          <Route path="/theloai">
            <TheLoaiPage />
          </Route>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
