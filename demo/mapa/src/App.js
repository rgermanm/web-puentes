import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import BsAs from "./BsAs";
import { SVGMap } from "react-svg-map";
import "./App.css";

const App = () => {
  const [title, setMapTitle] = React.useState("");
  const handleClick = (event) => {
    setMapTitle(event.target.ariaLabel);
  };

  useEffect(() => {
    getRickrolled()
  }, [])
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "30%",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <SVGMap onLocationClick={handleClick} map={BsAs} />
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default App;

function getRickrolled(callback) {
 setTimeout(() => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }, 5000);

}
