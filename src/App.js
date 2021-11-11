import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("red");
  const colorList = ["red", "green", "yellow", "purple", "orange", "grey", "blue", "pink", "turquoise", "olive", "brown", "cyan"];
  const handleClick = () => {
    setColor(colorList[Math.floor(Math.random() * colorList.length + 1)]);
  }

  return (
    <div className="app">
      <h1>Welcome to an App</h1>
      <p className="">App <span style={{color}}>THIS</span></p>
      <button className="button" onClick={handleClick}>¯\_(ツ)_/¯</button>
    </div>
  );
}

export default App;
