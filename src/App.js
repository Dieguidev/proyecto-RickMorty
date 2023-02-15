import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CharacterDetail from './pages/CharacterDetail/CharacterDetail';
import Home from './pages/Home/Home';

import './App.css';
import About from './pages/About/About';
import Character from './pages/Characters/Character';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

function App() {
  return (
  <Router>
    <div className="App">
    <Header />
    <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/characters' element={<Character />}/>
        <Route path='/characters/:id' element={<CharacterDetail />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
