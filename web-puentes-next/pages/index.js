import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Section } from "../components/section";
import BackgroundBanner from "../public/Assets/BackgroundBanner.png";
import FotoBannerMobile from "../public/Assets/mobilebg.png";
import FotoBanner from "../public/Assets/FotoBanner.jpg";
import FotoProv from "../public/Assets/provLeft.png";
import FotoProvWhite from "../public/Assets/provWhite.png";
import FotoDer from "../public/Assets/derecho1mini.png";
import FotoProvMob from "../public/Assets/provMob.png";
import { ChakraProvider } from "@chakra-ui/react";

import FotoLogoDer from "../public/Assets/derechoalfuturo.png";

import BackgroundOferta from "../public/Assets/Background-OfertaAcademica-011.png";
import BackgroundPrograma from "../public/Assets/Background-ElPrograma1-01.png";
import BackgroundPrograma2 from "../public/Assets/background-estadisticas.png";
import BackgroundGaleria from "../public/Assets/Background-Galeria-01.png";
import LogoPuentesNoBottom from "../public/Assets/LogoPuentesProgramaNoBottom.svg";
import LogoPuentes from "../public/Assets/LogoPuentesPrograma.svg";
import LogoPuentesLeft from "../public/Assets/puentesleft.svg";
import LogoPuentesMobile from "../public/Assets/LogoPuentesMobile.svg";
import gradientCodes from "../public/gradientCodes.json";
import Details from "../public/Assets/details.png";
import Ball from "../public/Assets/ball.png";
import Ballr from "../public/Assets/ballr.png";
import ilustracionesPrograma from "../public/Assets/Ilustraciones2.svg";
import galeria from "../public/Assets/FotoProvisoria-Galeria-01.jpg";
import { usePathname } from "next/navigation";

import mapaPBA from "../public/Assets/MapaPBA.svg";
import logosUni from "../public/Assets/LogosUniversidades.svg";
import MUC from "../components/muc";
import ilustracion1 from "../public/Assets/ilustraciones/1.svg";

import ilustracion2 from "../public/Assets/ilustraciones/2.svg";
import ilustracion3 from "../public/Assets/ilustraciones/3.svg";
import ilustracion4 from "../public/Assets/ilustraciones/4.svg";
import ilustracion5 from "../public/Assets/ilustraciones/5.svg";
import ilustracion6 from "../public/Assets/ilustraciones/6.svg";

import uni1 from "../public/Assets/logos/universidades/1.jpeg";
import uni2 from "../public/Assets/logos/universidades/2.png";
import uni3 from "../public/Assets/logos/universidades/3.jpeg";
import uni4 from "../public/Assets/logos/universidades/4.jpeg";
import uni5 from "../public/Assets/logos/universidades/5.jpeg";
import uni6 from "../public/Assets/logos/universidades/6.png";
import uni7 from "../public/Assets/logos/universidades/7.png";
import uni8 from "../public/Assets/logos/universidades/8.png";
import uni9 from "../public/Assets/logos/universidades/9.png";
import uni10 from "../public/Assets/logos/universidades/10.jpeg";
import uni11 from "../public/Assets/logos/universidades/f.jpeg";
import StatsCard from "../components/statsCard";
import { SVGMap } from "react-svg-map";

import BsAs from "../components/BSASFinalNamed";

import { useEffect, useState } from "react";
import NavbarWeb from "../components/navbarweb";
import NavbarMobile from "../components/navbarMobile";
import SocialFooterIcons from "../components/SocialFooterIcons";
import ComponenteMapaWeb from "../components/ComponenteMapaWeb";
import ComponenteMapaWobile from "../components/ComponenteMapaWobile";
import { scroller } from "react-scroll";
import SectionGaleria from "../components/sectionGaleria";

