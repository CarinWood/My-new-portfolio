import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import Connect from './pages/Connect';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import './App.css';
import Games from './pages/Games';

function App() {
  return (
    <div className='App'>
    <Menu/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/connect" element={<Connect/>}/>
      <Route path="/games" element={<Games/>} />
    </Routes>

    <Footer/>
    </div>
  );
}

export default App;
