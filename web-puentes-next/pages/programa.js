import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Section from "../components/section";
import BackgroundBanner from "../public/Assets/Banner-SeccionElPrograma.jpg";
import BackgroundSeccion from "../public/Assets/Background- SeccionPreguntasFrecuentes.png";
import FotoBanner from "../public/Assets/FotoBanner.jpg";
import BackgroundOferta from "../public/Assets/Background-OfertaAcademica-01.png";
import BackgroundPrograma from "../public/Assets/Background-ElPrograma1-01.png";
import BackgroundPrograma2 from "../public/Assets/Background-ElPrograma2-01.png";
import BackgroundGaleria from "../public/Assets/Background-Galeria-01.png";
import LogoPuentes from "../public/Assets/logos/LogoPuentes.svg";
import gradientCodes from "../public/gradientCodes.json";

import ilustracionesPrograma from "../public/Assets/Ilustraciones2.svg";
import galeria from "../public/Assets/FotoProvisoria-Galeria-01.jpg";

import mapaPBA from "../public/Assets/MapaPBA.svg";
import logosUni from "../public/Assets/LogosUniversidades.svg";
import MUC from "../components/muc";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Puentes</title>
        <meta
          name="description"
          content="Plan de integración territorial universitaria."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Image
        style={{ width: "100vw", height: "65vw",position:"absolute",top:"23vw" }}
        src={BackgroundSeccion}
      />
      <Image
        style={{ width: "100vw", height: "25vw" }}
        src={BackgroundBanner}
      />
      <h1 style={{color:"white",position:"absolute",top:"12vw",marginLeft:52,fontFamily: "EncodeSans-Bold" ,textTransform:"uppercase"}}>El Programa</h1>
     
      <Section id="Programa2" background={BackgroundPrograma2}>
        <div className="muc-list ">
          <div
            className=" w-100 align-items-center justify-center"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginTop: "15vh",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                color: "#ed1581",
                margin: "0px",
                cursor: "pointer",
                fontFamily: "EncodeSans",
                fontSize: "1.5vw",
                maxWidth: "65%",
              }}
            >
              <span style={{ fontFamily: "EncodeSans-Bold" }}>PUENTES</span> es
              un programa del gobierno de la provincia de Buenos Aires que busca
              garantizar para las y los bonaerenses la{" "}
              <span
                style={{
                  color: "white",
                  backgroundColor: "#ed1581",
                  paddingLeft: 5,
                  paddingRight: 5,
                  fontFamily: "EncodeSans-Bold",
                }}
              >
                igualdad de derechos en el acceso a la educación universitaria.
              </span>
            </p>

            <p
              style={{
                color: "#ed1581",
                margin: "0px",
                cursor: "pointer",
                fontFamily: "EncodeSans",
                fontSize: "1.5vw",
                maxWidth: "65%",
                marginTop: "10vh",
              }}
            >
              A través de Puentes, el gobierno provincial realiza acuerdos con
              las universidades y los gobiernos locales para el dictado de
              carreras en los municipios. Así se multiplican las opciones de
              estudios universitarios en todo nuestro territorio.
            </p>

            <p
              style={{
                color: "#ed1581",
                margin: "0px",
                cursor: "pointer",
                fontFamily: "EncodeSans",
                fontSize: "1.5vw",
                maxWidth: "65%",
                marginTop: "10vh",
              }}
            >
              En los distritos que adhieren al programa, el Estado provincial
              subsidia  <span style={{ fontFamily: "EncodeSans-Bold" }}>carreras orientadas al desarrollo de actividades
              productivas y de servicios.</span> La oferta académica abarca
              <span style={{ fontFamily: "EncodeSans-Bold" }}></span>diplomaturas, tecnicaturas y licenciaturas, con modalidad
              presencial, semipresencial y virtual. Además se promueve la
              creación de centros universitarios locales, con aporte de fondos
              para la construcción y/o refacción de estos espacios educativos o
              su equipamiento para la creación de aulas bimodales.
            </p>
          </div>
        </div>
      </Section>

      <Section id="Footer" gradientCode={gradientCodes.footer}>
        <div style={{ height: "100vh", display: "flex" }}>
          <Image
            style={{
              width: "auto",
              maxWidth: "60%",
              height: "auto",
              margin: "auto",
              maxHeight: "60%",
            }}
            src={LogoPuentes}
          ></Image>
        </div>
      </Section>
      <footer className={styles.footer}></footer>
    </div>
  );
}