export default function Home() {
  const [actualPath, setactualPath] = useState("");

  const stats = [
    {
      number: 37,
      image: ilustracion1,
      label: (
        <p>
          Municipios
          <br /> en Puentes
        </p>
      ),
      color: "#1facbe",
    },
    {
      number: 11,
      image: ilustracion2,
      label: "Universidades",
      color: "#ed1581",
    },
    {
      number: 60,
      image: ilustracion3,
      label: (
        <p>
          Carreras
          <br /> en 2023
        </p>
      ),
      color: "#ed1581",
    },
    {
      number: 2500,
      image: ilustracion4,
      label: "Personas inscriptas",
      color: "#1facbe",
    },
    {
      number: 1624,
      image: ilustracion5,
      label: (
        <p>
          Millones
          <br />
          de pesos en inversión
        </p>
      ),
      color: "#1facbe",
    },
    {
      number: 37,
      image: ilustracion6,
      label: (
        <p>
          Centros universitarios
          <br />
          en construcción, ampliación o refacción
        </p>
      ),
      color: "#ed1581",
    },
  ];
  const statsWeb = [
    {
      number: 37,
      image: ilustracion1,
      label: "Municipios en Puentes",
      color: "#1facbe",
    },
    {
      number: 11,
      image: ilustracion2,
      label: "Universidades",
      color: "#ed1581",
    },
    {
      number: 60,
      image: ilustracion3,
      label: "Carreras en 2023",
      color: "#1facbe",
    },
    {
      number: 2500,
      image: ilustracion4,
      label: "Personas inscriptas",
      color: "#ed1581",
    },
    {
      number: 1624,
      image: ilustracion5,
      label: "Millones de pesos en inversión",
      color: "#1facbe",
    },
    {
      number: 37,
      image: ilustracion6,
      label: "Centros universitarios en construcción, ampliación o refacción",
      color: "#ed1581",
    },
  ];

  const UnivImages = [
    uni1,
    uni2,
    uni3,
    uni4,
    uni5,
    uni6,
    uni7,
    uni8,
    uni9,
    uni10,
    uni11,
  ];

  /*useEffect(()=>{
    let newBsAsJs=[];
    BsAs.locations.map((m,i)=>{
      let jsonDepto;
      newBsAsJs.push({
        id:Departamentos[i].id,
        name:Departamentos[i].departamento,
        cabecera:Departamentos[i].cabecera,
        path:m.path
      })
      
    })
    console.log(JSON.stringify(newBsAsJs));
  }
  ,[])*/

  const pathname = usePathname();
  useEffect(() => {
    if (window.location.hash) {
      let localtiontoScroll = window.location.hash.replace("#", "");

      window.location.hash = "";
      scroller.scrollTo(localtiontoScroll, {
        duration: 1500,
        delay: 100,
        smooth: true,
        containerId: localtiontoScroll,
      });
    }
  }, [pathname]);
  return (
    <ChakraProvider>
      <div className={styles.container} style={{ overflow: "hidden" }}>
        <Head>
          <title>
            Puentes | Programa de integración territorial universitaria{" "}
          </title>
          <meta
            name="description"
            content="Programa de integración territorial universitaria."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavbarWeb />
        <NavbarMobile></NavbarMobile>
        <div className={styles.welcome}>
          <div
            style={{
              zIndex: 1500,
              height: "100vh",
              width: "100vw",
              position: "absolute",
              alignItems: "center",

              display: "flex",
            }}
            className="row"
          >
            <Image
              className=" d-block d-sm-none "
              style={{ objectFit: "contain", width: "100%", left: 0 }}
              src={LogoPuentesMobile}
            ></Image>
            <Image
              className="col-lg-5 col-md-5-col-sm-12 d-none d-sm-block "
              style={{ objectFit: "contain", marginLeft: "16vw" }}
              src={LogoPuentesLeft}
            ></Image>
          </div>

          <div className={styles.backgroundBannerContainer}>
            <div
              className="d-none d-sm-block "
              style={{
                position: "absolute",
                width: "30%",
                bottom: "0%",
                zIndex: 9999,
                left: "13vw",
              }}
            >
              <Image style={{ height: "100%", width: "100%" }} src={FotoProv} />
            </div>
            <div
              className="d-block d-sm-none "
              style={{
                position: "absolute",
                width: "100%",
                bottom: "10%",
                zIndex: 999,
              }}
            >
              {/* <Image style={{ height: "100%", width: "80%" ,right:0}} src={FotoDer} /> */}

              <Image
                style={{ height: "100%", width: "100%" }}
                src={FotoProvMob}
              />
            </div>
            <Image className={styles.backgroundBanner} src={BackgroundBanner} />
            <div className="d-none d-sm-block ">
              <Image className={styles.fotoBanner} src={FotoBanner} />
            </div>
            <div className="d-block d-sm-none ">
              <Image className={styles.fotoBanner} src={FotoBannerMobile} />
            </div>

            <div
              className="d-none d-sm-block "
              style={{
                position: "absolute",
                width: "30%",
                bottom: "0%",
                zIndex: 9999,
                right: "13vw",
              }}
            >
              <Image style={{ height: "100%", width: "100%" }} src={FotoDer} />
              {/* <Image style={{ height: "100%", width: "100%" }} src={FotoLogoDer} /> */}
            </div>
          </div>
        </div>

        <div className="d-none d-sm-block" style={{ position: "relative" }}>
          <Section
            style={{ maxWidth: "100%" }}
            id="Programa2"
            background={BackgroundPrograma2}
          >
            <div className={styles.statsContainer}>
              <div className="row">
                {statsWeb.map((s, i) => (
                  <div className="col-lg-4 col-6">
                    <StatsCard
                      fontColor={s.color}
                      ilustracion={s.image}
                      stat={s.number}
                      label={s.label}
                    ></StatsCard>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                //center horizontally the absolute div
                position: "absolute",
                bottom: "10%",
                left: "50%",
                transform: "translate(-50%, 0)",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  backgroundColor: "#ec1482",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.location.href = "/programa";
                }}
              >
                <h3
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    padding: 10,
                    paddingLeft: 15,
                    paddingRight: 15,
                  }}
                  className="stats-label"
                >
                  VER MÁS
                </h3>
              </div>
            </div>
          </Section>
        </div>

        <div
          className="d-block d-sm-none"
          style={{
            position: "relative",
            maxHeight: "65vh",
            minHeight: 600,
            paddingTop: 15,
          }}
        >
          <Section
            style={{ maxWidth: "100%", maxHeight: "100vh" }}
            id="Programa2"
            background={BackgroundPrograma2}
          >
            <div className={styles.statsContainer}>
              <div className="row">
                {stats.map((s, i) => (
                  <div className="col-lg-4 col-6" style={{ padding: 0 }}>
                    <StatsCard
                      fontColor={s.color}
                      ilustracion={s.image}
                      stat={s.number}
                      label={s.label}
                    ></StatsCard>
                  </div>
                ))}
                <div style={{ position: "absolute", top: 0, left: -15 }}>
                  <Image src={Ball} style={{ width: 65, height: 65 }} />
                </div>
              </div>
              <div style={{ position: "absolute", top: "30%", right: 0 }}>
                <Image src={Ballr} style={{ width: 80, height: 80 }} />
              </div>
            </div>

            <div
              style={{
                //center horizontally the absolute div
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translate(-50%, 0)",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  backgroundColor: "#ec1482",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.location.href = "/programa";
                }}
              >
                <h3
                  style={{ color: "white", fontWeight: "bold", padding: 10 }}
                  className="stats-label"
                >
                  VER MÁS
                </h3>
              </div>
            </div>
          </Section>
        </div>
        <div className="d-none d-sm-block">
          <Section
            id="Programa"
            background={BackgroundPrograma}
            gradientCode={"programa"}
            name="Programa"
          >
            <ComponenteMapaWeb></ComponenteMapaWeb>
          </Section>
        </div>

        <div
          className="d-block d-sm-none"
          id="ProgramaMobile"
          name="ProgramaMobile"
          style={{ minHeight: "113vw" }}
        >
          <ComponenteMapaWobile></ComponenteMapaWobile>
        </div>

        <div className="d-none d-sm-block">
          <Section
            id="Oferta"
            customStyles={{ maxHeight: "100vw",
            position: "relative",
          }}
            background={BackgroundOferta}
          >
            <MUC></MUC>
          </Section>
        </div>

        <div className="d-block d-sm-none">
          <Section
            id="Oferta"
            customStyles={{
              maxHeight: "100vw",
              minHeight: "105vw",
              zIndex: 999,
            }}
            background={BackgroundOferta}
          >
            <MUC></MUC>
          </Section>
        </div>

        <SectionGaleria id="Galeria" background={BackgroundGaleria}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "100%",
              height: "400px",
              position: "relative",
              zIndex: -10,
            }}
          >
            <div
              className="instapost"
              data-mc-src="e8f096f6-d988-48df-862d-b4a663484442#instagram"
            >
              <div
                className="cover-instagram"
                style={{
                  backgroundColor: "white",
                  position: "absolute",

                  width: "80%",

                  zIndex: 999,
                }}
              ></div>
            </div>
          </div>
        </SectionGaleria>
        <Section id="Universidades" gradientCode={"universidades"}>
          <div className={"uni-section-container"}>
            <div
              className="row"
              style={{ justifyContent: "center", marginTop: 30 }}
            >
              {UnivImages.map((m) => (
                <div className="col-lg-3 col-6 uni-image-container">
                  <Image
                    className="uni-image d-none d-sm-block"
                    src={m}
                  ></Image>
                  <Image
                    className="uni-image d-block d-sm-none"
                    style={{ width: "100%" }}
                    src={m}
                  ></Image>
                </div>
              ))}
            </div>
          </div>
        </Section>
        <Section id="Footer" gradientCode={"footer"}>
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Image
              className={"logoPuentesFooter"}
              src={LogoPuentesNoBottom}
            ></Image>
            <SocialFooterIcons></SocialFooterIcons>
            <div
              style={{
                position: "absolute",
                width: "100%",
                backgroundColor: "#4ca8ba",
                height: 140,
                bottom: "15%",
                boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.5)",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Image
                className="d-none d-sm-block"
                style={{ height: "100%", width: "auto" }}
                src={FotoProvWhite}
              />
              <Image
                className="d-block d-sm-none"
                style={{ height: "auto", width: "70%" }}
                src={FotoProvWhite}
              />
            </div>
            <div
              style={{
                position: "absolute",
                width: "100%",

                height: 140,
                top: -60,
                left: 0,
              }}
            >
              <Image
                className="d-block d-sm-none"
                style={{ height: "auto", width: "100%" }}
                src={Details}
              />
              <Image
                className="d-none d-sm-block"
                style={{ height: "100%", width: "auto" }}
                src={Details}
              />
            </div>
          </div>
        </Section>
        <footer className={styles.footer}></footer>
      </div>
    </ChakraProvider>
  );
}
