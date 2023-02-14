import React, { useState, useEffect } from 'react';

import '../css/basic.css';
import '../css/chess.css';

const ChessPage: React.FC = (() => {
    const [board, setBoard] = useState<string[][]>([
        ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
      ]);

    const rows: React.ReactElement[][] = [];
    for (let i = 0; i < 8; i++) {
      const row: React.ReactElement[] = [];
      for (let j = 0; j < 8; j++) {
        const squareColor = (i + j) % 2 === 0 ? 'white' : 'black';
        const coordinateColor = (i + j) % 2 !== 0 ? 'white' : 'black';
        let inside = i+1;
        
        if(i==7 && j==0) 
        {
          row.push(
            <div key={`${i}-${j}`} className={`square ${squareColor}`}>
              <div className={`number_cooridantes ${coordinateColor}-font`}>
                {i+1}
              </div>
              <div className={`letter_cooridantes ${coordinateColor}-font`}>
                {String.fromCharCode('a'.charCodeAt(0) + j)}
              </div>
              {board[i][j]}
            </div>
          );
        }
        else if(i==7) {
          row.push(
            <div key={`${i}-${j}`} className={`square ${squareColor}`}>
              <div className={`letter_cooridantes ${coordinateColor}-font`}>
                {String.fromCharCode('a'.charCodeAt(0) + j)}
              </div>
              {board[i][j]}
            </div>
          );
        }
        else if(j==0) 
        {
          row.push(
            <div key={`${i}-${j}`} className={`square ${squareColor}`}><div className={`number_cooridantes ${coordinateColor}-font`}>{i+1}</div>{board[i][j]}</div>
          );
        }
        else 
        {
          row.push(
            <div key={`${i}-${j}`} className={`square ${squareColor}`}>{board[i][j]}</div>
          );
        }        
      }
      rows.push(row);      
    }

    return (
      <div className="container">
        <div className="board">
          {rows.map((row: React.ReactElement[]) => (
            <div className="row">
              {row.map((square: React.ReactElement) => square)}
            </div>
          ))} 
        </div>
      </div>
    );

})

export default ChessPage;