import { Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ChessPage from "./pages/ChessPage";
import TechStackComponent from "./components/TechStackComponent";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="/chess" element={<ChessPage />} />
            </Routes>
        </div>
    );
}

export default App;
