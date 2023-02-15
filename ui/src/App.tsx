import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ChessPage from './pages/ChessPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
              <Route path='/' element={<><NavBar/><HomePage/></>}/>
              <Route path='/chess' element={<><NavBar/><ChessPage/></>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
