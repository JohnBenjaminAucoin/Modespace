import React from 'react'
import Head from 'next/head'


import '../CSS/styles.css'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Modespace</title>
        <link rel="icon" type="image/x-icon" href="https://johnbenjaminaucoin.github.io/Modespace/images/favicon.png" />

        <meta property="og:title" content="Modespace" />
        <meta property='og:description' content="Strong websites for design inspiration." />
        <meta property="og:url" content="https://johnbenjaminaucoin.github.io/Modespace/" />
        <meta property="og:image" content="https://johnbenjaminaucoin.github.io/Modespace/images/preview-img.png" />

      </Head>
      <Component {...pageProps} />
    </>
  )
}