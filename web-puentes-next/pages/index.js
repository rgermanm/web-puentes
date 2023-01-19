import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Section from '../components/section'
import BackgroundBanner from '../public/Assets/BackgroundBanner.png';
import FotoBanner from '../public/Assets/FotoBanner.jpg'
import BackgroundOferta from '../public/Assets/Background-OfertaAcademica-01.png';
import BackgroundPrograma from '../public/Assets/Background-ElPrograma1-01.png';
import BackgroundPrograma2 from '../public/Assets/Background-ElPrograma2-01.png';
import BackgroundGaleria from '../public/Assets/Background-Galeria-01.png';
import LogoPuentes from '../public/Assets/LogoPuentesPrograma.svg'
import gradientCodes from '../public/gradientCodes.json'

import ilustracionesPrograma from '../public/Assets/Ilustraciones2.svg'
import galeria from '../public/Assets/FotoProvisoria-Galeria-01.jpg'

import mapaPBA from '../public/Assets/MapaPBA.svg'
import logosUni from '../public/Assets/LogosUniversidades.svg'
import MUC from '../components/muc'
import ilustracion1 from '../public/Assets/ilustraciones/1.svg'

import ilustracion2 from '../public/Assets/ilustraciones/2.svg'
import ilustracion3 from '../public/Assets/ilustraciones/3.svg'
import ilustracion4 from '../public/Assets/ilustraciones/4.svg'
import ilustracion5 from '../public/Assets/ilustraciones/5.svg'
import ilustracion6 from '../public/Assets/ilustraciones/6.svg'

import uni1 from '../public/Assets/logos/universidades/1.jpeg';
import uni2 from '../public/Assets/logos/universidades/2.png';
import uni3 from '../public/Assets/logos/universidades/3.jpeg';
import uni4 from '../public/Assets/logos/universidades/4.jpeg';
import uni5 from '../public/Assets/logos/universidades/5.jpeg';
import uni6 from '../public/Assets/logos/universidades/6.png';
import uni7 from '../public/Assets/logos/universidades/7.png';
import uni8 from '../public/Assets/logos/universidades/8.png';
import uni9 from '../public/Assets/logos/universidades/9.png';
import uni10 from '../public/Assets/logos/universidades/10.jpeg';
import uni11 from '../public/Assets/logos/universidades/f.jpeg';
import StatsCard from '../components/statsCard'
import { SVGMap } from "react-svg-map";

import BsAs from "../components/BSASFinalNamed";

import { useEffect, useState } from 'react'
import NavbarWeb from '../components/navbarweb'
import NavbarMobile from '../components/navbarMobile';


