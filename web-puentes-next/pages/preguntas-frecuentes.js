import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavbarWeb from "../components/navbarweb";
import Section from "../components/section";
import BackgroundBanner from "../public/Assets/Banner-SeccionPreguntasFrecuentes.jpg";
import FotoBanner from "../public/Assets/FotoBanner.jpg";
import BackgroundOferta from "../public/Assets/Background-OfertaAcademica-01.png";
import BackgroundPrograma from "../public/Assets/Background-ElPrograma1-01.png";
import BackgroundPrograma2 from "../public/Assets/Background-ElPrograma2-01.png";
import BackgroundGaleria from "../public/Assets/Background-Galeria-01.png";
import LogoPuentes from "../public/Assets/logos/LogoPuentes.svg";
import gradientCodes from "../public/gradientCodes.json";
import BackgroundSeccion from "../public/Assets/Background- SeccionPreguntasFrecuentes.png";

import ilustracionesPrograma from "../public/Assets/Ilustraciones2.svg";
import galeria from "../public/Assets/FotoProvisoria-Galeria-01.jpg";

import mapaPBA from "../public/Assets/MapaPBA.svg";
import logosUni from "../public/Assets/LogosUniversidades.svg";
import MUC from "../components/muc";

import Accordion from "react-bootstrap/Accordion";
import NavbarMobile from "../components/navbarMobile";
let acoList =[
  {
    title: "El programa",
    body: "El Programa de Integración Territorial Universitaria (PITU) es un programa de la Secretaría de Políticas Universitarias (SPU) del Ministerio de Educación de la Nación, que tiene como objetivo promover la articulación entre las universidades y las comunidades de la región, a través de la realización de proyectos de extensión universitaria. El PITU se desarrolla en el marco de la Ley de Educación Superior N° 24.521 y de la Resolución 1.000/2019 del Ministerio de Educación de la Nación."
  },

  {
    title: "Beneficiarios y beneficiarias",
    body: "El Programa de Integración Territorial Universitaria (PITU) es un programa de la Secretaría de Políticas Universitarias (SPU) del Ministerio de Educación de la Nación, que tiene como objetivo promover la articulación entre las universidades y las comunidades de la región, a través de la realización de proyectos de extensión universitaria. El PITU se desarrolla en el marco de la Ley de Educación Superior N° 24.521 y de la Resolución 1.000/2019 del Ministerio de Educación de la Nación."
  },

  {
    title: "Las carreras",
    body: "El Programa de Integración Territorial Universitaria (PITU) es un programa de la Secretaría de Políticas Universitarias (SPU) del Ministerio de Educación de la Nación, que tiene como objetivo promover la articulación entre las universidades y las comunidades de la región, a través de la realización de proyectos de extensión universitaria. El PITU se desarrolla en el marco de la Ley de Educación Superior N° 24.521 y de la Resolución 1.000/2019 del Ministerio de Educación de la Nación."
  },
  

  {
    title: "Las cursadas",
    body: "El Programa de Integración Territorial Universitaria (PITU) es un programa de la Secretaría de Políticas Universitarias (SPU) del Ministerio de Educación de la Nación, que tiene como objetivo promover la articulación entre las universidades y las comunidades de la región, a través de la realización de proyectos de extensión universitaria. El PITU se desarrolla en el marco de la Ley de Educación Superior N° 24.521 y de la Resolución 1.000/2019 del Ministerio de Educación de la Nación."
  },

  {
    title: "La inscripción",
    body: "El Programa de Integración Territorial Universitaria (PITU) es un programa de la Secretaría de Políticas Universitarias (SPU) del Ministerio de Educación de la Nación, que tiene como objetivo promover la articulación entre las universidades y las comunidades de la región, a través de la realización de proyectos de extensión universitaria. El PITU se desarrolla en el marco de la Ley de Educación Superior N° 24.521 y de la Resolución 1.000/2019 del Ministerio de Educación de la Nación."
  },

  {
    title: "Requisitos",
    body: "El Programa de Integración Territorial Universitaria (PITU) es un programa de la Secretaría de Políticas Universitarias (SPU) del Ministerio de Educación de la Nación, que tiene como objetivo promover la articulación entre las universidades y las comunidades de la región, a través de la realización de proyectos de extensión universitaria. El PITU se desarrolla en el marco de la Ley de Educación Superior N° 24.521 y de la Resolución 1.000/2019 del Ministerio de Educación de la Nación."
  },

  {
    title: "Cursadas",
    body: "El Programa de Integración Territorial Universitaria (PITU) es un programa de la Secretaría de Políticas Universitarias (SPU) del Ministerio de Educación de la Nación, que tiene como objetivo promover la articulación entre las universidades y las comunidades de la región, a través de la realización de proyectos de extensión universitaria. El PITU se desarrolla en el marco de la Ley de Educación Superior N° 24.521 y de la Resolución 1.000/2019 del Ministerio de Educación de la Nación."
  },

  {
    title: "Centros Puentes",
    body: "El Programa de Integración Territorial Universitaria (PITU) es un programa de la Secretaría de Políticas Universitarias (SPU) del Ministerio de Educación de la Nación, que tiene como objetivo promover la articulación entre las universidades y las comunidades de la región, a través de la realización de proyectos de extensión universitaria. El PITU se desarrolla en el marco de la Ley de Educación Superior N° 24.521 y de la Resolución 1.000/2019 del Ministerio de Educación de la Nación."
  },

  {
    title: "Becas",
    body: "El Programa de Integración Territorial Universitaria (PITU) es un programa de la Secretaría de Políticas Universitarias (SPU) del Ministerio de Educación de la Nación, que tiene como objetivo promover la articulación entre las universidades y las comunidades de la región, a través de la realización de proyectos de extensión universitaria. El PITU se desarrolla en el marco de la Ley de Educación Superior N° 24.521 y de la Resolución 1.000/2019 del Ministerio de Educación de la Nación."
  },
  {
    title: "Consultas",
    body: "El Programa de Integración Territorial Universitaria (PITU) es un programa de la Secretaría de Políticas Universitarias (SPU) del Ministerio de Educación de la Nación, que tiene como objetivo promover la articulación entre las universidades y las comunidades de la región, a través de la realización de proyectos de extensión universitaria. El PITU se desarrolla en el marco de la Ley de Educación Superior N° 24.521 y de la Resolución 1.000/2019 del Ministerio de Educación de la Nación."
  },
]
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Puentes</title>
        <meta
          name="description"
          content="Programa de integración territorial universitaria."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarWeb />
      <NavbarMobile></NavbarMobile>
      <div className="marginMobile">
      <Image
        style={{
          width: "100vw",
          height: "65vw",
          position: "absolute",
          top: "23vw",
        }}
        src={BackgroundSeccion}
      />
      <Image
        style={{ width: "100vw", height: "25vw" }}
        src={BackgroundBanner}
      />
      <h1
className="pageTitle"
      >
        Preguntas Frecuentes
      </h1>

      <Section id="Programa2">
        <div
          style={{
            width: "95%",
            paddingLeft: 50,
            marginTop: 100,
          }}
        >
          <Accordion defaultActiveKey="0">
            {acoList.map((acorData,index) => (
              <Accordion.Item
                eventKey={index}
                style={{ borderLeftWidth: 0, borderRightWidth: 0 }}
              >
                <Accordion.Header>
                  <h5
                    style={{
                      padding: 0,
                      margin: 0,
                      color: "#52ABBF",
                      fontFamily: "EncodeSans-Bold",
                    }}
                  >
                    {acorData.title}
                  </h5>
                </Accordion.Header>
                <Accordion.Body>
                {acorData.body}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
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
    </div>
  );
}
