import Image from "next/image";
import { useState } from "react";
import DropDownCarMobile from "../components/DropDownCarMobile";
import DropDownMuniMobile from "../components/DropDownMuniMobile";
import DropDownUniMobile from "../components/DropDownUniMobile";
import Example from "../components/TailwindDropdown";
import fondoImage from "../public/Assets/whitebg.png";

const Dropdown = () => {
  const [Active, setActive] = useState(0);
  return (
    <div>
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
            <Example></Example>

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

export default Dropdown;
