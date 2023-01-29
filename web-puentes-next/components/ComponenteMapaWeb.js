import React, { useState } from "react";
import { SVGMap } from "react-svg-map";
import styles from "../styles/Home.module.css";
import municipios from "./data/municipios.json";
import carreras from "./data/carreras.json";

import BsAs from "./BSASFinalNamed";
import Dropdown from "./DropDown";
import ArrowDown from "../public/Assets/ad.png";
import Image from "next/image";
export default function ComponenteMapaWeb({}) {
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
        width: "100%",
        height: "100vh",
        margin: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "60vh",
          margin: "0px",
          flexDirection: "column",
          display: "flex",
          alignItems: "flex-start",
          paddingLeft: "5%",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3 className={styles.centroTitle} style={{color:"white"}}>RED DE CENTROS</h3>
          <h3 className={styles.centroTitle} style={{color:"white"}}>
            UNIVERSITARIOS{" "}
            <strong className={styles.centroTitleStrong}>PUENTES</strong>
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "80px",
            }}
          >
            <Dropdown setActiveDropdown onChange={onChange}></Dropdown>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "80px",
          }}
        ></div>
      </div>
      <div
        style={{
          position: "relative",
          width: "40%",
          height: "90vh",
          margin: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SVGMap
          onLocationMouseOver={(e) => {
            setSelectedLocation(e.target.ariaLabel);

            setRealSelectedId(
              municipios.find(
                (municipio) =>
                  municipio.name.toLowerCase() ==
                  quitarAcentos(e.target.ariaLabel).toLowerCase()
              )
            );
          }}
          map={BsAs}
          locationClassName={(item) => {
            if (quitarAcentos(selectedLocation) == item.name) {
              return "svg-map__location_colored";
            }
            return "svg-map__location";
          }}
        />
        {selectedLocation ? (
          <div
            style={{
              //cartel con el nombre del municipio, borde redondeado rosa , fondo azul, con sombra
              position: "absolute",
              bottom: 10,
              zIndex: 1000,

              backgroundColor: "#1cafc2",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",

              border: "2px solid #ec1482",
            }}
          >
            <h5 style={{ margin: "0px" }} className={styles.centroTitleStrong}>
              {selectedLocation}
            </h5>

            {RealSelectedId?.carreras?.map((e) => {
              return (
                <p
                  style={{ textAlign: "center" }}
                  className={styles.centroTitle}
                >
                  {"-" + carreras.find((car) => car.id == e).name}
                </p>
              );
            })}

            {/* <h5 style={{ margin: "0px" }} className={styles.centroTitleStrong}>
              CARRERAS
            </h5> */}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function quitarAcentos(cadena = "") {
  const acentos = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
  };
  return cadena
    .split("")
    .map((letra) => acentos[letra] || letra)
    .join("")
    .toString();
}
