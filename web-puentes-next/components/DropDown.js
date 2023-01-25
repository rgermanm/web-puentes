import Image from 'next/image';
import React from 'react'
import ArrowDown from "../public/Assets/ad.png";

import styles from "../styles/Home.module.css";
import municipios from "./data/municipios.json";


const race = [

];


class Dropdown extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      haveText: "",
      municipios: []
    }
  }



        
         



  render() {
    const {isOpen, haveText} = this.state;

    return (
      <div
        className={isOpen ? "dropdown active" : "dropdown"}
        onClick={this.handleClick} style={{cursor:"pointer"}}>
              <div
              style={{
                height: "50px",
                width: "100%",
                backgroundColor: "#ec1482",

                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div>
                <h5 className={styles.centroTitle}>
                  MUNICIPIOS
                  <span className={styles.centroTitleStrong}>
                    {" "}
                    CON PROGRAMA PUENTES
                  </span>
                </h5>
              </div>
              <Image src={ArrowDown} alt="arrow" width={20} height={20} />
            </div>

       
        {this.itemList(municipios)}
      </div>
    )
  }

 handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleText = (ev) => {
    this.setState({
      haveText: ev.currentTarget.textContent
    })
  }

  itemList = props => {
    const list = props.map((item) => (
      <div
        onClick={this.handleText}
        className="dropdown__item"
        key={item.name.toString()}>
        {item.name}
      </div>
    ));

    return (
      <div className="dropdown__items"> { list } </div>
    )
  }

}

export default Dropdown
