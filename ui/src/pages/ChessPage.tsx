import React, { useState } from "react";

import "../css/basic.css";
import "../css/chess.css";

import Chess from "../components/Chess/ChessComponent";
import NavBar from "../components/NavBar/NavBarComponent";

const ChessPage: React.FC = () => {
    return (
        <div className="container">
            <NavBar />
            <Chess />
        </div>
    );
};

export default ChessPage;
