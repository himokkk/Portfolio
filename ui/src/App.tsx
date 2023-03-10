import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ChessPage from "./pages/ChessPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/chess" element={<ChessPage />} />
            </Routes>
        </div>
    );
}

export default App;
