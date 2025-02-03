import React from 'react'
import Head from 'next/head'


import '../CSS/styles.css'
export default function App({ Component, pageProps }) {
  return (
    
     
    <>
    <Head>
      <title>Modespace</title>
    </Head>
    <Component {...pageProps} />
  </>
    )
}