export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState("Municipios");

  const stats = [{
    number: 36,
    image: ilustracion1,
    label: "Municipios en Puentes"
  },
  {
    number: 11,
    image: ilustracion2,
    label: "Universidades"
  },
  {
    number: 60,
    image: ilustracion3,
    label: "Ofertas academicas en 2023"
  },
  {
    number: 350,
    image: ilustracion4,
    label: "Estudiantes inscriptos e inscriptas"
  },
  {
    number: 1531,
    image: ilustracion5,
    label: "Millones de pesos en inversión"
  },
  {
    number: 36,
    image: ilustracion6,
    label: "Centros universitarios en construcción, ampliación o refacción"
  },]


  const UnivImages = [
    uni1, uni2, uni3, uni4, uni5, uni6, uni7, uni8, uni9, uni10, uni11
  ]

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

  return (
    <div className={styles.container}>
      <Head>
        <title>Puentes | Programa de integración territorial universitaria </title>
        <meta name="description" content="Programa de integración territorial universitaria." />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <NavbarWeb />
      <NavbarMobile></NavbarMobile>
      <div className={styles.welcome}>
        <div style={{ zIndex: 1500, height: "100vh", width: "100vw", position: "absolute" }} className="row">

          <Image className="col-lg-5 col-md-5-col-sm-12" style={{ objectFit: "contain" }} src={LogoPuentes}></Image>


        </div>

        <div className={styles.backgroundBannerContainer}>

          <Image className={styles.backgroundBanner} src={BackgroundBanner} />
          <Image className={styles.fotoBanner} src={FotoBanner} />
        </div>

      </div>
      <Section id="Programa2" background={BackgroundPrograma2}>
        <div className={styles.statsContainer}>
          <div className='row'>

            {stats.map((s, i) =>
              <div className='col-lg-4 col-6'>
                <StatsCard fontColor={i % 2 == 1 ? "#1facbe" : "#ed1581"} ilustracion={s.image} stat={s.number} label={s.label}></StatsCard>
              </div>
            )}



          </div>

        </div>
      </Section >
      <Section id="Oferta" background={BackgroundOferta} >
        {   /*     <div style={{ width: "100%", height: "100vh", margin: "0px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ backgroundColor: "#ec1482" }} className={`${styles.ballSection} col-md-4`}><h3>MUNICIPIOS</h3></div>
          <div style={{ backgroundColor: "#1cafc2", marginLeft: "40px", marginRight: "50px" }} className={`${styles.ballSection} col-4`}><h3>UNIVERSIDADES</h3></div>
          <div style={{ backgroundColor: "#ec1482" }} className={`${styles.ballSection} col-4`}><h3>CARRERAS</h3></div>
  </div>*/}
        <MUC></MUC>
      </Section>

      <Section id="Programa" background={BackgroundPrograma} gradientCode={gradientCodes.programa} name="Programa">

        <div style={{ width: "100%", height: "100vh", margin: "0px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "50%", height: "60vh", margin: "0px", flexDirection: "column", display: "flex", alignItems: "flex-start", paddingLeft: "5%", justifyContent: "space-between" }}>
            <div>
              <h3 className={styles.centroTitle}>RED DE CENTROS</h3>
              <h3 className={styles.centroTitle}>UNIVERSITARIOS <strong className={styles.centroTitleStrong}>PUENTES</strong></h3>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "80px" }}>
                <div style={{ height: "50px", width: "50px", backgroundColor: "#ec1482", borderRadius: "100%", marginRight: "10px" }}></div>
                <div>
                  <h5 className={styles.centroTitle}>MUNICIPIOS </h5>
                  <h5 className={styles.centroTitleStrong}> CON PROGRAMA PUENTES</h5>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "80px" }}>
              { /*<div style={{ display: "flex", alignItems: "center", height: "40px", minWidth: "200px", paddingLeft: "80px", paddingRight: "80px", paddingTop: "auto", paddingBottom: "auto", backgroundColor: "#1cafc2", cursor: "pointer", borderRadius: "14px", marginRight: "10px" }}>
                <h6 style={{ margin: "0px" }} className={styles.centroTitleStrong}> MÁS INFO</h6>
</div>*/}

            </div>
          </div>
          <div style={{ position: "relative", width: "40%", height: "90vh", margin: "0px", display: "flex", alignItems: "center", justifyContent: "center" }}>

            <SVGMap onLocationMouseOver={(e) => setSelectedLocation(e.target.ariaLabel)} map={BsAs} />
            <div style={{
              //cartel con el nombre del municipio, borde redondeado rosa , fondo azul, con sombra
              position: "absolute",
              bottom: 10,
              zIndex: 1000,

              backgroundColor: "#1cafc2",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",

              border: "2px solid #ec1482"
            }}>
              <h5 style={{ margin: "0px" }} className={styles.centroTitleStrong}>{selectedLocation}</h5>
              <h5 style={{ margin: "0px" }} className={styles.centroTitle}>UNIVERSIDADES</h5>
              <h5 style={{ margin: "0px" }} className={styles.centroTitleStrong}>CARRERAS</h5>
            </div>


          </div>
        </div>

      </Section>

      <Section id="Galeria" background={BackgroundGaleria} gradientCode={gradientCodes.galeria}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: "100%" }}>
          <div className='instapost' style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: "100vw" }} data-mc-src="e8f096f6-d988-48df-862d-b4a663484442#instagram"></div>
        </div>
      </Section>
      <Section id="Universidades" gradientCode={gradientCodes.universidades}>
       
        <div className={"uni-section-container"}>
          <div className='row'>
            {UnivImages.map((m) =>
              <div className='col-lg-3 col-6 uni-image-container'>
                <Image className='uni-image' src={m} ></Image>
              </div>
            )}
          </div>
        </div>
      </Section>
      <Section id="Footer" gradientCode={gradientCodes.footer}>
        <div style={{ height: "100vh", display: "flex" }}>
          <Image style={{
            width: "auto",
            maxWidth: "60%",
            height: "auto",
            margin: "auto",
            maxHeight: "60%",
          }} src={LogoPuentes}></Image>
        </div>

      </Section>
      <footer className={styles.footer}>

      </footer>
    </div >
  )
}
