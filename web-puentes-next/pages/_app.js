import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Head from "next/head";
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
  src="https://cdn2.woxo.tech/a.js#63b9e87941a2f36aa92fd38c" 
  async data-usrc
  strategy="lazyOnload">
</Script>
      <Component {...pageProps} />
    
    </>
  )
}

export default MyApp
