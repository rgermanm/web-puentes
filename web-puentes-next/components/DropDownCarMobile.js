import Image from "next/image";
import React from "react";
import ArrowDown from "../public/Assets/ad.png";

import styles from "../styles/Home.module.css";
import municipios from "./data/municipios.json";

const race = [];

class DropDownCarMobile extends React.Component {
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
        className={isOpen ? "col-12 dropdown active" : "col-12 dropdown"}
        onClick={this.handleClick}
        style={{
          cursor: "pointer",

          backgroundColor: "white",

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
          <div className="col-12" style={{}}>
            <div
              className="muc-button"
              style={{
                backgroundColor: "#1facbe",
                borderColor: "#1facbe",
                minHeight: 30,
              }}
            >
              <p style={{ color: "white" }}>Minucipios</p>
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
        className="dropdown__item"
        key={item.name.toString()}
        style={{ color: "#EC1382" }}
      >
        {item.name}
      </div>
    ));

    return <div className="dropdown__items"> {list} </div>;
  };
}

export default DropDownCarMobile;
