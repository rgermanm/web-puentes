import React from "react";
import quilmes from "../public/Assets/quilmes-white.png";

export default function BotonQuilmes() {
  return (
<div class="bq-container">
  <h2 class="bq-subtitle">Mapa de la Educación Superior de la Provincia de Buenos Aires</h2>
  <button onClick={()=>{    window.open('https://puentes.unq.edu.ar/#/', '_blank')}} class="bq-button">Conocelo aquí</button>
  <img className="bq-img" src={quilmes.src} alt="Image"/>
</div>

  );
}
