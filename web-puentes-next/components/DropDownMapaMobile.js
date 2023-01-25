import Image from "next/image";
import React from "react";
import ArrowDown from "../public/Assets/ad.png";

import styles from "../styles/Home.module.css";
import municipios from "./data/municipios.json";

const race = [];

class DropDownMapaMobile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      haveText: "",
      municipios: [],
    };
  }

  render() {
    const { isOpen, haveText } = this.state;

    return (
      <div
        className={isOpen ? "dropdown active" : "dropdown"}
        onClick={this.handleClick}
        style={{
          cursor: "pointer",
          top: 0,
          backgroundColor: "white",
          zIndex: 9999,
          position: "absolute",
          left: 0,
          right: 0,
          top: "10vw",
          width: "80%",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <h7
            className={styles.centroTitle}
            style={{
              width: "90%",
              textAlign: "center",
              fontSize: 11,

              padding: 5,
              color: "#EC1382",
              backgroundColor: "#fff",
            }}
          >
            SELECCIONAR MUNICIPIO CON{" "}
            <span
              className={styles.centroTitleStrong}
              style={{ color: "#EC1382" }}
            >
              PROGRAMA PUENTES
            </span>
          </h7>
          <Image src={ArrowDown} alt="arrow" width={20} height={20} />
        </div>

        {this.itemList(municipios)}
      </div>
    );
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleText = (ev) => {
    this.setState({
      haveText: ev.currentTarget.textContent,
    });
  };

  itemList = (props) => {
    const list = props.map((item) => (
      <div
        onClick={this.handleText}
        className="dropdown__item"
        key={item.name.toString()}
        style={{color:"#EC1382"}}
      >
        {item.name}
      </div>
    ));

    return <div className="dropdown__items"> {list} </div>;
  };
}

export default DropDownMapaMobile;
