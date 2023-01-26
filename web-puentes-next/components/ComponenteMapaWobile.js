import React, { useState } from "react";
import { SVGMap } from "react-svg-map";
import styles from "../styles/Home.module.css";
import municipios from "./data/municipios.json";

import BsAs from "./BSASFinalNamed";
import fondoImage from "../public/Assets/fondo.png";
import Image from "next/image";
import DropDownMapaMobile from "./DropDownMapaMobile";
export default function ComponenteMapaWobile() {
const [selectedLocation, setSelectedLocation] = useState("");
const [RealSelectedId, setRealSelectedId] = useState("");
  const onChange = (e) => {
    setSelectedLocation(e.toUpperCase());
    console.log(e);
    setRealSelectedId(municipios.find((municipio) => municipio.name == e));
    console.log(municipios.find((municipio) => municipio.name == e));
  };



  return (
    <div
      style={{
        minWidth: "100vw",
        height: "100vw",
        margin: "0px",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          margin: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          width: "100%",
          flexDirection: "column",
          paddingTop: 10,
        }}
      >
        <h7
          className={styles.centroTitle}
          style={{ width: "100%", textAlign: "center" }}
        >
          Red de Centros Universitarios{" "}
          <span className={styles.centroTitleStrong}>PUENTES</span>
        </h7>
        {/* */}

      </div>

      <Image
        style={{ width: "100%", position: "absolute" }}
        className="uni-image"
        src={fondoImage}
      ></Image>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          width: "86vw",
          height: "86vw",
          flexDirection: "column",
          position: "absolute",
          backgroundColor: "#fff",
          bottom: -40,
          borderRadius: 9999,
          right: 30,
        }}
      >
        <MapaMobile RealSelectedId={RealSelectedId} selLoc={selectedLocation}></MapaMobile>
      </div>

      <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",

            }}
          >
            <DropDownMapaMobile onChange={onChange}></DropDownMapaMobile>
          
          </div>
    </div>
  );
}
const MapaMobile = ({selLoc}) => {
  if(selLoc != ""){

  }


  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        width: "86vw",
        height: "86vw",
        flexDirection: "column",
        
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          width: "86vw",
          height: "86vw",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "60vw",
            right: 40,
            position: "absolute",
            top: 40,
          }}
        >
          <SVGMap
           // onLocationMouseOver={(e) => setSelectedLocation(e.target.ariaLabel)}
            map={BsAs}
            locationClassName={(item) => {
              if (quitarAcentos(selLoc) == item.name){
                return "svg-map__location_colored";
              }
              return "svg-map__location";
            }}
          />
        </div>
      </div>
    </div>
  );
};

function quitarAcentos(cadena){
	const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
	return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
}