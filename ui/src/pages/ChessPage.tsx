import React, { useState, useEffect } from "react";

import "../css/basic.css";
import "../css/chess.css";

import NavBar from "../components/NavBar";

interface Piece {
    piece: string;
    x: Number;
    y: Number;
}

const ChessPage: React.FC = () => {
    const [board, setBoard] = useState<string[][]>([
        ["R", "N", "B", "Q", "K", "B", "N", "R"],
        ["P", "P", "P", "P", "P", "P", "P", "P"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["p", "p", "p", "p", "p", "p", "p", "p"],
        ["r", "n", "b", "q", "k", "b", "n", "r"],
    ]);

    const playerColor = "white";
    const GetCharFromA = (x: number) => {
        return String.fromCharCode("a".charCodeAt(0) + x);
    };

    const CoordinatesParser = (coordinates: string) => {
        const x = Number(coordinates.split("-")[1]);
        const y = Number(coordinates.split("-")[0]);
        return [x, y];
    };

    const [selectedPiece, setSelectedPiece] = useState<Piece>({ piece: "", x: 0, y: 0 });

    const Move = (from: Piece, to: Piece) => {
        console.log(from, to);
    };
    const onSquareClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const div = event.target as HTMLDivElement;
        const x = CoordinatesParser(div.id)[1];
        const y = CoordinatesParser(div.id)[0];

        if (playerColor === "white") {
            if (board[x][y] && board[x][y] !== board[x][y].toUpperCase()) {
                setSelectedPiece({ piece: board[x][y], x: x, y: y });
            }
        } else {
            if (board[x][y] && board[x][y] === board[x][y].toUpperCase()) {
                setSelectedPiece({ piece: board[x][y], x: x, y: y });
            }
        }

        if (selectedPiece.piece) {
            const destination: Piece = {
                piece: "",
                x: x,
                y: y,
            };
            Move(selectedPiece, destination);
        }
    };

    const rows: React.ReactElement[][] = [];
    for (let i = 0; i < 8; i++) {
        const row: React.ReactElement[] = [];
        for (let j = 0; j < 8; j++) {
            const squareColor = (i + j) % 2 === 0 ? "white" : "black";
            const coordinateColor = squareColor === "black" ? "white" : "black";
            const key = `${i}-${j}`;

            if (i == 7 && j == 0) {
                row.push(
                    <div key={key} id={key} onClick={onSquareClick} className={`square ${squareColor}`}>
                        <div className={`number_cooridantes ${coordinateColor}-font`}>{i + 1}</div>
                        <div className={`letter_cooridantes ${coordinateColor}-font`}>{GetCharFromA(j)}</div>
                        {board[i][j]}
                    </div>,
                );
            } else if (i == 7) {
                row.push(
                    <div key={key} id={key} onClick={onSquareClick} className={`square ${squareColor}`}>
                        <div className={`letter_cooridantes ${coordinateColor}-font`}>{GetCharFromA(j)}</div>
                        {board[i][j]}
                    </div>,
                );
            } else if (j == 0) {
                row.push(
                    <div key={key} id={key} onClick={onSquareClick} className={`square ${squareColor}`}>
                        <div className={`number_cooridantes ${coordinateColor}-font`}>{i + 1}</div>
                        {board[i][j]}
                    </div>,
                );
            } else {
                row.push(
                    <div key={key} id={key} onClick={onSquareClick} className={`square ${squareColor}`}>
                        {board[i][j]}
                    </div>,
                );
            }
        }
        rows.push(row);
    }

    return (
        <div className="container">
            <NavBar />
            <div className="board">
                {rows.map((row: React.ReactElement[]) => (
                    <div className="row">{row.map((square: React.ReactElement) => square)}</div>
                ))}
            </div>
        </div>
    );
};

export default ChessPage;
