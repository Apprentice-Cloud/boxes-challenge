import React from "react";
import Box from "./Box";
import boxes from "./boxes";

export default function App() {
  const [squareBoxes, setSquareBoxes] = React.useState(boxes);

  const changeOnValue = (id) => {
    setSquareBoxes((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
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
