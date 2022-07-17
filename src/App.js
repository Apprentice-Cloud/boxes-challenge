import React from "react";
import Box from "./Box";
import boxes from "./boxes";

export default function App() {
  const [squareBoxes, setSquareBoxes] = React.useState(boxes);

  const changeOnValue = (id) => {
    setSquareBoxes((prevSquares) => {
      const newSquares = [];

      for (let i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i];
        if (currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on,
          };
          newSquares.push(updatedSquare);
        } else {
          newSquares.push(currentSquare);
        }
      }
      return newSquares;
    });
  };

  const box = squareBoxes.map((x) => (
    <Box key={x.id} id={x.id} on={x.on} handleClick={changeOnValue} />
  ));
  return (
    <main>
      <h1>Boxes will go here</h1>
      {box}
    </main>
  );
}
