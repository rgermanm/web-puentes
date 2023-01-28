import Link from "next/link";
import Image from "next/image";
import logoBsAs from "./../public/Assets/logos/gob_prov.png";
import logoBsAsInverse from "./../public/Assets/logos/gob_prov_inverse.png";
import LogoPuentes from "./../public/Assets/LogoPuentesPrograma.svg";

import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";

export default function NavbarWeb() {
  const [canShowIcon, setcanShowIcon] = useState(false);
  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () => {
        let y = 1 + (window.scrollY || window.pageYOffset) / 150;
        y = y < 1 ? 1 : y; // ensure y is always >= 1 (due to Safari's elastic scroll)
        console.log(y);
        if (y > 5) {
          setcanShowIcon(true);
        } else {
          setcanShowIcon(false);
        }
      });
    }
  }, []);
  return (
    <nav className="navbar navbar-expand-lg d-none d-lg-flex">
      <div
        className="collapse navbar-collapse"
        id="navbarNavAltMarkup"
        style={{ position: "relative" }}
      >
        <div className="navbar-nav">
          {canShowIcon && (
            <div className="d-none d-sm-block">
              <Link className="nav-item nav-link" href="/">
                <Image
                  src={LogoPuentes}
                  style={{
                    left: 0,
                    width: 130,
                    height:90,
                    position: "absolute",
                    top: -20,
                  }}
                ></Image>
              </Link>
            </div>
          )}
          {!canShowIcon && (
            <div className="d-none d-sm-block" style={{ minWidth: 56 }}></div>
          )}

          <Link
            className="nav-item nav-link"
            style={{ marginLeft: "8vw" }}
            href="/"
          >
            INICIO
          </Link>
          <Link
            className="nav-item nav-link"
            href="/programa"
            legacyBehavior
            passHref
            scroll={false}
          >
            <LinkScroll
              className="nav-item nav-link"
              spy={true}
              smooth={false}
              duration={100}
            >
              {" "}
              EL PROGRAMA
            </LinkScroll>
          </Link>
          <Link
            className="nav-item nav-link"
            href="/#Programa"
            legacyBehavior
            passHref
            scroll={false}
          >
            <LinkScroll
              className="nav-item nav-link"
              to="Programa"
              spy={true}
              smooth={false}
              duration={100}
            >
              {" "}
              OFERTA ACADEMICA{" "}
            </LinkScroll>
          </Link>
          <Link
            className="nav-item nav-link "
            href="/preguntas-frecuentes"
            legacyBehavior
            passHref
            scroll={false}
          >
            <LinkScroll
              className="nav-item nav-link"
              spy={true}
              smooth={false}
              duration={100}
            >
              PREGUNTAS FRECUENTES
            </LinkScroll>
          </Link>
          <Link
            className="nav-item nav-link "
            href="/#Galeria"
            legacyBehavior
            passHref
            scroll={false}
          >
            <LinkScroll
              className="nav-item nav-link"
              to="Galeria"
              spy={true}
              smooth={false}
              duration={100}
            >
              {" "}
              GALERIA{" "}
            </LinkScroll>
          </Link>
        </div>
      </div>
      <a className="navbar-brand" href="#">
        <Image className="nav-logo" src={logoBsAsInverse}></Image>
      </a>
      <div className="gradientOverlay"></div>
    </nav>
  );
}
