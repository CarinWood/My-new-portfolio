import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import Connect from './pages/Connect';
import Menu from './components/menu/Menu';

function App() {
  return (
    <>
    <Menu/>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/connect" element={<Connect/>}/>
    </Routes>
    </>
  );
}

export default App;
