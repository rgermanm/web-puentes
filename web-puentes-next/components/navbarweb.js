import Link from "next/link";
import Image from "next/image";
import logoBsAs from "./../public/Assets/logos/gob_prov.png";
import logoBsAsInverse from "./../public/Assets/logos/gob_prov_inverse.png";
import LogoPuentes from "./../public/Assets/LogoPuentesPrograma.svg";
import { useRouter } from 'next/router'

import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";

export default function NavbarWeb() {
  const router = useRouter()
  console.log(router)
  const [canShowIcon, setcanShowIcon] = useState(false);
  const [isHomeScreen, setisHomeScreen] = useState(router.pathname == "/");
  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () => {
        let y = 1 + (window.scrollY || window.pageYOffset) / 150;
        y = y < 1 ? 1 : y; // ensure y is always >= 1 (due to Safari's elastic scroll)

        if (y > 5) {
          setcanShowIcon(true);
        } else {
          setcanShowIcon(false);
        }
      });
    }
  }, []);
useEffect(() => {
  if (router.pathname == "/") {
    setisHomeScreen(true);
  } else {
    setisHomeScreen(false);
  }
}, [router.pathname]);
  return (
    <nav className="navbar navbar-expand-lg d-none d-lg-flex">
      <div
        className="collapse navbar-collapse"
        id="navbarNavAltMarkup"
        style={{ position: "relative",marginLeft:"13vw" }}
      >
        <div className="navbar-nav">
          {canShowIcon && (
            <div className="d-none d-sm-block" style={{position:"absolute"}}>
              <Link className="nav-item nav-link" href="/">
                <Image
                  src={LogoPuentes}
                  style={{
                    left: "-13vw",
                    width: 130,
                    height:90,
                    position: "absolute",
                    top: -15,
                  }}
                ></Image>
              </Link>
            </div>
          )}
          {/* {!canShowIcon && (
            <div className="d-none d-sm-block" style={{ minWidth: 56 }}></div>
          )} */}

   

          <Link
            className="nav-item nav-link"
            style={{ textAlign:"left",paddingLeft:0,marginLeft:0 }}
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
      
            {...(!isHomeScreen ? {href:"/#Programa"} : {href:"/"})}

            legacyBehavior
            passHref
            scroll={false}
          >
            <LinkScroll
              className="nav-item nav-link"
              {...(isHomeScreen ? {to:"Programa"} : {})}
             
              spy={true}
              smooth={false}
              duration={100}
            >
              {" "}
              MAPA{" "}
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

            {...(!isHomeScreen ? {href:"/#Galeria"} : {href:"/"})}
            legacyBehavior
            passHref
            scroll={false}
          >
            <LinkScroll
              className="nav-item nav-link"
             
              {...(isHomeScreen ? {to:"Galeria"} : {})}

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
