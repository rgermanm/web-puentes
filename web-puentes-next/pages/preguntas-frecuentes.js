import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavbarWeb from "../components/navbarweb";
import {Section} from "../components/section";
import BackgroundBanner from "../public/Assets/Banner-SeccionPreguntasFrecuentes.jpg";
import BackgroundBannerMOBILE from "../public/Assets/Banner-SeccionPreguntasFrecuentes.PNG";
import LogoPuentes from "../public/Assets/logos/LogoPuentes.svg";
import BackgroundSeccion from "../public/Assets/Background- SeccionPreguntasFrecuentes.png";
import BackgroundSeccionMobile from "../public/Assets/Background- SeccionPreguntasFrecuentesMobile.png";
import LogoPuentesNoBottom from "../public/Assets/LogoPuentesProgramaNoBottom.svg";



import Accordion from "react-bootstrap/Accordion";
import NavbarMobile from "../components/navbarMobile";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import SocialFooterIcons from "../components/SocialFooterIcons";
let acoList = [
  {
    title: "El programa",
    body: "",
    secondBody: [
      {
        title: "¿Qué es Puentes?",
        body: "Es un programa para el desarrollo de la educación superior universitaria en territorio bonaerense. Tiene como objetivos generar y ampliar oferta educativa (carreras universitarias) y construir/ampliar centros educativos en municipios, para tender así _puentes_ entre las universidades, el territorio y las y los potenciales estudiantes.",
      },

      {
        title: "¿Para qué me sirve que llegue Puentes a mi municipio?",
        body: "Puentes da la oportunidad a las y los habitantes de los municipios adherentes de cursar estudios universitarios gratuitos en su lugar de origen, sin viajar ni alejarse de su núcleo familiar y de amistades, y sin los costos que implica un alquiler en otro punto de la provincia/país.",
      },

      {
        title: "¿Cómo sé si está Puentes en mi municipio?",
        body: "Consultá el botón “Municipios” o el mapa de la “Red de centros universitarios Puentes” en la página de Inicio de este sitio.",
      },
    ],
  },

  {
    title: "Beneficiarios y beneficiarias",
    body: "Las y los habitantes de los municipios adheridos actualmente a Puentes y los que adhieran en el futuro, que decidan cursar una carrera universitaria",
  },

  {
    title: "Las carreras",
    body: "",
    secondBody: [
      {
        title: "¿Qué carreras hay en mi municipio?",
        body: "Si sabés qué Puentes ya está en tu municipio o en algún municipio cercano a tu domicilio, consultá el botón “Carreras” en la página de Inicio de este sitio.",
      },
      {
        title: "¿Tengo que pagar la carrera?",
        body: "No. Todas las carreras que se dictan en el marco de Puentes pertenecen a la oferta de universidades públicas y son gratuitas para las y los estudiantes.",
      },
      {
        title: "¿Cuál es la duración de las carreras?",
        body: "En la oferta académica de Puentes hay diplomaturas (ocho meses), tecnicaturas (dos a tres años), licenciaturas (cuatro años a cuatro años y medio) y ciclos de complementación curricular (dos años a dos años y medio).",
      },
    ],
  },

  {
    title: "Las cursadas",
    body: "",
    secondBody: [
      {
        title: "¿Cuáles son los horarios y lugares de cursada?",
        body: "Si ya sabés la carrera que querés cursar en tu municipio, consulta la fecha de inicio, los horarios y lugares de cursada en el área de Educación local, o en la sección… de este sitio.",
      },
      {
        title: "¿Puedo cursar más de una carrera?",
        body: "Sí, podés inscribirte en más de una carrera de la oferta académica de Puentes.",
      },
    ],
  },

  {
    title: "La inscripción",
    body: "",
    secondBody: [
      {
        title: "¿Dónde y cuándo me inscribo?",
        body:"Podés consultar las fechas y lugares de inscripción a las carreras en el área de Educación de tu municipio, en las redes de tu municipio o en la sección “Inscripciones abiertas” de este sitio."
      }
    ] 
  },

  {
    title: "Requisitos",
    body: "",
    secondBody: [
      {
        title: "¿Qué requisitos debo tener para inscribirme?",
        body: "Para inscribirte a las carreras debés tener el secundario completo (para las tecnicaturas y licenciaturas) y cumplir con la documentación que te solicite la Universidad a través de tu municipio.",
      },
      {
        title: "¿Qué documentación necesito?",
        body:"La documentación que necesitás para inscribirte en cada carrera podés consultarla en el área de Educación o en las redes de tu municipio."
      }
    ]
  },

  {
    title: "Cursadas",
    body: "",
    secondBody:[
      {
        title: "¿Hasta dónde tengo que viajar para cursar?",
        body: "Con Puentes no tenés que viajar grandes distancias. Podés elegir entre las carreras que se ofrecen en el centro universitario de tu municipio o de algún municipio vecino.",
      },
      {
        title: "¿El personal docente es el mismo que si estudio en la sede de la universidad?",
        body: "Sí. Las y los docentes pertenecen a las universidades que dictan cada carrera.",
      },
      {
        title: "¿Los programas de estudio son los mismos?",
        body: "Sí. Las carreras son las mismas que se cursan en las sedes centrales de las universidades.",
      },
      {
        title: "¿Dónde rindo los exámenes?",
        body: "Vas a rendir los exámenes en el mismo lugar y con la misma modalidad con la que estás realizando la cursada.",
      },
      {
        title: "¿Qué validez tendrá mi título?",
        body: "Tu título será expedido por la Universidad a la que corresponde tu carrera, de la misma manera que si cursaras en su sede central.",
      },
    
    ]
  },

  {
    title: "Centros Puentes",
    body: "",
    secondBody: [
      {
        title: "¿Qué es un centro Puentes?",
        body:"Los centros Puentes son espacios físicos construidos en los municipios con aporte del gobierno provincial para el desarrollo de clases presenciales, semipresenciales y virtuales. En estos centros se realiza también la asistencia administrativa y académica a estudiantes, en articulación con los municipios y las universidades."
      },
      {
        title: "¿Hay en mi municipio un centro Puentes?",
        body: "Para averiguarlo consultá el botón “Municipios” o el mapa de la “Red de centros universitarios Puentes” en la página de Inicio de este sitio."
      },
      {
        title: "¿Qué puedo hacer si todavía no llegó Puentes a mi municipio?",
        body:"Si Puentes todavía no está en tu municipio, consulta la oferta del programa en municipios cercanos en el botón “Municipios” o el mapa de la “Red de centros universitarios Puentes” en la página de Inicio de este sitio."

      }
    ]
  },

  {
    title: "Becas",
    body: "",
    secondBody:[
      {
        title: "¿Si curso una carrera de la oferta de Puentes, puedo solicitar una beca Progresar?",
        body:"Si cursás una tecnicatura, licenciatura o ciclo de la oferta académica de Puentes y cumplís con los requisitos exigidos por el programa (https://www.argentina.gob.ar/educacion/progresar/requisitos/progresar-nivel-superior), podés solicitar una beca Progresar."
      }
    ]
  },
  {
    title: "Consultas",
    body: "",
    secondBody: [
      {
        title:"¿Cuáles son las vías de comunicación si tengo otras consultas?",
        body: "Podés comunicarte vía correo electrónico a puentes@gba.gob.ar"
      }
    ]
  },
];
export default function PreguntasFrecuentes() {
  const pathname = usePathname();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <div className={styles.container}>
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
      <div className="marginMobile">
        <Image
          style={{
            width: "100vw",
            height: "65vw",
            position: "absolute",
            top: "20vw",
          }}
          className="d-none d-sm-block"
          src={BackgroundSeccion}
        />
          <Image
          style={{
            width: "100vw",
            height: "65vw",
            position: "absolute",
            top: "20vw",
          }}
          className="d-block d-sm-none"
          src={BackgroundSeccionMobile}
        />
        <Image
          style={{ width: "100vw", height: "25vw" }}
          className="d-none d-sm-block"
          src={BackgroundBanner}
        />
         <Image
          style={{ width: "100vw", height: "25vw" }}
          className="d-block d-sm-none"
          src={BackgroundBannerMOBILE}
        />
        <h1 className="d-none d-sm-block pageTitle">Preguntas Frecuentes</h1>

        <Section id="Programa2">
          <div
            style={{
              width: "95%",
              paddingLeft: "3vw",
              marginTop: "7vw",
            }}
          >
            <Accordion defaultActiveKey="0">
              {acoList.map((acorData, index) => (
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
                    {acorData.secondBody && (
                      <div
                        style={{
                          width: "95%",
                          paddingLeft: "1vw",
                        
                   
                        }}
                      >
                        <Accordion>
                          {acorData.secondBody.map((acorData, index) => (
                            <Accordion.Item
                              eventKey={index + "_secondary"}
                              style={{
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                              }}
                            >
                              <Accordion.Header>
                                <h5
                                  style={{
                                    padding: 0,
                                    margin: 0,
                                    color: "#52ABBF",
                                    fontFamily: "EncodeSans",
                              
                                  }}
                                  className="titleMobile"
                                >
                                  {acorData.title}
                                </h5>
                              </Accordion.Header>
                              <Accordion.Body>{acorData.body}</Accordion.Body>
                            </Accordion.Item>
                          ))}
                        </Accordion>
                      </div>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Section>

        <Section id="Footer" gradientCode={"footer"}>
          <div style={{ height: "100vh", display: "flex",justifyContent:"center",alignItems:"center" }}>
            <div
              style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <Image
                style={{
                  height: "50%",
                  maxWidth: "100%",
                }}
                src={LogoPuentesNoBottom}
              ></Image>

              <SocialFooterIcons></SocialFooterIcons>
            </div>
          </div>
        </Section>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}
