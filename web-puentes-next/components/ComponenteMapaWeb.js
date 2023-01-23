import React, { useState } from 'react'
import { SVGMap } from "react-svg-map";
import styles from "../styles/Home.module.css";

import BsAs from "./BSASFinalNamed";

export default function ComponenteMapaWeb() {
    const [selectedLocation, setSelectedLocation] = useState("Municipios");

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
        <h3 className={styles.centroTitle}>RED DE CENTROS</h3>
        <h3 className={styles.centroTitle}>
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
          <div
            style={{
              height: "50px",
              width: "50px",
              backgroundColor: "#ec1482",
              borderRadius: "100%",
              marginRight: "10px",
            }}
          ></div>
          <div>
            <h5 className={styles.centroTitle}>MUNICIPIOS </h5>
            <h5 className={styles.centroTitleStrong}>
              {" "}
              CON PROGRAMA PUENTES
            </h5>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "80px",
        }}
      >
        {/*<div style={{ display: "flex", alignItems: "center", height: "40px", minWidth: "200px", paddingLeft: "80px", paddingRight: "80px", paddingTop: "auto", paddingBottom: "auto", backgroundColor: "#1cafc2", cursor: "pointer", borderRadius: "14px", marginRight: "10px" }}>
          <h6 style={{ margin: "0px" }} className={styles.centroTitleStrong}> MÁS INFO</h6>
</div>*/}
      </div>
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
        onLocationMouseOver={(e) =>
          setSelectedLocation(e.target.ariaLabel)
        }
        map={BsAs}
      />
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
        <h5
          style={{ margin: "0px" }}
          className={styles.centroTitleStrong}
        >
          {selectedLocation}
        </h5>
        <h5 style={{ margin: "0px" }} className={styles.centroTitle}>
          UNIVERSIDADES
        </h5>
        <h5
          style={{ margin: "0px" }}
          className={styles.centroTitleStrong}
        >
          CARRERAS
        </h5>
      </div>
    </div>
  </div>  )
}
