import React, { useState } from "react";
import Hamburger from "hamburger-react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Delay from "./delay";
import coverLogo from "./../public/Assets/logos/logo-puentes-navbarMobileBlanco.svg";

import Link from "next/link";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";

const NavbarMobile = () => {
  const [CanShow, setCanShow] = useState(true);
  const [isOpen, setOpen] = useState(false);

  var myScrollFunc = function () {
    setCanShow(true);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", myScrollFunc);
  }, []);
  return (
    <>
      <Fade top when={CanShow}>
        <div
          className={"nav-black-mobile"}
          style={{ maxHeight: 97, zIndex: 9999 }}
        >
          <Image
            className="imgmob"
            alt="Puentes"
            onClick={() => (window.location.href = "/")}
            src={coverLogo}
            style={{ width: 140, height: 97 }}
          ></Image>

          <HambuerguerItems
            isOpen={isOpen}
            setOpen={setOpen}
          ></HambuerguerItems>
        </div>
      </Fade>

      <Fade top when={!CanShow}>
        <div
          className={"nav-black-mobile"}
          style={{ maxHeight: 97, zIndex: 99, backgroundColor: "transparent" }}
        >
          <HambuerguerItems
            isOpen={isOpen}
            setOpen={setOpen}
          ></HambuerguerItems>
        </div>
      </Fade>
    </>
  );
};

export default NavbarMobile;

const HambuerguerItems = ({ isOpen, setOpen }) => {
  return (
    <>
      <Delay d={600} height={34}>
        <Slide right>
          <div className="hamburguer">
            <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
          </div>
        </Slide>
      </Delay>

      {isOpen && (
        <div className="menu-mobile">
          <ul
            className="menu-list-mobile"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: 0,
            }}
          >
            <div
              style={{
                height: 100,
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                padding: 12,
              }}
            >
              <Image
                alt="Puentes"
                style={{ width: 140, height: 97 }}
                src={coverLogo}
              ></Image>
              <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
            </div>
            <li className="mo" onClick={() => setOpen(false)}>
              <Link
                className="men underline-menu-yel"
                style={{ color: "white", textAlign: "left", color: "white" }}
                href="/"
              >
                INICIO
              </Link>
            </li>

            <li className="mo" onClick={() => setOpen(false)}>
              <Link
                className="men underline-menu-yel"
                style={{ color: "white", textAlign: "left" }}
                href="/programa"
              >
                EL PROGRAMA
              </Link>
            </li>
            <li className="mo" onClick={() => setOpen(false)}>
            <Link
                className="men underline-menu-blue"
                style={{ color: "white" }}
                href="/#ProgramaMobile"
              >
                MAPA
              </Link>
            </li>
            <li className="mo" onClick={() => setOpen(false)}>
              <Link
                className="men underline-menu-blue"
                style={{ color: "white" }}
                href="/preguntas-frecuentes"
              >
                PREGUNTAS FRECUENTES
              </Link>
            </li>
            <li className="mo" onClick={() => setOpen(false)}>
            <Link
                className="men underline-menu-blue"
                style={{ color: "white" }}
                href="/#Galeria"
              >
                GALERIA
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
