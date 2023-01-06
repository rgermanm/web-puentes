import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Section from '../components/section'
import BackgroundBanner from '../public/Assets/BackgroundBanner.png';
import FotoBanner from '../public/Assets/FotoBanner.jpg'
import BackgroundOferta from '../public/Assets/Background-OfertaAcademica-01.png';
import BackgroundPrograma from '../public/Assets/Background-ElPrograma1-01.png';
import BackgroundPrograma2 from '../public/Assets/Background-ElPrograma2-01.png';
import BackgroundGaleria from '../public/Assets/Background-Galeria-01.png';
import LogoPuentes from '../public/Assets/logos/LogoPuentes.svg'
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
import StatsCard from '../components/StatsCard'

export default function Home() {


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


  return (
    <div className={styles.container}>
      <Head>
        <title>Puentes | Plan de integración territorial universitaria </title>
        <meta name="description" content="Plan de integración territorial universitaria." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
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
        <div style={{ width: "75%", height: "100vh", margin: "auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className='row'>

            {stats.map((s, i) =>
              <div className='col-4'>
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
                  <h5 className={styles.centroTitleStrong}> CON PLAN PUENTES</h5>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "80px" }}>
              <div style={{ display: "flex", alignItems: "center", height: "40px", minWidth: "200px", paddingLeft: "80px", paddingRight: "80px", paddingTop: "auto", paddingBottom: "auto", backgroundColor: "#1cafc2", cursor: "pointer", borderRadius: "14px", marginRight: "10px" }}>
                <h6 style={{ margin: "0px" }} className={styles.centroTitleStrong}> MÁS INFO</h6>
              </div>

            </div>
          </div>
          <div style={{ width: "50%", height: "100vh", margin: "0px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src={mapaPBA}></Image>
          </div>
        </div>

      </Section>

      <Section id="Galeria" background={BackgroundGaleria} gradientCode={gradientCodes.galeria}>
        <div style={{ height: "100vh", display: "flex" }}>
          <Image style={{
            width: "auto",
            maxWidth: "60%",
            height: "auto",
            margin: "auto",
            maxHeight: "100%",
          }} src={galeria}></Image>
        </div>
      </Section>
      <Section id="Universidades" gradientCode={gradientCodes.universidades}>
        <div style={{ width: "100%", height: "100vh", margin: "0px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image src={logosUni} style={{ height: "60vh", width: "auto" }}></Image>
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
