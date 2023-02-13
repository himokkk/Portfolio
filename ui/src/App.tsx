import{ HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ChessPage from './pages/ChessPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Routes>
              <Route path='/' element={<div><NavBar/><HomePage/></div>}></Route>
              <Route path='/chess' element={<div><NavBar/><ChessPage/></div>}></Route>
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
