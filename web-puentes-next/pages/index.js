import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Puentes</title>
        <meta name="description" content="Plan de integración territorial universitaria." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
