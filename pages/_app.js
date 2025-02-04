import React from 'react'
import Head from 'next/head'


import '../CSS/styles.css'
export default function App({ Component, pageProps }) {
  return (
    
     
    <>
    <Head>
      <title>Modespace</title>
      <meta property="og:title" content="Modespace | Strong websites for design inspiration." />
      <meta property="og:url" content="https://johnbenjaminaucoin.github.io/Modespace/" />
    </Head>
    <Component {...pageProps} />
  </>
    )
}