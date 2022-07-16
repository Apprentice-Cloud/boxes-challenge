import React from "react";
import Box from "./Box";
import boxes from "./boxes";

export default function App() {
  const [squareBoxes, setSquareBoxes] = React.useState(boxes);
  console.log(boxes);

  const box = squareBoxes.map((x) => <Box on={x.on} key={x.id} />);
  return (
    <main>
      <h1>Boxes will go here</h1>
      {box}
    </main>
  );
}
