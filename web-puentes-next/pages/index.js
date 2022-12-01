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
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Puentes</title>
        <meta name="description" content="Plan de integración territorial universitaria." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>

      <div className={styles.welcome}>
        
        <div className={styles.backgroundBannerContainer}>
          <Image className={styles.backgroundBanner} src={BackgroundBanner} />
          <Image className={styles.fotoBanner} src={FotoBanner}/>

        </div>
      </div>
      <Section background={BackgroundOferta}></Section>
      <Section background={BackgroundPrograma}></Section>
      <Section background={BackgroundPrograma2}></Section>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
