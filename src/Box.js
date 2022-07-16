import React from "react";

export default function Box(props) {
  const [onValue, setOnValue] = React.useState(props.on);

  const changeOnValue = () => {
    setOnValue((prevValue) => !prevValue);
  };
  const styles = {
    backgroundColor: onValue ? "#222222" : "transparent",
  };
  return <div style={styles} onClick={changeOnValue} className="box"></div>;
}
