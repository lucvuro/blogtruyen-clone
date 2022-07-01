import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import ThemeProvider from 'react-bootstrap/esm/ThemeProvider';
function App() {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>
      <Home />
    </>
  );
}

export default App;
