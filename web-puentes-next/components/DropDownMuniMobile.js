import Image from "next/image";
import React from "react";
import ArrowDown from "../public/Assets/ad-azul.png";

import styles from "../styles/Home.module.css";
import municipios from "./data/carreras.json";

const race = [];

class DropDownMuniMobile extends React.Component {
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
        className={
          isOpen ? "col-12 dropdown active mt-3" : "col-12 dropdown mt-3"
        }
        onClick={this.handleClick}
        style={{
          cursor: "pointer",

          backgroundColor: "white",

          width: "80%",

          "max-height": "170px",
        "overflow-y": "auto",
        "display": "block",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div className="col-12" style={{}}>
            <div
              className="muc-button"
              style={{
                backgroundColor: "white",
                borderColor: "#1facbe",
                minHeight: 30,
              }}
            >
              <p style={{ color: "#1facbe",marginRight:5  }}>Carreras</p>
              <Image src={ArrowDown} alt="arrow" width={20} height={20} />
            </div>
          </div>
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
        className="dropdown__item carList"
        key={item.name.toString()}
        style={{ color: "#EC1382" }}
      >
        {item.name}
      </div>
    ));

    return <div className="dropdown__items"style={{fontSize:13}}> {list} </div>;
  };
}

export default DropDownMuniMobile;
