import { useEffect, useState } from "react";
import municipios from "./data/municipios.json";
import carreras from "./data/carreras.json";
import universidades from "./data/universidades.json";
import fondoImage from "../public/Assets/whitebg.png";
import Image from "next/image";
import DropDownCarMobile from "./DropDownCarMobile";
import DropDownUniMobile from "./DropDownUniMobile";
import DropDownMuniMobile from "./DropDownMuniMobile";

import Example from "./TailwindDropdown";
export default function MUC() {
  const [muc, setMuc] = useState([
    {
      label: "MUNICIPIOS",
      selectedBgColor: "#1facbe",
      selected: true,
      data: chunk_inefficient(12, municipios),

      cols: "4",
    },
    {
      label: "UNIVERSIDADES",
      selectedBgColor: "#ed1581",
      selected: false,
      data: chunk_inefficient(6, universidades),
      cols: "6",
    },
    {
      label: "CARRERAS",
      selectedBgColor: "#1facbe",
      selected: false,
      data: chunk_inefficient(16, carreras),
      cols: "6",
    },
  ]);

  const [selected, setSelected] = useState(0);
  const [listItemSelected, setListItemSelected] = useState(-1);

  const getInnerPlacerHolder = () => {
    switch (selected) {
      case 0:
        return (
          <p className="list-item-inner">Oferta académica aún no definida</p>
        );
        break;
      case 1:
        return (
          <p className="list-item-inner">Oferta académica aún no definida</p>
        );
        break;
      case 2:
        return (
          <p className="list-item-inner">Oferta académica aún no definida</p>
        );
    }
  };

  const getInnerList = () => {
    switch (selected) {
      case 0:
        let carrerasDelMunicipio = [];
        for (
          let i = 0;
          i < municipios[listItemSelected - 1].carreras.length;
          i++
        ) {
          for (let j = 0; j < carreras.length; j++) {
            if (
              carreras[j].id == municipios[listItemSelected - 1].carreras[i]
            ) {
              carrerasDelMunicipio.push(carreras[j]);
            }
          }
        }
        return carrerasDelMunicipio.map((cdm) => (
          <p className="list-item-inner">{cdm.name}</p>
        ));
        break;
      case 1:
        let carrerasPorUniversidades = [];
        for (let j = 0; j < carreras.length; j++) {
          if (carreras[j].idUniversidad == listItemSelected) {
            carrerasPorUniversidades.push(carreras[j]);
          }
        }
        return carrerasPorUniversidades.map((cpu) => (
          <p className="list-item-inner">{cpu.name}</p>
        ));
        break;
      case 2:
        let municipiosPorCarrera = [];
        let institucion = "";
        for (let j = 0; j < carreras.length; j++) {
          for (let m = 0; m < universidades.length; m++) {
            if (
              carreras[j].idUniversidad == universidades[m].id &&
              carreras[j].id == listItemSelected
            ) {
              institucion = universidades[m].name;
            }
          }
        }
        for (let d = 0; d < municipios.length; d++) {
          for (let n = 0; n < municipios[d].carreras.length; n++) {
            if (listItemSelected == municipios[d].carreras[n])
              municipiosPorCarrera.push(municipios[d].name);
          }
        }
        let instTag = (
          <p className="list-item-inner">
            <strong className="inner-bold">Institución:</strong> {institucion}
          </p>
        );
        let mpcTag = (
          <p className="list-item-inner">
            <strong className="inner-bold">Municipios:</strong>{" "}
            {generateMunicipiosString(municipiosPorCarrera)}
          </p>
        );

        return [instTag, mpcTag];
        break;
    }
  };

  const generateMunicipiosString = (mpc) => {
    let mpcString = "";
    if (mpcString.length == 1) {
      return (mpcString = mpc[0]);
    }
    for (let i = 0; i < mpc.length; i++) {
      if (i == 0) {
        mpcString = mpc[i];
      } else {
        mpcString =
          i == mpc.length - 1
            ? mpcString + " y " + mpc[i]
            : mpcString + ", " + mpc[i];
      }
    }
    return mpcString;
  };

  const MUCWeb = () => {
    return (
      <div
        className="d-none d-sm-block"
        style={{ minHeight: "130vh", maxWidth: "90vw" }}
      >
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ paddingTop: 40, width: "74vw" }}>
            <div className="row">
              {muc.map((o, i) => (
                <div
                  onClick={() => {
                    setSelected(i);
                    setListItemSelected(-1);
                  }}
                  style={{
                    backgroundColor:
                      selected == i ? o.selectedBgColor : "white",
                    borderColor: o.selectedBgColor,
                    minHeight: 35,
                  }}
                  className="muc-button col-2"
                >
                  <p
                    style={{
                      color: selected == i ? "white" : o.selectedBgColor,
                    }}
                  >
                    {o.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="muc-list" style={{ width: "100%" }}>
            <div className="row">
              {muc[selected].data.map((m, index) => (
                <div className={`col-${muc[selected].cols}`}>
                  {m.map((m, index) => (
                    <div
                      onClick={() => setListItemSelected(m.id)}
                      className={`muc-item col-12`}
                    >
                      <p
                        style={{
                          color: listItemSelected == m.id ? "#1facbe" : "",
                        }}
                        className="muc-item-name"
                      >
                        {m.spanishName ? m.spanishName : m.name}
                      </p>
                      {listItemSelected == m.id && (
                        <div style={{ marginTop: "10px" }}>
                          {getInnerList() == ""
                            ? getInnerPlacerHolder()
                            : getInnerList()}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  const MUCMobile = () => {
    const [Active, setActive] = useState(0);
    const [munifilter, setMunifilter] = useState(municipios);
    const [carrerafilter, setcarrerafilter] = useState(carreras);
    const [universidadfilter, setuniversidadfilter] = useState(universidades);

    const filterData = (data, type) => {
      switch (type) {
        case "POR MUNICIPIO":
          let munipioName = data;
          let municipioList = munifilter;
          let carrerasF = [];
          let universidadesF = [];

          //find all carreras in municipio and add to list
          //from carreras list find all universidades and add to list
          for (let i = 0; i < municipioList.length; i++) {
            if (municipioList[i].name == munipioName) {
              for (let j = 0; j < municipioList[i].carreras.length; j++) {
                for (let k = 0; k < carreras.length; k++) {
                  if (municipioList[i].carreras[j] == carreras[k].id) {
                    carrerasF.push(carreras[k]);
                    for (let l = 0; l < universidades.length; l++) {
                      if (carreras[k].idUniversidad == universidades[l].id) {
                        //check if universidad is already in list
                        let found = false;
                        for (let m = 0; m < universidadesF.length; m++) {
                          if (universidadesF[m].id == universidades[l].id) {
                            found = true;
                            break;
                          }
                        }
                        if (!found) universidadesF.push(universidades[l]);
                      }
                    }
                  }
                }
              }
            }
          }

          setcarrerafilter(carrerasF);
          setuniversidadfilter(universidadesF);

          return;

        case "POR CARRERAS":
          // if (carrerafilter.length == carreras.length) {
          //   return;
          // }
     
          let carreraName = data;
          let carreraList = carrerafilter;
          let selectedCarreraObj = null;
          let unis = [];

          for (let i = 0; i < carreraList.length; i++) {
            if (carreraList[i].name == carreraName) {
              selectedCarreraObj = carreraList[i];
              break;
            }
          }
         

          for (let i = 0; i < universidades.length; i++) {
            if (universidades[i].id == selectedCarreraObj.idUniversidad) {
              unis.push(universidades[i]);
              break;
            }
          }

          setuniversidadfilter(unis);

          return;
        case "POR UNIVERSIDAD":
          return;
      }
    };

    return (
      <div
        className="d-block d-sm-none"
        style={{
          minHeight: "130vh",
        }}
      >
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
              marginTop:10
            }}
          >
            <h4 className="title-oferta-academica">Oferta Académica</h4>
            <div
              className="row"
              style={{
                top: 0,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "85%",
              }}
            >
              {/* <div onClick={() => setActive(Active == 1 ? 0 : 1)}>
              <DropDownCarMobile></DropDownCarMobile>
            </div>
            <div onClick={() => setActive(Active == 2 ? 0 : 2)}>
              <DropDownUniMobile></DropDownUniMobile>
            </div>
            <div onClick={() => setActive(Active == 3 ? 0 : 3)}>
              <DropDownMuniMobile></DropDownMuniMobile>
            </div> */}

              <div
                style={{
                  height: "25vh",
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "column",
                  marginTop: 30,
                }}
              >
                <Example
                  filter={filterData}
                  text="POR MUNICIPIO"
                  items={municipios}
                  color="#1facbe"
                ></Example>

                <Example
                  filter={filterData}
                  text="POR CARRERAS"
                  items={carrerafilter}
                  color="#EC1382"
                ></Example>

                <Example
                  filter={filterData}
                  text="POR UNIVERSIDAD"
                  items={universidadfilter}
                  color="#1facbe"
                ></Example>
              </div>
              {/*             
            

                <div className="col-12" style={{ marginTop: 20 }}>
                  <div
                    className="muc-button"
                    style={{
                      backgroundColor: "white",
                      borderColor: "#1facbe",
                      minHeight: 30,
                    }}
                  >
                    <p style={{ color: "#1facbe" }}>Municipios</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <Image
            style={{ width: "100%", position: "absolute" }}
            className="uni-image"
            src={fondoImage}
          ></Image>
        </div>
      </div>
    );
  };
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        width: "100%",
      }}
    >
      <MUCWeb></MUCWeb>
      <MUCMobile></MUCMobile>
    </div>
  );
}

function chunk_inefficient(chunkSize, array) {
  return [].concat.apply(
    [],
    array.map(function (elem, i) {
      return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
    })
  );
}
