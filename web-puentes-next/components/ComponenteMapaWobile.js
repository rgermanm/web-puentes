import React, { useState } from "react";
import { SVGMap } from "react-svg-map";
import styles from "../styles/Home.module.css";

import BsAs from "./BSASFinalNamed";
import fondoImage from "../public/Assets/fondo.png";
import Image from "next/image";
import DropDownMapaMobile from "./DropDownMapaMobile";
export default function ComponenteMapaWobile() {
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
        <MapaMobile></MapaMobile>
      </div>

      <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",

            }}
          >
            <DropDownMapaMobile></DropDownMapaMobile>
          
          </div>
    </div>
  );
}
const MapaMobile = () => {
  const [selectedLocation, setSelectedLocation] = useState([
    "PATAGONIA",
    "CABA",
    "AZUL",
    "JUNIN",
    "PINAMAR",
    "CARMEN DE ARECO",
    "LAS FLORES",
    "ALMIRANTE BROWN",
    "GENERAL LA MADRID",
    "TAPALQUE",
    "SALLIQUELO",
    "LAPRIDA",
    "ADOLFO GONZALES CHAVES",
  ]);

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
            onLocationMouseOver={(e) => setSelectedLocation(e.target.ariaLabel)}
            map={BsAs}
            locationClassName={(item) => {
              if (selectedLocation.includes(item.name)) {
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
