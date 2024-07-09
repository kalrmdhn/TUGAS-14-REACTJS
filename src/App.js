import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Notfound from './pages/NotFound';
import Team from './pages/Team';
import Data from './pages/Data';
import Mhs from './pages/Mhs';
import Timer from './components/Timer';
import UserApp from './components/UserApp';
import { ThemeProvider } from './context/ThemeContext';
import ThemedComponent from './components/ThemedComponent';
import Counter from './components/Counter';
import store from './components/store';
import { Provider } from 'react-redux';


function Nama(props) {
  return <h1>Nama : {props.name}</h1>;
}

function Nim(props) {
  return <h1>NIM : {props.nim}</h1>;
}

function App() {

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
      setIsVisible(!isVisible);
  }
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/data">Data Mahasiswa</Link></li>
            <li><Link to="/timer">Timer</Link></li>
            <li><Link to="/userapp">List Data Pengguna dan Tambah Data</Link></li>
          </ul>
        </nav>
          <img src={logo} className="App-logo" alt="logo" />
          <Button onClick={toggleVisibility}>Show/Hide</Button>
            {isVisible && <h1><Nama name="Haekal Akmal R" /></h1>}
            {isVisible && <h1><Nim nim="A11.2021.13719" /></h1>}
      
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} >
            <Route path="team" element={<Team />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/data" element={<Data />} >
            <Route path="mhs" element={<Mhs />} />
          </Route>
          <Route path="/userapp" element={<UserApp />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <ThemeProvider>
          <ThemedComponent />
        </ThemeProvider>
        <Provider store={store}>
          <Counter />
        </Provider>
        </header>
      </div>
    </Router>
    
  );
}

export default App;
