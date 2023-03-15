import Image from "next/image";
import React from "react";
import ArrowDown from "../public/Assets/ad.png";
import ArrowDownRosa from "../public/Assets/ad-rosa.png";
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
          zIndex: 1,
          position: "absolute",
          left: 0,
          right: 0,
          top: "10vw",
          width: "90%",
          maxHeight:isOpen?"":"30px",
          " box-shadow": "0px 0px 10px 0px rgba(0,0,0,0.5)",
          "-webkit-box-shadow": "0px 0px 10px 0px rgba(0,0,0,0.5)",
          "-moz-box-shadow": "0px 0px 10px 0px rgba(0,0,0,0.5)",
          borderRadius: 3,
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            height:"30px"
          }}
        >
          {this.state.haveText == "" && (
            <div
              style={{
                height: "30px",
                display:"flex",
                alignItems:"center",
                width:"100%"
              }}
            >
                <h7
                  className={styles.centroTitle}
                  style={{
                    width: "90%",
                    textAlign: "center",
                    fontSize: 10,

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
                <Image src={ArrowDownRosa} alt="arrow" width={20} height={20} />
            </div>
          )}

          {this.state.haveText != "" && (
            <div
            style={{
              height: 30,
              display:"flex",
              alignItems:"center",
              width:"100%"
            }}>
           
                <h7
                  className={styles.centroTitle}
                  style={{
                    width: "90%",
                    textAlign: "center",
                    fontSize: 11,

                    color: "#EC1382",
                    backgroundColor: "#fff",
                  }}
                >
                  <span
                    className={styles.centroTitleStrong}
                    style={{ color: "#EC1382" }}
                  >
                    {this.state.haveText}
                  </span>
                </h7>
                <Image src={ArrowDownRosa} alt="arrow" width={20} height={20} />
         
            </div>
          )}
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
    this.props.onChange(ev.currentTarget.textContent);
  };

  itemList = (props) => {
    const list = props.map((item) => (
      <div
        onClick={this.handleText}
        className="dropdown__item"
        key={item.name.toString()}
  
        style={{ color: "#EC1382", fontFamily: "EncodeSans-Bold",fontSize:10 }}

      >
        {item.spanishName}
      </div>
    ));

    return <div className="dropdown__items"> {list} </div>;
  };
}

export default DropDownMapaMobile;
